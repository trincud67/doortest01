input.onButtonPressed(Button.A, function () {
    pins.servoWritePin(AnalogPin.P1, 3)
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.B, function () {
    pins.servoWritePin(AnalogPin.P1, 90)
    basic.showIcon(IconNames.Yes)
})
basic.showIcon(IconNames.Happy)
