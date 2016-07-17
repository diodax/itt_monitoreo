/**
 * Doctor.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    // Referencia al User que contiene la cuenta
    user: {
      model: 'user'
    },

    // Datos personales del Doctor
    firstName: {
      type: 'string',
      defaultsTo: ''
    },
    lastName: {
      type: 'string',
      defaultsTo: ''
    },

    // Referencia a los pacientes de un Doctor
    patients: {
      collection: 'patient',
      via: 'doctor'
    }

  }
};
