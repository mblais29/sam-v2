module.exports = {
	
	friendlyName: 'Maplayers',


  	description: 'Create a new maplayer',
  	
  	extendedDescription: `This creates a new map layer`,
  	
  	inputs: {

	    layerid: {
	      required: true,
	      type: 'string',
	      description: 'The new map layer id',
	      extendedDescription: 'Must be a valid email address.',
	    },
	
	    name: {
	      required: true,
	      type: 'string',
	      maxLength: 200,
	      example: 'passwordlol',
	      description: 'The map layer name'
	    },
	
	    url:  {
	      type: 'string',
	      description: 'The map layers datasource.'
	    },
	    
	    layertableref:  {
	      type: 'string',
	      description: 'The map layers table data.'
	    },
	    
	    layertype:  {
	      type: 'string',
	      enum: ['polygon', 'point', 'line'],
	      description: 'The map layer type.'
	    },
	    
	    layerstyle:  {
	      type: 'string',
	      description: 'The map layer style.'
	    },
	    
	    layerattributesonclick: {
			type: 'string',
			description: 'The map layer popup attributes.'
		},
		
		minzoom:{
			type: 'number',
			description: 'The map layer minimum zoom level.'
		},
		maxzoom: {
			type: 'number',
			description: 'The map layer maximum zoom level.'
		}
	
	  },
	  
	  exits: {

	    invalid: {
	      responseType: 'badRequest'
	    }
	
	  },
	  
	  fn: async function (inputs, exits) {

	
	    // Build up data for the new maplayer record and save it to the database.
	    var newMaplayerRecord = await Maplayers.create(Object.assign({
	      layerid: inputs.layerid,
	      name: inputs.name,
	      url: inputs.url,
	      layertableref: inputs.layertableref,
	      layertype: inputs.layertype,
	      layerstyle: inputs.layerstyle,
	      layerattributesonclick: inputs.layerattributesonclick,
	      minzoom: inputs.minzoom,
	      maxzoom: inputs.maxzoom,
	      tosAcceptedByIp: this.req.ip
	    }));
	
	    // Since everything went ok, send our 200 response.
	    return exits.success();
	
	  }


}