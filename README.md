# Puck_Buzzer
Normal Version with [Bangle.js 2](https://www.espruino.com/Bangle.js2), and [Puck.js](https://www.espruino.com/Puck.js)
# How to Test:
- Upload Puck.js code, disconnect from IDE.
- Upload Bangle.js code, disconnect from IDE (if needed to start scan).
- Press the Puck.js button → Watch should buzz + beep and display response time!
- Press the Bangle.js BTN to reset the screen.


# What Happens:
- Teacher asks a question
- Kids press the Puck.js like a buzzer
- Bangle.js shows:
- Who buzzed in first
- The time it took
- Fun feedback like "🎉 You're first!" or "⏱️ 1.5s"
- You can also log response times for multiple attempts.

# Notes:
- This uses Nordic UART UUIDs (6e4000xx) — make sure Puck.js is advertising that (which it does via Bluetooth.println()).
- It connects once and listens.
- The TextDecoder is available on Bangle.js for BLE data — no need to polyfill.


# IDE
https://www.espruino.com/ide/
