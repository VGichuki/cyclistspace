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