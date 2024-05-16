let SPIEL = 0
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    SPIEL = randint(1, 3)
    music.playMelody("C5 B A G F E D C ", 320)
    basic.setLedColors(0xb09eff, 0xff00ff, 0x00ffff)
    if (SPIEL == 1) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    if (SPIEL == 2) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
    if (SPIEL == 3) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
    }
})
