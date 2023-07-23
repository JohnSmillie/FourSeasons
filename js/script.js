function setAndPlay(season) {
    console.log("function called");
    
    if (season == ""){
        alert("please enter a season.");
        return;
    }
    document.getElementById("background").style.backgroundSize="100vh";
    switch(season){
        case "SPRING":
            document.getElementById("background").style.backgroundImage="url(img/spring.jpg)";
            
            break;
        case "SUMMER":
            document.getElementById("background").style.backgroundImage="url(img/summer.jpg)";
            break;
        case "FALL":
        case "AUTUMN":
            document.getElementById("background").style.backgroundImage="url(img/fall.jpg)";
            break;
        case "WINTER":
            document.getElementById("background").style.backgroundImage="url(img/winter.jpg)";
            break;
        default:
            alert("The season is not recongnized.");
    }
}