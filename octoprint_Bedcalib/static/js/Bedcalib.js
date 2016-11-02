/*
 * View model for OctoPrint-Bedcalib
 *
 * Author: Supasorn Suwajanakorn
 * License: AGPLv3
 */

var zhop = 3;
var minx = 0;
var maxx = 180;
var miny = 0;
var maxy = 190;
function move(terminal, x, y) {
  terminal.command("G0 Z" + zhop);
  terminal.sendCommand();
  terminal.command("G0 X" + (x==0?minx:maxx) + " Y" + (y==0?minx:maxx) + " F8000");
  terminal.sendCommand();
  terminal.command("G0 Z0");
  terminal.sendCommand();
}
$(function() {
  function BedcalibViewModel(parameters) {
    var self = this;
    self.loginState = parameters[0];
    self.terminal = parameters[1];

    // assign the injected parameters, e.g.:
    // self.loginStateViewModel = parameters[0];
    // self.settingsViewModel = parameters[1];
    self.handleKeyUp = function (d, e) {
      // 81 87 65 83
      if (e.keyCode == 81) {
        move(self.terminal, 0, 1)
        return false;
      } else if (e.keyCode == 87) {
        move(self.terminal, 1, 1);
      } else if (e.keyCode == 65) {
        move(self.terminal, 0, 0)
      } else if(e.keyCode == 83) {
        move(self.terminal, 1, 0);
      }
      return true;
    }
    self.sendCommand = function() {
      //self.terminal.command("G0 X0 Y0");
      //self.terminal.sendCommand();
    }
  }

    // view model class, parameters for constructor, container to bind to
  OCTOPRINT_VIEWMODELS.push([
      BedcalibViewModel,
      ["loginStateViewModel", "terminalViewModel"],
      ["#bedcalib"]
  ]);
});
