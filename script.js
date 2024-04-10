const menuClicked = () => {
    console.log("clicked");
    const menu = document.getElementById("ul");
    if (menu.style.left === "0px" || menu.style.left === "") {
        menu.style.left = "100%";
    
        console.log("here1")
    } else {
        menu.style.left = "0";
        console.log("here")
    }
};