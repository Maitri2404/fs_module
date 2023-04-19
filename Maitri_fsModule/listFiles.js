const fs = require('fs');

// function listFiles(dirname) {
//     fs.readdir(dirname, (err, files) => {
//         if (err) {
//             console.log(`Error: ${err.message}`);
//         }
//         else {
//             console.log(`List of files :-`)
//             for (const file of files) {
//                 console.log(file);
//             }
//         }
//     })
// }

// listFiles("./");

//----------------------------------------------------------------------------------------------//

function listFiles(dirname) {
    try {
       if (fs.existsSync(dirname)) {
            const files = fs.readdirSync(dirname, { encoding: "utf-8", withFileTypes: true });
            console.log(`List of files in ${dirname} :-`)
            console.log(files);
        }
        else {
            console.log("Directory  does not exist...Enter correct directory name")
        }
    }
    catch (err) {
        console.error(err)
    }
}
listFiles("../Maitri_fsModule");
//listFiles("../Maitri_fsModuleee"); //it gives error Directory doesn't exist...
