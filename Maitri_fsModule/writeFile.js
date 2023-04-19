const fs = require('fs');

function writeFile(filename, content) {
  try {
    fs.writeFile(filename, content, (err) => {
      if (err) {
        console.log(err);
      }
      console.log('File written successfully!');
      const data = fs.readFileSync(filename, "utf-8");
      console.log(`Read data from ${filename} :-`, data)
    });
  } catch (err) {
    console.log(err);
  }
}
writeFile('./writefile.txt', 'write file operation performed');



//--------------------------------------------------------------------//



// function writefile(filename, content) {
//   try {
//     fs.writeFileSync(filename, content, { flag: 'ax' });
//     console.log('data written successfully');
//   }
//   catch (err) {
//     console.log(err)
//   }
// }
// writefile('./sample.txt', `write file using sync method and using {flag:ax} so because of that
// if file already exist with same name it gives error`);