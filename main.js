/* identify which anchor selected
let anchors = document.querySelectorAll('.anchor');

for (let i=0; i<anchors.length; i++) {
    anchors[i].addEventListener('click', handler, false);
}

function handler() {
    

}
*/

// Navbar: simple recipe to clicked in navbar --> shows simple recipe options
document.getElementById("simple-recipes").addEventListener("click", function e(){
    document.getElementsByClassName("navbar-default")[0].style.display = "none";
    document.getElementsByClassName("navbar-recipes")[0].style.display = "initial";
});

// Navbar: in simple recipe options, click back --> display default navbar options
document.getElementById("recipes-to-home").addEventListener("click", function e (){
    document.getElementsByClassName("navbar-recipes")[0].style.display = "none";
    document.getElementsByClassName("navbar-default")[0].style.display = "initial";    
});