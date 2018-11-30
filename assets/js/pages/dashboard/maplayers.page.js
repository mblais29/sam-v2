parasails.registerPage('maplayers', {
  //  â•¦â•”â•—â•”â•¦â•”â•¦â•—â•¦â•”â•�â•—â•¦    â•”â•�â•—â•”â•¦â•—â•”â•�â•—â•”â•¦â•—â•”â•�â•—
  //  â•‘â•‘â•‘â•‘â•‘ â•‘ â•‘â• â•�â•£â•‘    â•šâ•�â•— â•‘ â• â•�â•£ â•‘ â•‘â•£
  //  â•©â•�â•šâ•�â•© â•© â•©â•© â•©â•©â•�â•�  â•šâ•�â•� â•© â•© â•© â•© â•šâ•�â•�
  data: {
    
    // Form Update Data
    formData: {},

    // For tracking client-side validation errors in our form.
    // > Has property set to `true` for each invalid property in `formData`.
    formErrors: { /* … */ },

    // Syncing / loading state
    syncing: false,

    // Server error state
    cloudError: '',

    // Success state when form has been submitted
    cloudSuccess: false,
  },

  //  ╦  ╦╔═╗╔═╗╔═╗╦ ╦╔═╗╦  ╔═╗
  //  ║  ║╠╣ ║╣ ║  ╚╦╝║  ║  ║╣
  //  ╩═╝╩╚  ╚═╝╚═╝ ╩ ╚═╝╩═╝╚═╝
  beforeMount: function() {
    // Attach any initial data from the server.
    _.extend(this, SAILS_LOCALS);
  },
  mounted: async function() {

  },

  //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  methods: {
   
    updateMapLayerSubmit: async function(response) {
      this.syncing = true;
      //window.location = '/maplayers';
    },
    
    handleUpdateMaplayerParsingForm: function() {
      // Clear out any pre-existing error messages.
      this.formErrors = {};

      var argins = this.formData;

      /* Validate full name:
      if(!argins.fullName) {
        this.formErrors.fullName = true;
      }*/

      

      // If there were any issues, they've already now been communicated to the user,
      // so simply return undefined.  (This signifies that the submission should be
      // cancelled.)
      if (Object.keys(this.formErrors).length > 0) {
        return;
      }

      return argins;
    },
    
    hideAddForm: function() {
		$('div#maplayers-add-container').hide();
		$('div#maplayers-container').show();
		$('div#maplayers-add-container').find('input:text').val('');
		$('div#maplayers-add-container').find('textarea').val('');
		return  false;
	},
	
	openAddMapLayerForm: function() {
		$('div#maplayers-add-container').show();
		$('div#maplayers-container').hide();
		
		return  false;
	},

  }
});
