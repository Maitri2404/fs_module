const fs = require('fs');

function readFile(fileName) {
  console.log(`Reading file ${fileName}`);
  try {
    const data = fs.readFileSync(fileName, 'utf8');
    console.log("File content is this:- ");
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
}

function writeFile(fileName, Content) {
  console.log(`Write to file ${fileName}`);
  try {
    fs.writeFileSync(fileName, Content);
    console.log("Write operation is completed");
    console.log("File content after write:- ");
    const data = fs.readFileSync(fileName, 'utf8');
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

function appendToFile(fileName, appendContent) {
  console.log("Appending content to the file");
  try {
    fs.appendFileSync(fileName, `\n${appendContent}`);
    console.log("Appending operation is completed");
    console.log("File content after append:- ");
    const data = fs.readFileSync(fileName, 'utf8');
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

function changePermission(fileName) {
 
  try {
    fs.chmodSync(fileName, 0o444);
    console.log("File permission changed to read-only: ");
    console.log("Trying to write content to file: ");
    fs.writeFileSync(fileName, 'Hello');
  } catch (err) {
    console.log("Error while write to file:-",err);
  }
}

const fileName="./task13.txt";
const content="This is text file...This is for temporary use...";
const appendContent="\nNew content is appended to file";

readFile(fileName);
writeFile(fileName,content);
appendToFile(fileName,appendContent);
changePermission(fileName)

















