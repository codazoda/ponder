function textCopy() {
    typebox = document.getElementById("typebox");
    typebox.select();
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    // Set focus in just a moment
    setTimeout(function() {
        typebox.focus();
    }, 200);
}

function textSave() {
    // Grab the text from the typebox text box and save it to local storage
    typebox = document.getElementById("typebox");
    let fullText = typebox.value;
    localStorage.setItem("file-" + currentFileNumber, fullText);
    console.log("saved: " + currentFileNumber);
}

function textLoad(fileNumber) {
    // Update the current file number global
    if (fileNumber < 0) {
        fileNumber = 0;
    }
    if (fileNumber > 9) {
        fileNumber = 9;
    }
    currentFileNumber = fileNumber;
    // Load the file from storage
    storageKey = "file-" + fileNumber;
    typebox = document.getElementById('typebox');
    typebox.value = localStorage.getItem(storageKey);
    // Update the file number indicator
    document.getElementById('fileId').innerHTML = "File " + fileNumber;
}

function checkKey(e) {
    console.log(e.keyCode);
    // If it's not a control key save the document
    if (!e.ctrlKey) {
        console.log("saving");
        textSave();
    } else {
        // If the other key was between 0 and 9 (key codes 48 to 57)
        if (e.keyCode >= 48 && e.keyCode <= 57) {
            console.log("switching");
            // The 0 key starts at 48, subtract that to get the key number
            fileNumber = e.keyCode - 48;
            // Load the text for this file number from local storage
            textLoad(fileNumber);
            // Output some debug code
            console.log("File " + fileNumber);
        }
        console.log("ignoring");
    }
}

/**
 * The main function that will run when the page is loaded
 */
function main() {
    textLoad(currentFileNumber);
}

let currentFileNumber = 1;

main();