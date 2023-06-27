var Service = require("webos-service");
var service = new Service("com.lg.app.signage.scapservice");

var DeviseInfo = require("./api/deviceInfo.js");
var deviseinfo = new DeviseInfo(service);

let container = document.getElementById("container");
let temperature = document.createElement("h1");
let fan = document.createElement("h1");

// setSensorValues
// service.register("setPictureMode", function (message) {
//   var options = {};
//   options.mode = Configuration.PictureMode.APS;
//   options.mode = message.payload.param;

//   function successCb(cbObject) {
//     message.respond({
//       returnValue: true,
//       returnData: message.payload.param,
//     });
//   }

//   function failureCb(cbObject) {
//     // console.log("Failure");

//     // Error handling
//     message.respond({
//       returnValue: false,
//       errorCode: cbObject.errorCode,
//       errorText: cbObject.errorText,
//     });
//   }

//   deviseinfo.setPictureMode(successCb, failureCb, options);
// });

// service.register("setPictureProperty", function (message) {
//   var options = {};
//   options.backlight = 40;
//   function successCb(cbObject) {
//     message.respond({
//       returnValue: true,
//       returnData: message.payload.param,
//     });
//   }

//   function failureCb(cbObject) {
//     // console.log("Failure");

//     // Error handling
//     message.respond({
//       returnValue: false,
//       errorCode: cbObject.errorCode,
//       errorText: cbObject.errorText,
//     });
//   }

//   deviseinfo.setPictureProperty(successCb, failureCb, options);
// });

// --------------------------------------------------

// -----------  getSensorValues ---------------------

// --------------------------------------------------

service.register("getSensorValues", function (message) {
  function successCb(cbObject) {
    message.respond({
      returnValue: true,
      returnData: JSON.stringify(cbObject),
    });
    console.log("Success");
    temperature.innerText = cbObject.temperature;
    fan.innerText = cbObject.fan;

    container.appendChild(temperature);
    container.appendChild(fan);
  }

  function failureCb(cbObject) {
    console.log("Failure");

    // Error handling
    message.respond({
      returnValue: false,
      errorCode: cbObject.errorCode,
      errorText: cbObject.errorText,
    });
    let error = document.createElement("p");
    error.classList("error");
    error.innerText = cbObject.errorText;
  }

  deviseinfo.getSensorValues(successCb, failureCb);
});
