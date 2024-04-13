const fs = require("fs");
const path = require("path");


var endpoints = {}


function walkAroundApi (dirname="./_api") {
  fs.readdir(dirname, (err, files) => {
    if (err) {
      throw err;
    }
    for (let file of files) {
      let fname = dirname + "/" + file;
			fs.stat(fname, (errStat, status) => {
				if (errStat) throw errStat;

				if (status.isDirectory()) {
					//console.log('Папка: ' + fname);
					walkAroundApi(dirname + '/' + file); // продолжаем рекурсию
				} else {
          if (path.basename(fname) === "endpoint.js") {
            endpoints[dirname] = require(fname);
            //console.log(endpoints);
          }
					//console.log('Файл: ' + fname);
				}
			});
		}
  })
}

walkAroundApi();
console.log("sdfsdfsd", endpoints);