// public/js/location-api.js
// API robusta para países y ciudades - CORREGIDA

globalThis.LocationAPI = class LocationAPI {
  constructor() {
    this.config = {
      // API gratuita para todos los países
      COUNTRIES_API:
        "https://restcountries.com/v3.1/all?fields=name,cca2,translations,region,subregion",

      // Nueva API v2.1 de OpenDataSoft para ciudades
      CITIES_API_BASE: "https://public.opendatasoft.com/api/explore/v2.1",
      CITIES_DATASET: "geonames-all-cities-with-a-population-1000",

      // Configuración de caché
      CACHE_DURATION: 24 * 60 * 60 * 1000, // 24 horas
      CACHE_PREFIX: "b4os_location_",
    };

    this.countries = [];
    this.targetRegions = ["Americas", "Europe", "Africa"]; // América + Europa (España) + África
    this.targetSubregions = [
      "South America",
      "Central America",
      "Caribbean",
      "Southern Europe",
      "North America",
      "Northern Africa",
      "Western Africa",
      "Eastern Africa",
      "Southern Africa",
      "Middle Africa",
    ];
  }

  /**
   * Obtiene datos del caché
   */
  getFromCache(key) {
    try {
      const cached = localStorage.getItem(this.config.CACHE_PREFIX + key);
      if (cached) {
        const data = JSON.parse(cached);
        if (Date.now() - data.timestamp < this.config.CACHE_DURATION) {
          return data.value;
        }
        // Caché expirada, eliminar
        localStorage.removeItem(this.config.CACHE_PREFIX + key);
      }
    } catch (error) {
      globalThis.ErrorHandler.warn("Cache read", error);
    }
    return null;
  }

  /**
   * Guarda datos en caché
   */
  saveToCache(key, value) {
    try {
      const cacheData = {
        value,
        timestamp: Date.now(),
      };
      localStorage.setItem(
        this.config.CACHE_PREFIX + key,
        JSON.stringify(cacheData),
      );
    } catch (error) {
      globalThis.ErrorHandler.warn("Cache save", error);
    }
  }

  /**
   * Cargar países desde la API
   */
  async loadCountries() {
    // Intentar obtener del caché primero (v3 incluye África)
    const cached = this.getFromCache("countries_v3");
    if (cached) {
      this.countries = cached;
      return cached;
    }

    try {
      const response = await fetch(this.config.COUNTRIES_API);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const allCountries = await response.json();

      // Filtrar países relevantes
      const filteredCountries = allCountries
        .filter((country) => {
          // Incluir países de América y España
          return (
            this.targetRegions.includes(country.region) || country.cca2 === "ES"
          ); // Asegurar que España esté incluida
        })
        .map((country) => ({
          code: country.cca2,
          name: this.getCountryName(country),
          nameEnglish: country.name.common,
          region: country.region,
          subregion: country.subregion,
        }))
        .filter((country) => country.name) // Eliminar países sin nombre
        .sort((a, b) =>
          a.name.localeCompare(b.name, "es", { sensitivity: "base" }),
        );

      this.countries = filteredCountries;
      this.saveToCache("countries_v3", filteredCountries);

      return filteredCountries;
    } catch (error) {
      globalThis.ErrorHandler.warn("Failed to load countries", error);
      // Fallback a lista básica de países prioritarios
      return this.getFallbackCountries();
    }
  }

  /**
   * Obtener nombre del país en español
   */
  getCountryName(country) {
    // Priorizar nombre en español
    if (country.translations?.spa?.common) {
      return country.translations.spa.common;
    }

    // Mapeo manual para países importantes
    const spanishNames = {
      AR: "Argentina",
      BO: "Bolivia",
      BR: "Brasil",
      CL: "Chile",
      CO: "Colombia",
      CR: "Costa Rica",
      CU: "Cuba",
      EC: "Ecuador",
      SV: "El Salvador",
      ES: "España",
      GT: "Guatemala",
      HN: "Honduras",
      MX: "México",
      NI: "Nicaragua",
      PA: "Panamá",
      PY: "Paraguay",
      PE: "Perú",
      DO: "República Dominicana",
      UY: "Uruguay",
      VE: "Venezuela",
      US: "Estados Unidos",
      CA: "Canadá",
    };

    return spanishNames[country.cca2] || country.name.common;
  }

  /**
   * Lista de fallback para países prioritarios
   */
  getFallbackCountries() {
    // Array format: [code, name, region, subregion]
    const rawData = [
      ["AR", "Argentina", "Americas", "South America"],
      ["BO", "Bolivia", "Americas", "South America"],
      ["BR", "Brasil", "Americas", "South America"],
      ["CL", "Chile", "Americas", "South America"],
      ["CO", "Colombia", "Americas", "South America"],
      ["CR", "Costa Rica", "Americas", "Central America"],
      ["CU", "Cuba", "Americas", "Caribbean"],
      ["EC", "Ecuador", "Americas", "South America"],
      ["SV", "El Salvador", "Americas", "Central America"],
      ["ES", "España", "Europe", "Southern Europe"],
      ["GT", "Guatemala", "Americas", "Central America"],
      ["HN", "Honduras", "Americas", "Central America"],
      ["MX", "México", "Americas", "North America"],
      ["NI", "Nicaragua", "Americas", "Central America"],
      ["PA", "Panamá", "Americas", "Central America"],
      ["PY", "Paraguay", "Americas", "South America"],
      ["PE", "Perú", "Americas", "South America"],
      ["DO", "República Dominicana", "Americas", "Caribbean"],
      ["UY", "Uruguay", "Americas", "South America"],
      ["VE", "Venezuela", "Americas", "South America"],
      ["AO", "Angola", "Africa", "Middle Africa"],
    ];

    const fallbackList = rawData.map(([code, name, region, subregion]) => ({
      code,
      name,
      region,
      subregion,
    }));

    this.countries = fallbackList;
    return fallbackList;
  }

  /**
   * Cargar ciudades para un país usando SOLO listas curadas
   */
  async loadCitiesForCountry(countryCode) {
    // Intentar caché primero SOLO si es reciente (versión 2.0)
    const cached = this.getFromCache(`cities_v2_${countryCode}`);
    if (cached) {
      return cached;
    }

    // USAR SOLO LISTAS CURADAS - NO API
    const cities = this.getCuratedCities(countryCode);

    if (cities.length > 0) {
      // Usar nuevo key de caché para evitar conflictos
      this.saveToCache(`cities_v2_${countryCode}`, cities);
      return cities;
    }

    // Si no hay lista para el país, devolver array vacío
    return [];
  }

  /**
   * Lista de ciudades curadas (SIN BARRIOS)
   */
  getCuratedCities(countryCode) {
    const curatedData = {
      AR: "Buenos Aires,Córdoba,Rosario,Mendoza,La Plata,Mar del Plata,Salta,Santa Fe,San Juan,Neuquén",
      BO: "La Paz,Santa Cruz de la Sierra,Cochabamba,Sucre,Oruro,Tarija,Potosí,El Alto",
      BR: "São Paulo,Rio de Janeiro,Brasília,Salvador,Belo Horizonte,Fortaleza,Manaus,Curitiba,Recife,Porto Alegre,Goiânia,Belém",
      CL: "Santiago,Valparaíso,Concepción,Antofagasta,Temuco,Rancagua,Talca,Arica,Iquique,Puerto Montt",
      CO: "Bogotá,Medellín,Cali,Barranquilla,Cartagena,Cúcuta,Bucaramanga,Pereira,Santa Marta,Manizales",
      CR: "San José,Cartago,Puntarenas,Heredia,Alajuela,Limón,Liberia",
      CU: "La Habana,Santiago de Cuba,Camagüey,Holguín,Santa Clara,Guantánamo,Bayamo",
      EC: "Quito,Guayaquil,Cuenca,Ambato,Machala,Santo Domingo,Portoviejo,Manta,Loja,Riobamba",
      SV: "San Salvador,Santa Ana,San Miguel,Soyapango,Mejicanos,Apopa",
      ES: "Madrid,Barcelona,Valencia,Sevilla,Zaragoza,Málaga,Murcia,Palma,Las Palmas,Bilbao,Alicante,Córdoba,Valladolid,Vigo,Gijón,Granada,Elche,Oviedo,Santander,Vitoria",
      GT: "Ciudad de Guatemala,Mixco,Villa Nueva,Petapa,Quetzaltenango,Villa Canales,Escuintla",
      HN: "Tegucigalpa,San Pedro Sula,Choloma,La Ceiba,El Progreso,Choluteca,Comayagua",
      MX: "Ciudad de México,Guadalajara,Monterrey,Puebla,Tijuana,León,Juárez,Torreón,Querétaro,Mérida,Mexicali,Aguascalientes,Culiacán,Hermosillo",
      NI: "Managua,León,Granada,Masaya,Estelí,Chinandega,Matagalpa",
      PA: "Ciudad de Panamá,San Miguelito,Tocumen,David,Arraiján,Las Cumbres,La Chorrera",
      PY: "Asunción,Ciudad del Este,San Lorenzo,Luque,Capiatá,Lambaré,Fernando de la Mora",
      PE: "Lima,Arequipa,Trujillo,Chiclayo,Huancayo,Cusco,Chimbote,Iquitos,Piura,Tacna,Ica,Sullana",
      DO: "Santo Domingo,Santiago,Los Alcarrizos,La Romana,San Pedro de Macorís,San Cristóbal,Puerto Plata",
      UY: "Montevideo,Salto,Paysandú,Las Piedras,Rivera,Maldonado,Tacuarembó",
      VE: "Caracas,Maracaibo,Valencia,Barquisimeto,Maracay,Ciudad Guayana,San Cristóbal,Maturín,Barcelona,Turmero",
      US: "New York,Los Angeles,Chicago,Houston,Phoenix,Philadelphia,San Antonio,San Diego,Dallas,San Jose",
      CA: "Toronto,Montreal,Vancouver,Calgary,Edmonton,Ottawa,Winnipeg,Quebec City",
      AO: "Luanda,Huambo,Lobito,Benguela,Kuito,Lubango,Malanje,Namibe,Soyo,Cabinda",
    };

    const citiesString = curatedData[countryCode];
    return citiesString ? citiesString.split(",") : [];
  }

  /**
   * Poblar selector de países
   */
  async populateCountrySelect(selectElement) {
    return this._populateSelect({
      selectElement,
      loader: () => this.loadCountries(),
      defaultText: "Selecciona tu país",
      loadingText: "Cargando países...",
      errorText: "Error cargando países",
      otherText: "Mi país no está en la lista",
      mapFn: (country) => ({ value: country.code, text: country.name }),
    });
  }

  /**
   * Poblar selector de ciudades
   */
  async populateCitySelect(selectElement, countryCode) {
    if (!selectElement) return;

    if (!countryCode) {
      selectElement.innerHTML = '<option value="">Primero selecciona un país</option>';
      selectElement.disabled = true;
      return;
    }

    return this._populateSelect({
      selectElement,
      loader: () => this.loadCitiesForCountry(countryCode),
      defaultText: "Selecciona tu ciudad",
      loadingText: "Cargando ciudades...",
      errorText: "Mi ciudad no está en la lista",
      otherText: "Mi ciudad no está en la lista",
      mapFn: (city) => ({ value: city, text: city }),
    });
  }

  /**
   * Helper unificado para poblar selectores
   */
  async _populateSelect({
    selectElement,
    loader,
    defaultText,
    loadingText,
    errorText,
    otherText,
    mapFn,
  }) {
    if (!selectElement) return;

    try {
      selectElement.innerHTML = `<option value="">${loadingText}</option>`;
      selectElement.disabled = true;

      const items = await loader();

      selectElement.innerHTML = "";

      // Opción predeterminada
      this._addOption(selectElement, "", defaultText);

      // Añadir items
      if (Array.isArray(items)) {
        items.forEach((item) => {
          const { value, text } = mapFn(item);
          this._addOption(selectElement, value, text);
        });
      }

      // Añadir opción "Otros"
      this._addOption(selectElement, "other", otherText);

      selectElement.disabled = false;
    } catch (error) {
      console.error(`Error populating select:`, error);
      selectElement.innerHTML = `<option value="other">${errorText}</option>`;
      selectElement.disabled = false;
    }
  }

  /**
   * Helper para añadir opción a un Select
   */
  _addOption(selectElement, value, text) {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = text;
    selectElement.appendChild(option);
  }

  /**
   * Manejar selección de "Otro país"
   */
  handleOtherCountry(countrySelect) {
    this._handleOtherInput(countrySelect, "Country");
  }

  /**
   * Manejar selección de "Otra ciudad"
   */
  handleOtherCity(citySelect) {
    this._handleOtherInput(citySelect, "City");
  }

  /**
   * Helper unificado para manejar inputs de "Otro"
   */
  _handleOtherInput(selectElement, type) {
    const isCountry = type === "Country";
    const containerId = isCountry ? "otherCountryContainer" : "otherCityContainer";
    const container = document.getElementById(containerId);
    const isOther = selectElement.value === "other";
    const containerDoesNotExist = !container;

    if (isOther) {
      if (containerDoesNotExist) {
        this._createOtherInput(selectElement, type);
      } else {
        container.style.display = "block";
        container.querySelector("input").required = true;
      }

      if (isCountry) {
        // Limpiar selector de ciudades y mostrar opción "Otra ciudad"
        const citySelect = document.querySelector('select[name="city"]');
        if (citySelect) {
          citySelect.innerHTML =
            '<option value="other">Mi ciudad no está en la lista</option>';
          citySelect.disabled = false;
        }
      }
    } else if (container) {
      container.style.display = "none";
      container.querySelector("input").required = false;
    }
  }

  /**
   * Helper unificado para crear inputs de "Otro"
   */
  _createOtherInput(selectElement, type) {
    const group = selectElement.parentElement;
    const isCountry = type === "Country";
    const id = isCountry ? "otherCountry" : "otherCity";
    const labelText = isCountry ? "Especifica tu país *" : "Especifica tu ciudad *";
    const placeholderText = isCountry ? "Nombre de tu país" : "Nombre de tu ciudad";

    const otherContainer = document.createElement("div");
    otherContainer.id = `${id}Container`;
    otherContainer.className = "form-group";
    otherContainer.style.marginTop = "10px";

    otherContainer.innerHTML = `
            <label for="${id}">${labelText}</label>
            <input type="text" id="${id}" name="${id}" 
                   placeholder="${placeholderText}" required>
        `;

    group.after(otherContainer);
  }

  /**
   * Limpiar caché (MEJORADO - incluyendo caché antiguo)
   */
  clearCache() {
    const keys = Object.keys(localStorage);
    keys.forEach((key) => {
      if (key.startsWith(this.config.CACHE_PREFIX)) {
        localStorage.removeItem(key);
      }
    });
  }
};
