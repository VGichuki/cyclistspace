function clickedSub(){
    event.preventDefault()
    var name = $("#name").val()
    var email = $("#email").val()
    var msg = $("#msg").val()
    if (name != ""){
        alert(name + " thank you for contacting us. We will cycle back to you shortly.")
    }else{
        alert("Plese fill in the contact form")
    }
}

function addItem(){
    var ul = document.getElementById("dynamic-list");
    var candidate = document.getElementById("candidate");
    var li = document.createElement("li");
    li.setAttribute('id',candidate.value);
    li.appendChild(document.createTextNode(candidate.value));
    li.appendChild(document.createTextNode(candidate2.value));
    li.appendChild(document.createTextNode(candidate3.value));
    ul.appendChild(li);
}

function removeItem(){
    var ul = document.getElementById("dynamic-list");
    var candidate = document.getElementById("candidate");
    var item = document.getElementById(candidate.value);
    ul.removeChild(item);
}