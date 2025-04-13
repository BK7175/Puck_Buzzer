// Bangle.js 2 - Quiz Buzzer Receiver with Vibration/Sound
g.clear();
g.setFont("6x8", 2);
g.drawString("Waiting for buzz...", 30, 30);

NRF.setScan(function(d) {
  if (!d.name || d.name !== "QuizBuzzer" || !d.manufacturer) return;
}, { filters: [{ name: "QuizBuzzer" }] });

NRF.on('connect', function(addr) {
  Bluetooth.on('data', function(data) {
    try {
      let msg = JSON.parse(data);
      if (msg.buzz) {
        let now = Date.now();
        let responseTime = ((now - msg.time) / 1000).toFixed(2);

        Bangle.buzz();
        Bangle.beep();

        g.clear();
        g.setFont("6x8", 2);
        g.drawString("🎉 Buzz Received!", 20, 20);
        g.drawString("Time: " + responseTime + "s", 20, 50);
        g.drawString("Press BTN to reset", 20, 80);
      }
    } catch (e) {
      print("Bad data", e);
    }
  });
});

setWatch(() => {
  g.clear();
  g.setFont("6x8", 2);
  g.drawString("Waiting for buzz...", 30, 30);
}, BTN, { repeat: true, edge: "rising", debounce: 50 });

NRF.setBluetooth(true);
Bluetooth.setConsole(false);