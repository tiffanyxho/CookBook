/* identify which anchor selected
let anchors = document.querySelectorAll('.anchor');

for (let i=0; i<anchors.length; i++) {
    anchors[i].addEventListener('click', handler, false);
}

function handler() {
    

}
*/

// Navbar's Simple Recipe clicked --> shows simple recipe options
document.getElementById("navbar-simple-recipes").addEventListener("click", function e(){
    document.getElementsByClassName("navbar-default")[0].style.display = "none";
    document.getElementsByClassName("navbar-recipes")[0].style.display = "initial";
});

// Navbar: in Simple Recipes options, click Back --> display default navbar options
document.getElementById("recipes-to-home").addEventListener("click", function e (){
    document.getElementsByClassName("navbar-recipes")[0].style.display = "none";
    document.getElementsByClassName("navbar-default")[0].style.display = "initial";    
});

// if About Less Than 30 is clicked in navbar, then remove previously displayed content & content of about less than 30 will be displayed
document.getElementById("navbar-about-site").addEventListener("click", function display(){
    let content = document.getElementsByClassName("content");

    for (let i=0; i<content.length; i++){
        content[i].style.display = "none";
    }
    document.getElementById("about-site").style.display = "initial";
});

