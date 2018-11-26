// Monitoring pc ress in half a sec
const cpuGpuUsage = require("./pcRess");
// Paleidus skriptą monitor.js terminale kas puse sekundės vaizduoti kompiuterio resursus (Jie turi automatiškai atsinaujinti).

setInterval(function() {
  var time = 0;
  var maxINterval = 10;
  time += 2;
  if (maxINterval > time) {
    clearInterval(this.setInterval);
  }
  cpuGpuUsage();
}, 500);
