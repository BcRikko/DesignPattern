var remoteControl = new RemoteControl();

var livingRoomLight = new Light('リビング');
var kitchenLight = new Light('キッチン');
var ceilingFan = new CeilingFan('リビング');
var garageDoor = new GarageDoor('');
var stereo = new Stereo('リビング');

var livingRoomLightOn = new LightOnCommand(livingRoomLight);
var livingRoomLightOff = new LightOffCommand(livingRoomLight);

var kitchenLightOn = new LightOnCommand(kitchenLight);
var kitchenLightOff = new LightOffCommand(kitchenLight);

var ceilingFanOn = new CeilingFanOnCommand(ceilingFan);
var ceilingFanOff = new CeilingFanOffCommand(ceilingFan);

var garageDoorUp = new GarageDoorUpCommand(garageDoor);
var garageDoorDown = new GarageDoorDownCommand(garageDoor);

var stereoOnWithCD = new StereoOnWithCDCommand(stereo);
var stereoOff = new StereoOffCommand(stereo);

remoteControl.setCommant(0, livingRoomLightOn, livingRoomLightOff);
remoteControl.setCommant(1, kitchenLightOn, kitchenLightOff);
remoteControl.setCommant(2, ceilingFanOn, ceilingFanOff);
remoteControl.setCommant(3, stereoOnWithCD, stereoOff);

console.log(remoteControl.toString());

remoteControl.onButtonWasPushed(0);
remoteControl.offButtonWasPushed(0);
remoteControl.onButtonWasPushed(1);
remoteControl.offButtonWasPushed(1);
remoteControl.onButtonWasPushed(2);
remoteControl.offButtonWasPushed(2);
remoteControl.onButtonWasPushed(3);
remoteControl.offButtonWasPushed(3);
