function about () {
    var hide = document.getElementById("about")
    if (hide.style.display === "none"){
        hide.style.display = "block"
    }else {
        hide.style.display = "none";
    }
}

function hidepesan () {
    var hide = document.getElementById("input")
    if (hide.style.display === "block"){
        hide.style.display = "none"
    }else {
        hide.style.display = "block";
    }
}
function getPesan() {
    var ambil = document.getElementById("pesan").value;
    document.getElementById("output").innerHTML = ambil;
}

function sosmed () {
    var hide = document.getElementById("sosmed")
    if (hide.style.display === "block"){
        hide.style.display = "none"
    }else {
        hide.style.display = "block";
    }
}