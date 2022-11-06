var navigation = document.querySelector(".menu-content ul");
document.getElementById("menu-button").onclick = function(){
    if(navigation.style.display === "none" || navigation.style.display === ""){
        navigation.style.display = "flex";
    }
    else{
        navigation.style.display = "none";
    }
};

var arr = document.querySelectorAll(".menu-content ul li a");

for(var i = 0; i < 4; i++){
    arr[i].onclick = function(){
        navigation.style.display = "none";
    };
}

if(window.innerWidth < 800){
    document.querySelector("#center").removeAttribute("id");
}
else{
    document.querySelector("#center").setAttribute('id="center"');
}

// document.querySelector(".about").setAttribute('id="center"');