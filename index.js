let fileInput = document.getElementById("csv"),

    readFile = function () {
        let reader = new FileReader();
        reader.onload = function () {
            document.getElementById('out').innerHTML = reader.result;
            // Use reader.result
            let csv = reader.result;
            const lines = csv.split("\n");
            let result = [];
            const headers = lines[0].split(",");
            for(let i = 1; i<lines.length; i++){
                let obj = {};
                const currentline = lines[i].split(",");
                for(let j = 0; j < headers.length; j++){
                    obj[headers[j]] = currentline[j];
                }     
                result.push(obj);
            }
            //return result; //JavaScript object
            result = JSON.stringify(result); //JSON
            console.log(result);
        };
        // start reading the file. When it is done, calls the onload event defined above.
        reader.readAsText(document.querySelector('input').files[0]);
    };

fileInput.addEventListener('change', readFile);
