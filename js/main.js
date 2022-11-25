function myFunction1(){
    let middleBar = document.getElementById("middleBar")
    
    if (middleBar.style.display == "block") {
        middleBar.style.display = "none";
    } else {
        middleBar.style.display = "block"
    }
}
function myFunction2(){
    let middleBar = document.getElementById("dropDown-2")
    
    if (middleBar.style.display == "block") {
        middleBar.style.display = "none";
    } else {
        middleBar.style.display = "block"
    }
}
// window.onclick = function (event) {
//     if (!event.target.matches('.more')) {
//         document.getElementById('middleBar')
//             .style.display = "none";
//     }
// }   