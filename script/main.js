/**
 * Created by mayamarsene on 28/05/18.
 */
document.addEventListener("DOMContentLoaded",function () {
    console.log("DOMContentLoaded");

    // hands on html tags
    let modalbox = document.getElementById("modalbox");
    let defaultAdbox = document.getElementById("defaultAdbox");
    let displayTimer = document.getElementById("displayTimer");
    let quitAdBox = document.getElementById("quitAdBox");
    let joinLinkAdBox = document.getElementById("joinLinkAdBox");
    let mediaLinkAdBox = document.getElementById("mediaLinkAdBox");
    let infoLinkAdBox = document.getElementById("infoLinkAdBox");
    let ubisoftLinkAdBox = document.getElementById("ubisoftLinkAdBox");
    let facebkLinkAdBox = document.getElementById("facebkLinkAdBox");
    let twitterLinkAdBox = document.getElementById("twitterLinkAdBox");
    let preOrderLinkAdBox = document.getElementById("preOrderLinkAdBox");
    let trailerButton = document.getElementById("trailerButton");

    let loaderDiv = document.getElementById("loaderDiv");
    console.log("loaderDiv", loaderDiv);

    /*Countdown variable*/
    let time = 3;
    let timerDiv = document.getElementById("timerDiv");
    timerDiv.style.display = "none"; // hidden by default
    console.log("timerDiv", timerDiv);

    /*defaultAdbox.addEventListener("click",function () {
     modalbox.style.display = "block";
     defaultAdbox.style.backgroundColor ="lightblue";
     });*/
    /*****default adbox script******/
    let mouseleft = false;
    defaultAdbox.addEventListener("mouseover", function () {
        mouseleft = false;
        let timer = setInterval(() => {
            displayTimer.innerHTML = time;
            if (time < 0) {
                clearInterval(timer);
                modalbox.style.display = "block";
                defaultAdbox.style.display = "none";
            }
            if (mouseleft == false) {
                timerDiv.style.display = "block";
                time--;
            }

        }, 1000)
    });

    defaultAdbox.addEventListener("mouseleave", function () {
        mouseleft = true;
        timerDiv.style.display = "none";
        displayTimer.innerHTML = "";
    });
    /*****END default adbox script********/

    /******Modal box script*/
    /*modalbox.addEventListener("click",function () {
     time = 3;
     displayTimer.innerHTML ='';
     modalbox.style.display ="none";
     defaultAdbox.style.display ="block";

     });*/

    /*****END modal box script********/
    move();
    /*****Ad Box script***********/
// quitting the Ad box
    quitAdBox.addEventListener("mouseover", function () {
        quitAdBox.style.backgroundColor = "rgba(93, 145, 187, 0.5)";
        //modalbox.style.display ="none";

    });
    quitAdBox.addEventListener("mouseleave", function () {
        quitAdBox.style.backgroundColor = "rgba(93, 145, 187, 0.0)";

    });
    quitAdBox.addEventListener("click", function () {
        time = 3;
        displayTimer.innerHTML = '';
        modalbox.style.display = "none";
        defaultAdbox.style.display = "block";
    });
// redirection links and events
    joinLinkAdBox.addEventListener("click", function () {
        //window.open("http://www.google.com");
        window.open("http://www.google.com");
    });
    joinLinkAdBox.addEventListener("onmouseover", function () {
        joinLinkAdBox.style.boxShadow = "inset 0 0 0 25px #53a7ea";
        joinLinkAdBox.style.cursor = "pointer";
    });
    mediaLinkAdBox.addEventListener("click", function () {
        window.open("http://www.google.com");
    });

    infoLinkAdBox.addEventListener("click", function () {
        window.open("http://www.google.com");
    });

    ubisoftLinkAdBox.addEventListener("click", function () {
        window.open("http://montreal.ubisoft.com/fr/");
    });

    facebkLinkAdBox.addEventListener("click", function () {
        window.open("https://www.facebook.com/UbisoftMontreal");
    });

    twitterLinkAdBox.addEventListener("click", function () {
        window.open("https://twitter.com/UbisoftMTL");
    });

    preOrderLinkAdBox.addEventListener("click", function () {
        //window.alert("click");
    });

    trailerButton.addEventListener("click",function () {
        window.open("https://www.youtube.com/watch?v=e_q-s3QdmU8");
    });
    /*******END Ad box Script*******/

    /***** ANIMATIONS ****/
// Default Ad box
    function move() {
        //  var elem = document.getElementById("");
        let width = 1;
        let id = setInterval(frame, 100);

        function frame() {
            if (width >= 52) {
                clearInterval(id);
            } else {
                width++;
                loaderDiv.style.width = width + '%';
            }
        }
    }

    /*****MOBILE SCRIPT****/
    let mobileAdBox = document.getElementsByClassName("mobileAdBox");

    mobileAdBox.addEventListener("mouseover",function () {
        mouseleft = false;
        let timer = setInterval(() => {
            displayTimer.innerHTML = time;
            if (time < 0) {
                clearInterval(timer);
                modalbox.style.display = "block";
                defaultAdbox.style.display = "none";
            }
            if (mouseleft == false) {
                timerDiv.style.display = "block";
                time--;
            }

        }, 1000)
    });
    mobileAdBox.addEventListener("mouseleave",function () {
        /**/
    });

    /***Functions**/
    let adBoxMouseOver = (time,mouseleft) =>{

        displayTimer.innerHTML = time;
        if (time < 0) {
            clearInterval(timer);
            modalbox.style.display = "block";
            defaultAdbox.style.display = "none";
        }
        if (mouseleft == false) {
            timerDiv.style.display = "block";
            time--;
        }
    };

});