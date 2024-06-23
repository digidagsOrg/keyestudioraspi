radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 13) {
        pins.digitalWritePin(DigitalPin.P13, 0)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P13, 1)
    } else if (receivedNumber == 14) {
        pins.digitalWritePin(DigitalPin.P14, 0)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P14, 1)
    } else if (receivedNumber == 15) {
        pins.digitalWritePin(DigitalPin.P15, 0)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P15, 1)
    } else if (receivedNumber == 16) {
        pins.digitalWritePin(DigitalPin.P16, 0)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P16, 1)
    } else if (receivedNumber == 8) {
        pins.digitalWritePin(DigitalPin.P8, 0)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P8, 1)
    } else if (receivedNumber == 12) {
        pins.digitalWritePin(DigitalPin.P12, 0)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P12, 1)
    }
})
radio.setGroup(1)
pins.digitalWritePin(DigitalPin.P13, 1)
pins.digitalWritePin(DigitalPin.P14, 1)
