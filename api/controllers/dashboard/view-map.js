/**
 * MapController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
	friendlyName: 'View map page',

	description: 'Display the dashboard "Map" page.',
	
	
	exits: {
	
		success: {
	      viewTemplatePath: 'pages/dashboard/map',
	      description: 'Display the map page for authenticated users.'
	    },
	
	},
	
	
	fn: async function (inputs, exits) {
	
	    return exits.success();
	
	}
};

