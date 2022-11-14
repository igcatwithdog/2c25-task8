input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.compassHeading())
    if (input.compassHeading() == 0) {
        music.playTone(294, music.beat(BeatFraction.Breve))
        basic.showString("N")
    }
    if (input.compassHeading() == 90) {
        music.playTone(330, music.beat(BeatFraction.Breve))
        basic.showString("E")
    }
    if (input.compassHeading() == 180) {
        music.playTone(330, music.beat(BeatFraction.Breve))
        basic.showString("S")
    }
    if (input.compassHeading() == 270) {
        music.playTone(262, music.beat(BeatFraction.Breve))
        basic.showString("W")
    }
})
basic.forever(function () {
    if (input.compassHeading() <= 45) {
        basic.showString("N")
    } else if (input.compassHeading() >= 315) {
        basic.showString("N")
    } else if (input.compassHeading() <= 135) {
        basic.showString("E")
    } else if (input.compassHeading() <= 225) {
        basic.showString("S")
    } else if (input.compassHeading() <= 315) {
        basic.showString("W")
    }
})
