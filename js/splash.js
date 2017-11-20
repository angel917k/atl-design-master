// // THIS IS THE LOADING FUNCTION
//
// function onReady(callback) {
//     var intervalID = window.setInterval(checkReady, 1000);
//
//     function checkReady() {
//         if ('#container'[0] !== undefined) {
//             window.clearInterval(intervalID);
//             callback.call(this);
//         }
//     }
// };
//
// function show(id, value) {
//     document.getElementById(id).style.display = value ? 'block' : 'none';
// };
//
// onReady(function () {
//  var contain = document.getElementById('container');   contain.style.width = "80%";
//     contain.style.marginLeft = "10vw";
//
//   contain.style.backgroundColor = "transparent";
//
//   contain.style.top = '50%';
//
//   document.getElementById('body').style.display = "block";
// });


$(document).ready(function(){
new CircleType(document.getElementById('curve-text-1')).dir(-1).radius(115); circular text deccoration 

$('.navbar-toggle').on('click', function() {
  $('.after-navbar').css('margin-top','230px');  //scroll down entire page on navbar click
});
});
