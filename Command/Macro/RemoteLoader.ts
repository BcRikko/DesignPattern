var remoteControl = new RemoteControl();

var light = new Light('リビング');
var tv = new TV('リビング');
var stereo = new Stereo('リビング');
var hottub = new Hottub();

var lightOn = new LightOnCommand(light);
var stereoOn = new StereoOnCommand(stereo);
var tvOn = new TVOnCommand(tv);
var hottubOn = new HottubOnommand(hottub);

var lightOff = new LightOffCommand(light);
var stereoOff = new StereoOffCommand(stereo);
var tvOff = new TVOffCommand(tv);
var hottubOff = new HottubOffCommand(hottub);

var partyOn = [lightOn, stereoOn, tvOn, hottubOn];
var partyOff = [lightOff, stereoOff, tvOff, hottubOff];

var partyOnMacro = new MacroCommand(partyOn);
var partyOffMacro = new MacroCommand(partyOff);

remoteControl.setCommand(0, partyOnMacro, partyOffMacro);

console.log('--- Macro On ---');
remoteControl.onButtonWasPushed(0);
console.log('--- Macro Off ---');
remoteControl.offButtonWasPushed(0);
