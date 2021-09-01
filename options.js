var img = document.getElementById("sidebar");
console.log(img);
document.getElementById("sidebar").addEventListener("click", function () {
  let opened = false;
  console.log("dasd");

  document.getElementById("options-menu").style.display = "block";
  document.getElementById("sidebar").style.display = "none";
  opened = true;

  if (opened) {
    setTimeout(function () {
      document.getElementById("sidebar").style.display = "inline";
      document.getElementById("options-menu").style.display = "none";
      opened = false;
    }, 5000);
  } else {
    document.getElementById("sidebar").style.display = "inline";
  }
});
