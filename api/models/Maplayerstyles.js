/**
 * Maplayerstyles.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
  	name: {
		model: 'Maplayers',
		unique: true
	},
	description: {
		type: 'string',
		required: true
	},
	type: {
		type: 'string',
    	enum: ['polygon', 'point', 'line'],
    	defaultsTo: 'polygon'
	},
	style: {
		type: 'json',
		defaultsTo: null
	}

  },

};

