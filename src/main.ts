import { SSD1306Driver, startCharacterScreen } from "@devicescript/drivers"

const screen = await startCharacterScreen(
    new SSD1306Driver({ width: 128, height: 32, devAddr: 0x3C })
)

let counter = 0;
let frames = [ '_', '.', '-', '=', 'O', '=', '-', '.']
// Read sensor data every 5 seconds
setInterval(async () => {
    counter+=1;
    if (counter >= frames.length) {
        counter = 0;
    }
    await screen.message.write(frames[counter] + " " + frames[counter] + `  Hello\n |    from\n\\_/  DeviceScript\n`)
}, 1000)
