



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
            document.getElementsByTagName("body")[0].style.backgroundImage="url(img/spring.jpg)";
            document.getElementsByTagName("h1")[0].style.color="black";
            document.getElementsByTagName("p")[0].style.color="black";
            document.getElementById("home-link").style.color="black";
            document.getElementById("audio").removeAttribute("class", "d-none");
            document.getElementById("audio").setAttribute("src", "../audio/spring.mp3");           
            break;
        case "SUMMER":
            document.getElementsByTagName("body")[0].style.backgroundImage="url(img/summer.jpg)";
            document.getElementsByTagName("h1")[0].style.color="black";
            document.getElementsByTagName("p")[0].style.color="black";
            document.getElementById("audio").removeAttribute("class", "d-none");
            document.getElementById("audio").setAttribute("src", "../audio/summer.mp3");
            break;
        case "FALL":
        case "AUTUMN":
            document.getElementsByTagName("body")[0].style.backgroundImage="url(img/fall.jpg)";
            document.getElementsByTagName("h1")[0].style.color="white";
            document.getElementsByTagName("p")[0].style.color="white";
            document.getElementById("audio").removeAttribute("class", "d-none");
            document.getElementById("audio").setAttribute("src", "../audio/fall.mp3");
            break;
        case "WINTER":
            document.getElementsByTagName("body")[0].style.backgroundImage="url(img/winter.jpg)";
            document.getElementsByTagName("h1")[0].style.color="white";
            document.getElementsByTagName("p")[0].style.color="white";
            document.getElementById("audio").removeAttribute("class", "d-none");
            document.getElementById("audio").setAttribute("src", "../audio/winter.mp3");
            break;
        default:
            alert("The season is not recongnized.");
    }
}