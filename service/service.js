var Service = require("webos-service");
var service = new Service("com.lg.app.signage.scapservice");

var Configuration = require("./api/configuration.js");
var configuration = new Configuration(service);

// setPictureProperty
service.register("setPictureProperty", function (message) {
  var options = {};
  options.backlight = message.payload.param;

  function successCb(cbObject) {
    message.respond({
      returnValue: true,
      returnData: message.payload.param,
    });
  }

  function failureCb(cbObject) {
    // console.log("Failure");

    // Error handling
    message.respond({
      returnValue: false,
      errorCode: cbObject.errorCode,
      errorText: cbObject.errorText,
    });
  }

  configuration.setPictureProperty(successCb, failureCb, options);
});
