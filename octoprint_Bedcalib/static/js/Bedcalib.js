/*
 * View model for OctoPrint-Bedcalib
 *
 * Author: Supasorn Suwajanakorn
 * License: AGPLv3
 */
$(function() {
    function BedcalibViewModel(parameters) {
        var self = this;

        // assign the injected parameters, e.g.:
        // self.loginStateViewModel = parameters[0];
        // self.settingsViewModel = parameters[1];

        // TODO: Implement your plugin's view model here.
    }

    // view model class, parameters for constructor, container to bind to
    OCTOPRINT_VIEWMODELS.push([
        BedcalibViewModel,

        // e.g. loginStateViewModel, settingsViewModel, ...
        [ /* "loginStateViewModel", "settingsViewModel" */ ],

        // e.g. #settings_plugin_Bedcalib, #tab_plugin_Bedcalib, ...
        [ /* ... */ ]
    ]);
});
