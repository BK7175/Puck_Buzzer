// Puck.js - Quiz Buzzer
// Press the button to send a "buzz" message with a timestamp

function sendBuzz() {
  let buzzTime = Date.now();
  let msg = JSON.stringify({ buzz: true, time: buzzTime });

  NRF.setServices(undefined, { uart: true });

  Bluetooth.println(msg);
  LED.set(); // Flash LED to show it was sent
  setTimeout(() => LED.reset(), 200);
}

setWatch(sendBuzz, BTN, { edge: "rising", debounce: 50, repeat: true });

NRF.setAdvertising({}, { name: "QuizBuzzer", connectable: true });
console.log("Puck.js Quiz Buzzer ready!");