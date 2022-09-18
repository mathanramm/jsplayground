function keypress(btnpay) {
  const press = document.getElementById(btnpay);
  if (press.style.display === "none") {
    press.style.display = "block";
  } else {
    press.style.display = "none";
  }
}
