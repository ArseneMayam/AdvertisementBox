/**
 * Created by mayamarsene on 29/05/18.
 */

let loaderDiv = document.getElementById("loaderDiv");
console.log("loaderDiv",loaderDiv);

move();
function move() {
  //  var elem = document.getElementById("");
    let width = 1;
    let id = setInterval(frame, 10);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            loaderDiv.style.width = width + '%';
        }
    }
}