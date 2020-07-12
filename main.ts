let d = 0
function get_distance () {
    d = maqueen.Ultrasonic(PingUnit.Centimeters)
    while (d == 0) {
        d = maqueen.Ultrasonic(PingUnit.Centimeters)
    }
    return d
}
input.onButtonPressed(Button.A, function () {
    if (get_distance() <= 5) {
        maqueen.motorStop(maqueen.Motors.All)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 25)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 25)
        basic.pause(1000)
        maqueen.motorStop(maqueen.Motors.All)
    }
    basic.clearScreen()
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    for (let index = 0; index <= 99; index++) {
        basic.pause(100)
        if (get_distance() <= 5) {
            maqueen.motorStop(maqueen.Motors.All)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 25)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 25)
            basic.pause(1000)
            maqueen.motorStop(maqueen.Motors.All)
        }
    }
    maqueen.motorStop(maqueen.Motors.All)
})
function East () {
    if (get_distance() <= 100) {
        if (get_distance() >= 50) {
            for (let index = 0; index <= 4; index++) {
                led.plot(4, index)
            }
            basic.pause(100)
        }
    }
    if (get_distance() < 50) {
        if (get_distance() > 5) {
            led.plot(3, 1)
            led.plot(3, 2)
            led.plot(3, 3)
            basic.pause(100)
        }
    }
    if (get_distance() <= 5) {
        led.plot(2, 2)
    }
    if (get_distance() > 100) {
    	
    }
}
function South () {
    if (get_distance() <= 100) {
        if (get_distance() >= 50) {
            for (let index = 0; index <= 4; index++) {
                led.plot(index, 4)
            }
            basic.pause(100)
        }
    }
    if (get_distance() < 50) {
        if (get_distance() > 5) {
            led.plot(1, 3)
            led.plot(2, 3)
            led.plot(3, 3)
            basic.pause(100)
        }
    }
    if (get_distance() <= 5) {
        led.plot(2, 2)
    }
    if (get_distance() > 100) {
    	
    }
}
function West () {
    if (get_distance() <= 100) {
        if (get_distance() >= 50) {
            for (let index = 0; index <= 4; index++) {
                led.plot(0, index)
            }
            basic.pause(100)
        }
    }
    if (get_distance() < 50) {
        if (get_distance() > 5) {
            led.plot(1, 1)
            led.plot(1, 2)
            led.plot(1, 3)
            basic.pause(100)
        }
    }
    if (get_distance() <= 5) {
        led.plot(2, 2)
    }
    if (get_distance() > 100) {
    	
    }
}
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    North()
    basic.pause(2000)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 25)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 25)
    basic.pause(1000)
    maqueen.motorStop(maqueen.Motors.All)
    East()
    basic.pause(2000)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 25)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 25)
    basic.pause(1000)
    maqueen.motorStop(maqueen.Motors.All)
    South()
    basic.pause(2000)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 25)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 25)
    basic.pause(1000)
    maqueen.motorStop(maqueen.Motors.All)
    West()
    basic.pause(2000)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 25)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 25)
    basic.pause(1000)
    maqueen.motorStop(maqueen.Motors.All)
})
input.onButtonPressed(Button.B, function () {
    if (get_distance() <= 5) {
        maqueen.motorStop(maqueen.Motors.All)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 25)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 25)
        basic.pause(1000)
        maqueen.motorStop(maqueen.Motors.All)
    }
    basic.clearScreen()
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 255)
    for (let index = 0; index <= 99; index++) {
        basic.pause(100)
        if (get_distance() <= 5) {
            maqueen.motorStop(maqueen.Motors.All)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 25)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 25)
            basic.pause(1000)
            maqueen.motorStop(maqueen.Motors.All)
        }
    }
    maqueen.motorStop(maqueen.Motors.All)
})
function North () {
    if (get_distance() <= 100) {
        if (get_distance() >= 50) {
            for (let index = 0; index <= 4; index++) {
                led.plot(index, 0)
            }
        }
    }
    if (get_distance() < 50) {
        if (get_distance() > 5) {
            led.plot(1, 1)
            led.plot(2, 1)
            led.plot(3, 1)
        }
    }
    if (get_distance() <= 5) {
        led.plot(2, 2)
    }
    if (get_distance() > 100) {
    	
    }
}
