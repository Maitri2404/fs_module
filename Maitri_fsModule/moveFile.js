const fs = require('fs');

// function moveFile(sourcePath, destinationPath) {
//     try {
//         fs.renameSync(sourcePath, destinationPath);
//         console.log(`${sourcePath} moved to ${destinationPath} successfully`);
//     } catch (err) {
//         console.log("error:", err);
//     }
// }
// moveFile('./user3.txt', './tempFolder/user3.txt');



//------------------------------------------------------------------------//



function moveFile(sourcePath, destinationPath) {
    try {
        fs.rename(sourcePath, destinationPath, (err) => {
            if (err) {
                console.log(err);
            }
            else{
            console.log(`${sourcePath} moved to ${destinationPath} successfully`);
            }
        });
    } catch (err) {
        console.log("Error occured:", err);
    }
}
moveFile('./user3.txt', './tempFolder/user3.txt');