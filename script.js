const menuClicked = () => {
    console.log("clicked");
    const menu = document.getElementById("ul");
    const body = document.body;
    const m=document.getElementById("menu");

    if (menu.style.left === "0px" || menu.style.left === "") {
        menu.style.left = "100%";
        // body.style.overflow = "auto";
        // body.style.position = "static"; 
      
     // Prevent the body from moving
    } else {
        menu.style.left = "0";
        // body.style.overflow = "hidden";
        // body.style.position = "fixed";
        
    }
};
document.addEventListener("scroll",()=>{
    
    const navbar= document.getElementById("nav");
   
    if (window.scrollY>50){
        navbar.style.backgroundColor="white";
        console.log("here")
       
       
    }else{
        navbar.style.backgroundColor="";
        console.log("here2")
    
        
    }
})