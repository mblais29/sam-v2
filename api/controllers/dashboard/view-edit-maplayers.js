/**
 * view-edit-maplayers.js Controller
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
	friendlyName: 'Edit map layers page',

	description: 'Display the dashboard "Edit Map Layers" page.',

	exits: {
	
		success: {
	      viewTemplatePath: 'pages/dashboard/edit-maplayers',
	      description: 'Display the maplayers page for authenticated users.'
	    },
	
	},
	
	
	fn: async function (inputs, exits, req) {
			//var maplayers = await Maplayers.find().populate('layerstyle');
			console.log(req);
		    return exits.success();	
	
	}
};

