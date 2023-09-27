// navbar
function opennav() {
    document.getElementById("navbar").classList.toggle("start-0");
    document.body.classList.toggle("overflow_hiddden")
    document.getElementById("menubtn-icon").classList.toggle("cross");
}
// preloader
setTimeout(() => {
    console.log("Delayed for 3 second.");
    document.getElementById("preloader").classList.add("opacity-0")
    document.getElementById("preloader").classList.add("pointer_event_none")
    document.body.classList.remove("overflow_hidden")
}, 5000);