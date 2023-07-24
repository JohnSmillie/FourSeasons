



function setAndPlay(season) {
    console.log("function called");
    console.log("season: " + season);
    
    if (season == ""){
        alert("please enter a season.");
        return;
    }
    
    switch(season){
        case "SPRING":
            console.log("case accessed");
            document.getElementById("imagery").style.backgroundImage="url(img/spring.jpg)";
            document.getElementById("imagery").style.backgroundSize="50%";
            document.getElementById("audio").removeAttribute("class", "d-none");
            document.getElementById("audio").setAttribute("src", "../audio/spring.mp3");

            
            break;
        case "SUMMER":
            document.getElementById("imagery").style.backgroundImage="url(img/summer.jpg)";
            document.getElementById("imagery").style.backgroundSize="90%";
            document.getElementById("audio").removeAttribute("class", "d-none");
            document.getElementById("audio").setAttribute("src", "../audio/summer.mp3");
            break;
        case "FALL":
        case "AUTUMN":
            document.getElementById("imagery").style.backgroundImage="url(img/fall.jpg)";
            document.getElementById("imagery").style.backgroundSize="90%";
            document.getElementById("audio").removeAttribute("class", "d-none");
            document.getElementById("audio").setAttribute("src", "../audio/fall.mp3");
            break;
        case "WINTER":
            document.getElementById("imagery").style.backgroundImage="url(img/winter.jpg)";
            document.getElementById("imagery").style.backgroundSize="90%";
            document.getElementById("audio").removeAttribute("class", "d-none");
            document.getElementById("audio").setAttribute("src", "../audio/winter.mp3");
            break;
        default:
            alert("The season is not recongnized.");
    }
}