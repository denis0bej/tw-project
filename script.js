function animateBox() {
    const box = document.querySelector('.box');
    const buttoncontainer = document.querySelector('.navbar-list');
    const headerh = document.querySelector('.navbar').children[0];
    console.log(headerh)
    box.classList.toggle('animate');
    
    for(let i=0;i<3;i++){
        if(buttoncontainer.children[i].className ===""){
            buttoncontainer.children[i].className+="responsive";
            //headerh.style.display = "none";
            buttoncontainer.style.width = "100%";
        } else {
            buttoncontainer.children[i].className ="";
            //headerh.style.display = "inline-flex";
            buttoncontainer.style.width = "60px";
        }
    }     
}