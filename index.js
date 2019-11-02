var e = document.getElementById("collection_method_dropdown");
var labels = document.getElementsByTagName("label");
var strUser = e.options[e.selectedIndex].value;


// for(let i = 0; i < labels.length; i++){
//     let element = labels[i]
//     let innerText = labels[i].innerHTML;

//     if(innerText.includes("*")){
//         element.style.background = "yellow"
//         element.style.color = "black"
//     }
// }

setTextValue(e.value)

e.addEventListener("change", (i) => {
    console.log(text_ending.length)
    setTextValue(e.value)
})

function setTextValue(value){
    switch (value.toLowerCase()) {
        case "aa":
            console.log(text_ending[0]);
            document.getElementById("collection_display_text").innerHTML = text_ending[0];
            break;

        case "vc":
            console.log(text_ending[1]);
            document.getElementById("collection_display_text").innerHTML = text_ending[1];
            break;


        case "e-ticket":
            console.log(text_ending[2]);
            document.getElementById("collection_display_text").innerHTML = text_ending[2];
            break;


        case "mail":
            console.log(text_ending[3]);
            document.getElementById("collection_display_text").innerHTML = text_ending[3];
            break;


        case "courier":
            console.log(text_ending[4]);
            document.getElementById("collection_display_text").innerHTML = text_ending[4];
            break;


        default:
            document.getElementById("collection_display_text").innerHTML = "";
            break;
    }
}