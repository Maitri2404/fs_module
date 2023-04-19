const fs = require("fs");

// function listFilesByExtension(dirname, ext) {
//     try {
//         fs.readdir(dirname, (err, files) => {
//             if (err) {
//                 console.log('Error:', err);
//             } else {
//                 for (const file of files) {
//                     if (file.endsWith(`${ext}`)) {
//                         console.log(file);
//                     }
//                 }
//             }
//         });
//     } catch (err) {
//         console.log('error');
//     }
// }
// listFilesByExtension('../Maitri_fsModule', '.txt');


//--------------------------------------------------------------------//


// function listFilesByExtension(dirname, ext) {
//     try {
//         const files = fs.readdirSync(dirname, "utf-8");
//         for (const file of files) {
//             if (file.endsWith(`${ext}`)) {
//                 console.log(file);
//             }
//         }
//     } catch (err) {
//         console.log(err);
//     }

// }
// listFilesByExtension('./', '.js');