const fs = require('fs');

function listFilesByExtension(dirname, ext) {
    try {
        fs.readdir(dirname, function (err, files) {
            if (err) {
                console.log(err);
            } else {
                for (const file of files) {
                    if (file.endsWith(`${ext}`)) {
                        fs.unlinkSync(`${dirname}/${file}`);
                        console.log(`${file} deleted successfully`);
                    }
                }
            }
        })
    } catch (err) {
        console.log(err);
    }

}
listFilesByExtension('./tempFolder', '.txt');

