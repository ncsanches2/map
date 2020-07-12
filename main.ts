let d = 0
function get_distance () {
    d = maqueen.Ultrasonic(PingUnit.Centimeters)
    while (d == 0) {
        d = maqueen.Ultrasonic(PingUnit.Centimeters)
    }
    return d
}
basic.forever(function () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 25)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 25)
    basic.pause(1340)
    maqueen.motorStop(maqueen.Motors.All)
    if (get_distance() <= 100) {
        if (get_distance() >= 50) {
            basic.clearScreen()
            for (let index = 0; index <= 4; index++) {
                led.plot(index, 0)
            }
            basic.pause(100)
        }
    }
    if (get_distance() < 50) {
        if (get_distance() > 0) {
            basic.clearScreen()
            led.plot(1, 1)
            led.plot(2, 1)
            led.plot(3, 1)
            basic.pause(100)
        }
    }
})
basic.forever(function () {
	
})
