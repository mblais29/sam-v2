module.exports = {


  friendlyName: 'Update maplayers',


  description: 'Update the maplayers.',


  inputs: {

    	layerid: {
	      required: true,
	      type: 'string',
	      description: 'The new map layer id'
	    },
	
	    name: {
	      required: true,
	      type: 'string',
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


  fn: async function (inputs, exits) {

    // Update the record for the the maplayer.
    await Maplayers.update({ layerid: newMaplayerRecord.layerid })
    .set(Object.assign({
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

    return exits.success();

  }


};
