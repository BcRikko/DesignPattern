var remote = new SimpleRemoteControl();
var light = new Light();
var lightOn = new LightOnCommand(light);
var lightOff = new LightOffCommand(light);

remote.setCommand(lightOn);
remote.buttonWasPressed();

remote.setCommand(lightOff);
remote.buttonWasPressed();

var garageDoor = new GarageDoor();
var garageOpen = new GarageDoorOpenCommnad(garageDoor);

remote.setCommand(garageOpen);
remote.buttonWasPressed();
