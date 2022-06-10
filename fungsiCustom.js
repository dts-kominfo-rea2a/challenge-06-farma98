// TODO: import module bila dibutuhkan di sini
fs = require("fs");
// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = (callback) => {
  fs.readFile(file1, (err, data) => {
    if (err) return callback(err);
    let data1 = Object.values(JSON.parse(data));
    let str1 = data1.toString().split(" ");
    fs.readFile(file2, (err, data) => {
      if (err) return callback(err);
      let data2 = Object.values(Object.values(JSON.parse(data))[0]);
      let str2 = data2.toString().split(" ");
      fs.readFile(file3, (err, data) => {
        if (err) return callback(err);
        let data3 = Object.values(
          Object.values(Object.values(JSON.parse(data))[0])[0]
        );
        let str3 = data3.toString().split(" ");
        return callback(null, [str1[1], str2[1], str3[1]]);
      });
    });
  });
};

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
