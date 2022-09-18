function keypress(btnpay) {
  const press = document.getElementById(btnpay);
  if (press.style.display === "none") {
    press.style.display = "block";
  } else {
    press.style.display = "none";
  }
}

var a = getElementById(btnpay1);
a.onclick = keypress1();
