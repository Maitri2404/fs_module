const fs = require('fs');


function deleteFiles(dirname) {
  try {
    fs.readdir(dirname, function (err, files) {
      if (err) {
        console.log(err);
      } else {
        for (const file of files) {
          fs.unlinkSync(`${dirname}/${file}`);
          console.log(`${file}deleted successfully`)
        }
      }
    })
  } catch (err) {
    console.log(err);
  }

}
deleteFiles('./tempFolder');


//----------------------------------------------------//


// function deleteFiles(dirname) {
//   try {
//     const files = fs.readdirSync(dirname);
//     for (const file of files) {
//       fs.unlinkSync(`${dirname}/${file}`);
//       console.log(`${file}deleted successfully`)
//     }

//   } catch (err) {
//     console.log(err);
//   }

// }
// deleteFiles('./tempFolder');

