var e = document.getElementById("collection_method_dropdown");
var labels = document.getElementsByTagName("label");
var strUser = e.options[e.selectedIndex].value;
let select_values = ["AA", "VC", "E-ticket", "Mail", "Courier"]
let text_ending = [
    `Your tickets are immediately available for collection and will remain so up to the event date. Kindly produce the same credit card used for this purchase and either print out or show the email confirmation page upon collection for verification purposes`,

    `You may collect your tickets at the venue from an hour before the showtime. Kindly produce the same credit card used for this purchase and either print out or show the email confirmation page upon collection for verification purposes upon collection for verification purposes`,

    `Your booking confirmation will include instructions to download your E-tickets. Remember to print them out or just show it on your phone as you will need to present them during admission.`,

    `Kindly allow up to 7 business days for the delivery to be fulfilled. If tickets are not received by then, simply give us a call to look into the matter`,

    `Someone from my office will be contacting you by phone within 1 business day to confirm the ticket delivery arrangement`,
]

for(let i = 0; i < labels.length; i++){
    let element = labels[i]
    let innerText = labels[i].innerHTML;

    if(innerText.includes("*")){
        element.style.background = "yellow"
        element.style.color = "black"
    }
}

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