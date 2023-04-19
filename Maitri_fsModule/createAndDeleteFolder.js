const fs = require('fs');


//----------create folder-----------//


function createFolder(dirname) {
    try {
        fs.mkdir(dirname, { recursive: false }, (err) => {
            if (err) {
                console.log(`Error: ${err}`)
            }
            else {
                console.log(`${dirname} created successfully`);
            }
        });

    }
    catch (err) {
        console.log(`An Error occured: ${err}`)
    }
}
createFolder('./folderUsing_mkdir');

//----------delete folder-----------//

function deleteFolder(dirname) {
    try {
        fs.rmdir(dirname, (err) => {
            if (err) {
                console.log(`Error occured: ${err}`)
            }
            else {
                console.log(`${dirname} was deleted`);
            }
        })
    } catch (err) {
        console.log(`An Error occured: ${err}`)
    }
}
deleteFolder('./folderUsing_mkdir');



//----------------------------------------------------------------------------------------------//

//----------create folder-----------//

function createFolder(dirname) {
    try {
        fs.mkdirSync(dirname, { recursive: false })
        console.log(`${dirname} created successfully`);
    }
    catch (err) {
        console.log(`An Error occured: ${err}`)
    }
}
createFolder('./folderUsing_mkdir');

//-----------delete folder----------//

function deleteFolder(dirname) {
    try {
        fs.rmdirSync(dirname)
        console.log(`${dirname} was deleted`);
    }
    catch (err) {
        console.log(`An Error occured: ${err}`)
    }
}
deleteFolder('./folderUsing_mkdir');