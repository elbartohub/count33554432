input.onButtonPressed(Button.A, function () {
    running = !(running)
})
input.onButtonPressed(Button.B, function () {
    counter = 0
    showPattern()
})
function showPattern () {
    bitValue = 1
    for (let row = 0; row <= 4; row++) {
        for (let col = 0; col <= 4; col++) {
            if (Math.floor(counter / bitValue) % 2 == 1) {
                led.plot(col, row)
            } else {
                led.unplot(col, row)
            }
            bitValue = bitValue * 2
        }
    }
}
let bitValue = 0
let counter = 0
let running = false
running = true
basic.forever(function () {
    if (running) {
        showPattern()
        basic.pause(100)
        counter += 1
        if (counter == 33554432) {
            counter = 0
        }
    } else {
        basic.pause(100)
    }
})
