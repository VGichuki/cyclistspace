
$(window).scroll(function() {
    $('.navbar').toggleClass('scrolled', $(this).scrollTop() > 680);
});

function clickedSub() {
    event.preventDefault()
    var name = $("#name").val()
    var email = $("#email").val()
    var msg = $("#msg").val()
    if (name != "") {
        alert(name + " thank you for contacting us. We will cycle back to you shortly.")
    } else {
        alert("Plese fill in the contact form")
    }
}
var iconurl = $('#i_file').change(function(event) {
    console.log('Hello kerich:Imag changed');
    iconurl = URL.createObjectURL(event.target.files[0]);
    return iconurl;
});
console.log(this.iconurl);

function addItem() {
    var ul = document.getElementById("dynamic-list");
    var candidate = document.getElementById("candidate").value;
    var candidate2 = document.getElementById("candidate2").value;
    var candidate3 = document.getElementById("candidate3").value;
    var cand = document.getElementById("candidate");
    var li = document.createElement("li");
    li.setAttribute('id', cand.value);
    var appnddata = document.createTextNode("Name :" + candidate + " Gear : " + candidate2 + "Price : " +  candidate3 + " ");
    // li.appendChild(document.createTextNode(candidate.value));
    // li.appendChild(document.createTextNode(candidate2.value));

    li.appendChild(appnddata);
    var img = document.createElement("img");
    img.src = this.iconurl;
    img.width = 300;
    img.height = 300;
    li.appendChild(img);
    ul.appendChild(li);

    let raw = {
        candidat: candidate,
        candida2: candidate2,
        candidate3: candidate3,
        iconurl: this.iconurl
    };
    //Option one: save json in a file
    var json = JSON.stringify(raw);
    console.log(json);
    fs.writeFile('data.json', json, 'utf8', callback);

    //Option 2: make ajax call to serve application and store data in database.



}





function removeItem() {
    var ul = document.getElementById("dynamic-list");
    var candidate = document.getElementById("candidate");
    var item = document.getElementById(candidate.value);
    ul.removeChild(item);
}
