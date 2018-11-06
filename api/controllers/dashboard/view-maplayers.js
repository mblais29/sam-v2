/**
 * view-map.js Controller
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
	friendlyName: 'View map layers page',

	description: 'Display the dashboard "Map Layers" page.',

	exits: {
	
		success: {
	      viewTemplatePath: 'pages/dashboard/maplayers',
	      description: 'Display the map page for authenticated users.'
	    },
	
	},
	
	
	fn: async function (inputs, exits) {
			var maplayers = await Maplayers.find().populate('layerstyle');
		    return exits.success({
		    	maplayers: maplayers
		    });	
	
	}
};

