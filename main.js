function push(){
    if(document.getElementById("check").checked)
    {
        document.querySelector(".header ul").style.left = "52%";
        document.querySelector("body").style.overflow = "hidden";
    }
    else{
        document.querySelector(".header ul").style.left = "152%";
        document.querySelector("body").style.overflow = "unset";
    }
}