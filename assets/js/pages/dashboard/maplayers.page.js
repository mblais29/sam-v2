parasails.registerPage('maplayers-main', {
  //  â•¦â•”â•—â•”â•¦â•”â•¦â•—â•¦â•”â•�â•—â•¦    â•”â•�â•—â•”â•¦â•—â•”â•�â•—â•”â•¦â•—â•”â•�â•—
  //  â•‘â•‘â•‘â•‘â•‘ â•‘ â•‘â• â•�â•£â•‘    â•šâ•�â•— â•‘ â• â•�â•£ â•‘ â•‘â•£
  //  â•©â•�â•šâ•�â•© â•© â•©â•© â•©â•©â•�â•�  â•šâ•�â•� â•© â•© â•© â•© â•šâ•�â•�
  data: {
  	// Map Layers
  	maplayers: '',
  	
    // Form data
    formData: { /* … */ },

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
	
    submittedForm: async function(response) {
      if(response.APIstatus=="200") {
        // If email confirmation is enabled, show the success message.
        this.cloudSuccess = true;
      }
      else { 
        // Error message will display in the 
        this.syncing = true; 
      }
    },

    handleParsingForm: function() {
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
		$('div#maplayers-add-container').fadeOut();
		$('div#maplayers-add-container').find('input:text').val('');
		$('div#maplayers-add-container').find('textarea').val('');
		return  false;
	},
	
	openAddMapLayerForm: function() {
		$('div#maplayers-add-container').fadeIn();
		return  false;
	},

  }
});
