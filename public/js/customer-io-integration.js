// src/scripts/customer-io-integration.js
// Integración completa con Customer.io

globalThis.CustomerIOIntegration = class CustomerIOIntegration {
  constructor(siteId, apiKey) {
    this.siteId = siteId;
    this.apiKey = apiKey;
    this.initialized = false;
  }

  /**
   * Inicializar Customer.io snippet
   */
  init() {
    if (this.initialized) return;

    // Verificar que tenemos las credenciales
    if (!this.siteId) {
      return;
    }

    try {
      // Inicializar el objeto _cio
      globalThis._cio = globalThis._cio || [];

      // Función helper para el tracking
      const a = function (f) {
        return function () {
          globalThis._cio.push(
            [f].concat(Array.prototype.slice.call(arguments, 0)),
          );
        };
      };

      // Métodos disponibles
      const b = ["load", "identify", "sidentify", "track", "page"];
      for (const method of b) {
        globalThis._cio[method] = a(method);
      }

      // Cargar el script de tracking
      const script = document.createElement("script"); // nosonar
      const firstScript = document.getElementsByTagName("script")[0];

      script.async = true;
      script.id = "cio-tracker";
      script.dataset("data-site-id", this.siteId);
      script.setAttribute("crossorigin", "anonymous");
      script.setAttribute("src", "https://assets.customer.io/assets/track.js"); // nosonar

      firstScript.parentNode.insertBefore(script, firstScript);

      this.initialized = true;

      // Identificar página actual
      this.trackPageView();
    } catch (error) {
      globalThis.ErrorHandler.handle("Customer.io init", error);
    }
  }

  /**
   * Identificar un usuario
   */
  identify(userId, attributes = {}) {
    if (!this.initialized || !globalThis._cio) {
      return;
    }

    try {
      globalThis._cio.identify({
        id: userId,
        ...attributes,
      });
    } catch (error) {
      globalThis.ErrorHandler.handle("Customer.io identify", error);
    }
  }

  /**
   * Trackear un evento
   */
  track(eventName, eventData = {}) {
    if (!this.initialized || !globalThis._cio) {
      return;
    }

    try {
      globalThis._cio.track(eventName, eventData);
    } catch (error) {
      globalThis.ErrorHandler.handle("Customer.io track", error);
    }
  }

  /**
   * Trackear vista de página
   */
  trackPageView() {
    if (!this.initialized || !globalThis._cio) return;

    try {
      globalThis._cio.page();
    } catch (error) {
      globalThis.ErrorHandler.handle("Customer.io page view", error);
    }
  }

  /**
   * Procesar envío de formulario para Customer.io
   */
  handleFormSubmission(formData, locationData) {
    if (!this.initialized) {
      return this.sendDirectToCustomerIO(formData, locationData);
    }

    try {
      const email = formData.get("email");
      const userId = email; // Usar email como ID

      // Determinar residencia
      const residencia = this.determineResidencia(locationData);

      // 1. IDENTIFICAR USUARIO CON TODOS SUS ATRIBUTOS
      const userAttributes = {
        ...this._buildPersonData(email, formData, locationData, residencia),
        form_type: "registration",
        program_year: "2025",
      };

      this.identify(userId, userAttributes);

      const eventData = {
        ...this._getCommonEventData(formData, locationData, residencia),
        form_name: "registrationForm",
        user_name: formData.get("name"),
        user_email: email,
        country_code: locationData.country.code,
        residencia_name: residencia.name,
        assigned_program: residencia.type,
        timestamp: new Date().toISOString(),
        program_year: "2025",
      };

      this.track("registration_completed", eventData);

      return Promise.resolve({ success: true });
    } catch (error) {
      globalThis.ErrorHandler.handle("Customer.io form submission", error);
      return this.sendDirectToCustomerIO(formData, locationData);
    }
  }

  /**
   * Envío directo usando Track API (fallback)
   */
  async sendDirectToCustomerIO(formData, locationData) {
    if (!this.apiKey) {
      throw new Error("API Key no configurada para envío directo");
    }

    const email = formData.get("email");
    const auth = btoa(`${this.siteId}:${this.apiKey}`);
    const residencia = this.determineResidencia(locationData);

    try {
      // 1. Crear/actualizar persona
      const personData = this._buildPersonData(email, formData, locationData, residencia);

      const personResponse = await fetch(
        `https://track.customer.io/api/v1/customers/${email}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Basic ${auth}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(personData),
        },
      );

      if (!personResponse.ok) {
        throw new Error(`Error creando persona: ${personResponse.status}`);
      }

      // 2. Enviar evento
      const eventData = {
        name: "registration_completed",
        data: this._getCommonEventData(formData, locationData, residencia),
      };

      const eventResponse = await fetch(
        `https://track.customer.io/api/v1/customers/${email}/events`,
        {
          method: "POST",
          headers: {
            Authorization: `Basic ${auth}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(eventData),
        },
      );

      if (!eventResponse.ok) {
        throw new Error(`Error enviando evento: ${eventResponse.status}`);
      }
      return { success: true };
    } catch (error) {
      globalThis.ErrorHandler.handle("Customer.io direct send", error);
      throw error;
    }
  }

  /**
   * Helper unificado para construir datos de persona
   */
  _buildPersonData(email, formData, locationData, residencia) {
    return {
      email: email,
      name: formData.get("name"),
      country: locationData.country.name,
      country_code: locationData.country.code,
      city: locationData.city,
      experience: formData.get("experience"),
      dev_language: formData.get("dev-language") || "",
      how_heard: formData.get("how-heard") || "",
      technologies: formData.get("technologies"),
      github: formData.get("github") || "",
      motivation: formData.get("motivation"),
      residencia_type: residencia.type,
      residencia_name: residencia.name,
      created_at: Math.floor(Date.now() / 1000),
      source: "b4os-website",
    };
  }

  /**
   * Helper unificado para construir datos de evento compartidos
   */
  _getCommonEventData(formData, locationData, residencia) {
    return {
      source: "landing_page",
      country: locationData.country.name,
      city: locationData.city,
      experience_level: formData.get("experience"),
      dev_language: formData.get("dev-language") || "",
      how_heard: formData.get("how-heard") || "",
      technologies: formData.get("technologies"),
      github_url: formData.get("github") || "",
      motivation: formData.get("motivation"),
      has_github: !!formData.get("github"),
      residencia_type: residencia.type,
    };
  }
};
