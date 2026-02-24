// public/js/utils.js
// Utilidades compartidas para reducir duplicación de código

/**
 * Manejador de errores compartido
 */
globalThis.ErrorHandler = {
  /**
   * Manejar error con logging
   */
  handle: function (context, error) {
    console.error(`${context} error:`, error);
  },

  /**
   * Manejar warning con logging
   */
  warn: function (context, error) {
    console.warn(`${context} warning:`, error);
  },

  /**
   * Ejecutar función con manejo de errores
   */
  execute: function (context, fn) {
    try {
      return fn();
    } catch (error) {
      this.handle(context, error);
      return null;
    }
  },

  /**
   * Ejecutar función async con manejo de errores
   */
  executeAsync: async function (context, fn) {
    try {
      return await fn();
    } catch (error) {
      this.handle(context, error);
      return null;
    }
  },
};

/**
 * Utilidades para datos de formulario
 */
globalThis.FormUtils = {
  /**
   * Obtener valor de formulario de forma segura
   */
  getValue: function (formData, key, defaultValue = "") {
    const value = formData.get(key);
    return value || defaultValue;
  },

  /**
   * Obtener valor booleano de formulario
   */
  getBool: function (formData, key) {
    const value = formData.get(key);
    return !!value;
  },
};
