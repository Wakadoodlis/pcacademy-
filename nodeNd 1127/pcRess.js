// Nuskaityti kompiuterio resursus (naudojama CPU, RAM procentais) ir atvaizduoti terminale.
// const stats = require("pc-stats");
const os = require("os-utils");
const tasklist = require("tasklist");
// var os = require("os");
// console.log(os.cpus());

// var cpus = os.cpus();
// for (var i = 0, len = cpus.length; i < len; i++) {
//   console.log("CPU %s:", i);
//   var cpu = cpus[i],
//     total = 0;

//   for (var type in cpu.times) {
//     total += cpu.times[type];
//   }

//   for (type in cpu.times) {
//     console.log("\t", type, Math.round((100 * cpu.times[type]) / total));
//   }
// }
// stats()
//   .then(statistics => {
//     console.log(statistics);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// SHOWS CPU USAGE
os.cpuUsage(function(ress) {
  console.log(`CPU Usage (%): ${ress}`);
});

// TOTATL MEMORY
console.log(`total memory: ${os.totalmem()} `);

tasklist().then(tasks => {
  console.log(tasks.memUsage);
  /*
  [{
      imageName: 'taskhostex.exe',
      pid: 1820,
      sessionName: 'Console',
      sessionNumber: 1,
      memUsage: 4415488,
  }, …]
  */
});

// os.cpuFree(function(ress) {
//   console.log(`CPU free (%): ${ress}`);
// });

// os.platform(function(plat) {
//   console.log(`platform name: ${plat}`);
// });

// os.cpuCount(function(count) {
//   console.log(`cpu count: ${count}`);
// });
