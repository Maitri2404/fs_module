const fs = require('fs');


function renameFile(oldPath, newPath) {
  try {
    fs.rename(oldPath, newPath, (err) => {
      if (err) {
        console.error(err);
      }
      console.log('File renamed successfully!');
    });

  } catch (err) {
    console.log("Error occured:", err);
  }
}

renameFile('./sample.txt', './newsample.txt')


//---------------------------------------------------------------//

// function renameFile(oldPath, newPath) {
//   try {
//     fs.renameSync(oldPath, newPath);
//     console.log('Renamed successfully');
//   } catch (err) {
//     console.log("error:", err);
//   }
// }
// renameFile('./sample.txt', './newsample.txt')
