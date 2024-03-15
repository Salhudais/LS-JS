let raceCar = {
  make: 'bmw',
  fuelLevel: 0.5,
  engineOn: false,
  
  // Option to omit : function()
  /*
  Creating other raceCar objects with
  different names throws a reference
  error because we're not referring
  to the current object as .this
  
  */
  startEngine: function() {
    raceCar.engineOn = true;
  },
  drive: function() {
    raceCar.fuelLevel -= 0.01;
  },
  stopEngine: function() {
    raceCar.engineOn = false;
  },
  refuel: function(percent) {
    if ((raceCar.fuelLevel + (percent / 100) <= )) {
      raceCar.fuelLevel += (percent / 100);
    } else {
      raceCar.fuelLevel = 1;
    }
  },

};