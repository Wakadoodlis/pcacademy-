const os = require("os-utils");

var cpuGpuUsage = function() {
  os.cpuUsage(function(ress) {
    let totalMem = os.totalmem();
    let freeMem = os.freememPercentage();
    let useMem = totalMem - freeMem;
    return console.log(` Cpu usage ${ress} % and GPU: ${useMem} %`);
  });
};
cpuGpuUsage();
module.exports = cpuGpuUsage;
