window.onload = function(){
    let isClick = 0;
    const menuImg = document.querySelector(".menu-img");
    menuImg.addEventListener("click", ()=>{
        const navMenu = document.querySelector(".nav-menu");
        if(!isClick){
            navMenu.style.display = "block";
            isClick = 1;
        }else{
            navMenu.style.display = "none";
            isClick = 0;
        }
        
    })
}
