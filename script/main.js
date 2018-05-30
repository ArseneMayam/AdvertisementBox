/**
 * Created by mayamarsene on 28/05/18.
 */
document.addEventListener("DOMContentLoaded", function () {
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
    let preOrderImg = document.getElementById("preOrderImg");

    let loaderDiv = document.getElementById("loaderDiv");
    console.log("loaderDiv", loaderDiv);

    /*Countdown variable*/
    let time = 3;
    let timerDiv = document.getElementById("timerDiv");
    timerDiv.style.display = "none"; // hidden by default
    console.log("timerDiv", timerDiv);
    //Mobile
    let mobileModalBox = document.getElementsByClassName("mobileAdBox");
    let mobileAdBox = document.getElementsByClassName("mobileAdBox");
    let exitMobileDiv = document.getElementById("exitMobileDiv");
    console.log("exitMobileDiv", exitMobileDiv);
    let messageBox = document.getElementById("messageBox");
    let linkRollOver = document.getElementById("linkRollOver");
    let ps3_Img = document.getElementById("ps3_Img");
    let ps4_Img = document.getElementById("ps4_Img");
    let mbUbisoftLink = document.getElementById("mbUbisoftLink");


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
        quit();
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

    trailerButton.addEventListener("click", function () {
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
    exitMobileDiv.addEventListener("click", function () {
        quit();
    });
    messageBox.addEventListener("click", function () {
        window.open("https://www.youtube.com/watch?v=e_q-s3QdmU8");
    });
    ps3_Img.addEventListener("click", function () {
        window.open("https://www.playstation.com/fr-ca/games/watch-dogs-2-ps4/");
    });
    ps4_Img.addEventListener("click", function () {
        window.open("https://www.playstation.com/fr-ca/games/watch-dogs-2-ps4/");
    });
    mbUbisoftLink.addEventListener("click", function () {
        window.open("http://montreal.ubisoft.com/fr/");
    });
    linkRollOver.addEventListener("click", function () {
        window.open("https://www.playstation.com/fr-ca/games/watch-dogs-2-ps4/");
    });

    /***Functions**/
    let adBoxMouseOver = (time, mouseleft) => {

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
    let quit = () => {
        time = 3;
        displayTimer.innerHTML = '';
        modalbox.style.display = "none";
        defaultAdbox.style.display = "block";
    };

    /**********/
    let preOrderImgAnim = () => {
        preOrderImg.style.transition = " all 1s";
        preOrderImg.style.webkitTransform = "scale(1.1)";
        preOrderImg.style.MozTransform = "scale(1.1)";
        preOrderImg.style.msTransform = "scale(1.1)";
        preOrderImg.style.OTransform = "scale(1.1)";
        preOrderImg.style.transform = "scale(1.1)";
    };

    let i = 0;

    function change() {
        let adbox = document.getElementById("modalbox");
        let color = ["black", "blue", "brown", "green"];
        adbox.style.backgroundColor = color[i];
        adbox.style.opacity = "0.9";
        i = (i + 1) % color.length;
    }

});