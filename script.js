function animateBox() {
    const box = document.querySelector('.box');
    const buttoncontainer = document.querySelector('.navbar-list');
    const headerh = document.querySelector('.navbar').children[0];
    box.classList.toggle('animate');
    
    for(let i=0;i<3;i++){
        if(buttoncontainer.children[i].className ==="1"){
            buttoncontainer.children[i].className+=" responsive";
            //headerh.style.display = "none";
            buttoncontainer.style.width = "100%";
            buttoncontainer.children[i].classList.toggle('animate_list');
            setTimeout(() => { buttoncontainer.children[i].classList.toggle('animate_list')}, 0.1);
        } else {
            buttoncontainer.children[i].className ="1";
            //headerh.style.display = "inline-flex";
            buttoncontainer.style.width = "60px";
        }
    }     
}