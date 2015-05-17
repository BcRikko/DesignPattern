var remoteControl = new RemoteControlWithUndo();

var livingRoomLight = new Light('リビング');
var livingRoomLightOn = new LightOnCommand(livingRoomLight);
var livingRoomLightOff = new LightOffCommand(livingRoomLight);

remoteControl.setCommand(0, livingRoomLightOn, livingRoomLightOff);

remoteControl.onButtonWasPushed(0);
remoteControl.offButtonWasPushed(0);
remoteControl.undoButtonWasPushed();
remoteControl.onButtonWasPushed(0);
remoteControl.offButtonWasPushed(0);
remoteControl.undoButtonWasPushed();


var ceilingFan = new CeilingFan('リビング');

var ceilingFanMedium = new CeilingFanMediumCommand(ceilingFan);
var ceilingFanHigh = new CeilingFanHighCommand(ceilingFan);
var ceilingFanOff = new CeilingFanOffCommand(ceilingFan);

remoteControl.setCommand(0, ceilingFanMedium, ceilingFanOff);
remoteControl.setCommand(1, ceilingFanHigh, ceilingFanOff);

remoteControl.onButtonWasPushed(0);
remoteControl.offButtonWasPushed(0);
remoteControl.undoButtonWasPushed();
remoteControl.onButtonWasPushed(1);
remoteControl.undoButtonWasPushed();
