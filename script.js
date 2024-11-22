function animateBox() {
    const box = document.querySelector('.box');
    box.classList.toggle('animate');
    
    
    for(let i=0;i<3;i++)
        if (box.parentNode.children[0].style.display=="flex") {
        box.parentNode.children[i].style.display="none";
        box.parentNode.parentNode.parentNode.children[0].style.display="flex";
        document.getElementById("nav-el").classList.toggle("animate_menu");
        }
        else {
            box.parentNode.children[i].style.display="flex";
            box.parentNode.parentNode.parentNode.children[0].style.display="none";
            document.getElementById("nav-el").classList.toggle("animate_menu");
        }

        
}