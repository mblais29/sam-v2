/**
 * Maplayers.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
  	
	layerid: {
		type: 'string',
		required: true,
		unique: true
	},
	name: {
		type: 'string',
		required: true
	},
	url: {
		type: 'string'
	},
	layertableref: {
		type: 'string'
	},
	layertype: {
		type: 'string',
    	enum: ['polygon', 'point', 'line'],
    	defaultsTo: 'polygon'
	},
	layerstyle: {
		collection: 'Maplayerstyles',
        via: 'name'
	},
	layerattributesonclick: {
		type: 'string'
	},
	minzoom:{
		type: 'integer',
		defaultsTo: 0
	},
	maxzoom: {
		type: 'integer',
		defaultsTo: 20
	}

  },

};

