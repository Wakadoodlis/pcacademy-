// Monitoring pc ress in half a sec
const cpuGpuUsage = require("./pcRess");

setInterval(function() {
  var time = 0;
  var maxINterval = 10;
  time += 2;
  if (maxINterval > time) {
    clearInterval(this.setInterval);
  }
  cpuGpuUsage();
}, 500);
