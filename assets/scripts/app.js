//  function keypress(btnpay) {
//   const press = document.getElementById(btnpay);
//   if (press.style.display === "none") {
//     press.style.display = "block";
//   } else {
//     press.style.display = "none";
//   }
// }

var btn = document.getElementById("btnpayy");
var list = document.getElementById("condisp");

btn.addEventListener("click", func);

function func(list) {
  if (list.style.display === "none") {
    list.style.display = "block";
  } else {
    list.style.display = "none";
  }
}
