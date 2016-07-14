/**
 * Patient.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    // Datos de la cuenta de usuario
    username: {
      type: 'string',
      unique: true,
      required: true
    },
    password: {
      type: 'string',
      required: true
    },
    roles: {
      collection: 'role'
    },

    // Datos personales del Paciente
    firstName: {
      type: 'string',
      defaultsTo: ''
    },
    lastName: {
      type: 'string',
      defaultsTo: ''
    },
    phoneNumber: {
      type: 'string'
    },
    address: {
      type: 'string'
    },
    birthday: {
      type: 'datetime'
      //defaultsTo: function () {
      //  return new Date().toISOString();
      //}
    },

    // Estado actual del Paciente
    currentStatus: {
      type: 'string',
      enum: ['estable', 'emergencia']
    },

    // Referencia al Doctor responsable del Paciente
    doctor: {
      model: 'doctor'
    }
  }
};
