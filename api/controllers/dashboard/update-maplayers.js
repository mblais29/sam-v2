module.exports = {


  friendlyName: 'Update maplayers',


  description: 'Update the maplayers.',


  inputs: {

    	editlayerid: {
	      required: true,
	      type: 'string',
	      description: 'The new map layer id'
	    },
	
	    editname: {
	      required: true,
	      type: 'string',
	      description: 'The map layer name'
	    },
	
	    editurl:  {
	      type: 'string',
	      description: 'The map layers datasource.'
	    },
	    
	    edittable:  {
	      type: 'string',
	      description: 'The map layers table data.'
	    },
	    
	    editlayertype:  {
	      type: 'string',
	      enum: ['polygon', 'point', 'line'],
	      description: 'The map layer type.'
	    },
	    
	    layerstyle:  {
	      type: 'string',
	      description: 'The map layer style.'
	    },
	    
	    editatt: {
			type: 'string',
			description: 'The map layer popup attributes.'
		},
		
		editmin:{
			type: 'number',
			description: 'The map layer minimum zoom level.'
		},
		editmax: {
			type: 'number',
			description: 'The map layer maximum zoom level.'
		}

  },


  fn: async function (inputs, exits) {

    // Update the record for the the maplayer.
    await Maplayers.update({ layerid: inputs.editlayerid })
    .set(Object.assign({
	      name: inputs.editname,
	      url: inputs.editurl,
	      layertableref: inputs.edittable,
	      layertype: inputs.editlayertype,
	      layerattributesonclick: inputs.editatt,
	      minzoom: inputs.editmin,
	      maxzoom: inputs.editmax,
	      tosAcceptedByIp: this.req.ip
	    }));

    return exits.success();

  }


};
