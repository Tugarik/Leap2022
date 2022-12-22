//fetch returns Promise

//Async version
// getTextAsync("fetch_info.txt");

// async function getTextAsync(file) {
//     let myObject = await fetch(file);  // now myObject is Promise
//     let myText = await myObject.text();  // now myText is text value of Promise's response
//     document.getElementById("demo").innerHTML = myText;
}

//Sync version
// getText("fetch_info.txt");
// function getText(file) {
//     fetch(file)
//         .then((response) => response.text())
//         .then((text) => {
//             document.getElementById("demo").innerHTML = text;
//         })
// }


