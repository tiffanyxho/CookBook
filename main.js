/* identify which anchor selected
let anchors = document.querySelectorAll('.anchor');

for (let i=0; i<anchors.length; i++) {
    anchors[i].addEventListener('click', handler, false);
}

function handler() {
    

}
*/

// Navbar's home button clicked --> go back to "home pg"
document.getElementById("home-btn").addEventListener("click", function goHomePg(){
    let content = document.getElementsByClassName("content");
    
    for (let i=0; i<content.length; i++){
        content[i].style.display = "none";
    }
    
    document.getElementsByClassName("home-imgs")[0].style.display = "block";
});

// Navbar's Simple Recipe clicked --> shows simple recipe options
document.getElementById("navbar-simple-recipes").addEventListener("click", function e(){
    let content = document.getElementsByClassName("content");
    
    for (let i=0; i<content.length; i++){
        content[i].style.display = "none";
    }

    document.getElementById("recipes").style.display = "initial";
    document.getElementsByClassName("navbar-default")[0].style.display = "none";
    document.getElementById("navbar-recipes").style.display = "initial";
    document.getElementById("recipe-instructions").style.display = "initial";
});

// Display breakfast recipes
document.getElementById("navbar-breakfast").addEventListener("click", function e(){
    let content = document.getElementsByClassName("content");
    
    for (let i=0; i<content.length; i++){
        content[i].style.display = "none";
    }

    document.getElementById("recipes").style.display = "initial";
    document.getElementById("breakfast").style.display = "initial";
    document.getElementById("hardboiled-egg").style.display = "initial";
});

// Navbar: in Simple Recipes options, click Back --> display default navbar options & dumpling img
document.getElementById("recipes-to-home").addEventListener("click", function e (){
    let content = document.getElementsByClassName("content");
    
    for (let i=0; i<content.length; i++){
        content[i].style.display = "none";
    }

    document.getElementsByClassName("home-imgs")[0].style.display = "block";
    document.getElementById("navbar-recipes").style.display = "none";
    document.getElementsByClassName("navbar-default")[0].style.display = "initial";
});

// if About Less Than 30 is clicked in navbar, then remove previously displayed content & content of about less than 30 will be displayed
document.getElementById("navbar-about-site").addEventListener("click", function display(){
    let content = document.getElementsByClassName("content");

    for (let i=0; i<content.length; i++){
        content[i].style.display = "none";
    }
    document.getElementById("about-site-text").style.display = "initial";
});

// When About Creator clicked, display text about creator
document.getElementById("navbar-about-creator").addEventListener("click", function display(){
    let content = document.getElementsByClassName("content");

    for (let i=0; i<content.length; i++){
        content[i].style.display = "none";
    }
    document.getElementById("about-creator-text").style.display = "initial";
});