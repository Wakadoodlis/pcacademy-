// Monitoring pc ress in half a sec
const cpuGpuUsage = require("./pcRess");
const halfSec = 500;
setInterval(function() {
  cpuGpuUsage();
}, halfSec);
