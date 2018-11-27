// Monitoring pc ress in half a sec
const cpuGpuUsage = require("./pcRess");

setInterval(function() {
  cpuGpuUsage();
}, 500);
