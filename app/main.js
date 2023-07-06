// ------------------------------------------------
// ----                 BACKLIGHT              ----
// ------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("container");
  const info = document.createElement("h1");
  const error = document.createElement("p");
  var img = document.querySelector(".photo");

  var pictures = [
    { photo: "./images/vitrine-eco-jour.jpg", param: 100 },
    { photo: "./images/vitrine-eco-ombre.jpg", param: 75 },
    // { photo: "./images/03.png", param: 65 },
    { photo: "./images/vitrine-eco-nuageux.jpg", param: 60 },
    // { photo: "./images/05.png", param: 55 },
    // { photo: "./images/06.png", param: 45 },
    { photo: "./images/vitrine-eco-pluie.jpg", param: 40 },
    // { photo: "./images/08.png", param: 35 },
    { photo: "./images/vitrine-eco-nuit.jpg", param: 25 },
  ];

  var i = 0;
  var l = pictures.length - 1;

  (function loop() {
    if (i > l) {
      i = 0;
    }

    webOS.service.request("luna://com.lg.app.signage.scapservice/", {
      method: "setPictureProperty",
      parameters: { param: pictures[i].param },
      onSuccess: function (ret) {
        console.log("setPictureProperty: " + ret.returnData);

      },
      onFailure: function (err) {
        console.log(JSON.stringify(err));

      },
    });

    img.src = pictures[i].photo;
    console.log(pictures[i].photo);
    console.log(pictures[i].param);
    loopTimer = setTimeout(loop, 4000);
    ++i;
  })();

  // ------------------------------------------------
  // ----              DEVISE INFO               ----
  // ------------------------------------------------

  webOS.service.request("luna://com.lg.app.signage.scapservice/", {
    method: "getSensorValues",
    onSuccess: function (ret) {
      error.style.color = "#008633";
    },
    onFailure: function (err) {
      error.style.color = "#b00000";
    },
  });
  container.appendChild(error);
});
