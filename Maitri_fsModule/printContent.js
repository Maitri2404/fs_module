const fs = require('fs');

function printContent(filename) {
  try {
    fs.readFile(filename, { encoding: 'utf8' }, (err, data) => {
      if (err) {
        console.log(err);
      }
      else {
        console.log("Content of file:-", data);
      }
    });
  } catch (err) {
    console.log("Error:", err);
  }
}

printContent('./write.txt');



//-----------------------------------------------------------//



function printContent(filename) {
  try {
    const data = fs.readFileSync(filename, "utf-8"); //if dont't specify encoding give buffer data
    console.log(data);
  }
  catch (err) {
    console.log(err);
  }
}

printContent('./write.txt');
