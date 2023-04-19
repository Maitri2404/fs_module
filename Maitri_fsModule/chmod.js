const fs = require('fs');

function operationChomod(fileName) {
    try {
        console.log("Give only read access to user");
        fs.chmod(fileName, 0o400, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log(fs.readFileSync(fileName, 'utf8'));
                try {
                    console.log("\nTrying to write in file");
                    fs.writeFileSync(fileName, "This file has been updated.");
                } catch (err) {
                    console.log("Don't have access to write file");
                }
            }
        })
    }
    catch (err) {
        console.log("Error:", err);
    }
}
operationChomod('./write.txt');


//----------------------------------------------------------------------------------//

function operationChomod(fileName) {
    try {
        console.log("given read and write access to user");
        fs.chmodSync(fileName, 0o666)
        console.log("Trying to write in file");
        fs.writeFileSync(fileName, "This file has been updated.");
        console.log(fs.readFileSync(fileName, 'utf8'));
        fs.appendFileSync(fileName, "\ndata is added to file");
        console.log("Data added in file");
    }
    catch (err) {
        console.log("Error:", err);
    }
}
operationChomod('./write.txt');


