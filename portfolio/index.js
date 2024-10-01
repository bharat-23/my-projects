var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
var sidemenu = document.getElementById("sidemenu");

function opentab(tabname) {
    for(tablink of tablinks) {
        tablink.classList.remove("active-links");
    }
    for(tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-links");
    document.getElementById(tabname).classList.add("active-tab");
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
});

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-220px"
}
