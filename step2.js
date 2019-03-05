const fs = require('fs');
const process = require('process');
const axios = require('axios');

function cat(path){
    fs.readFile(path, 'utf8', function(err, data){
        if (err) {
            console.log(err);
            process.exit(1);
        }
        console.log(`file contents: ${data}`)
    })
}

async function webCat(path){
    
    try {
        let response = await axios.get(path)
        console.log(response["data"])
    } catch (error) {
        console.log(`ERROR fetching ${path}`);
        process.exit(1);
    }
}

if (process.argv[2].startsWith("http")){
    webCat(process.argv[2]);
} else {
    cat(process.argv[2]);
}