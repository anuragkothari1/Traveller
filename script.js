
const menu = document.getElementById("ul");
menu.style.left="100%"
const menuClicked = () => {
    console.log("clicked");
    const menu = document.getElementById("ul");
  

    if (menu.style.left === "0px" || menu.style.left === "") {
        menu.style.left = "100%";
     
    } else {
        menu.style.left = "0";
     
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