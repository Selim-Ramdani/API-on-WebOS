var Service = require("webos-service");
var service = new Service("com.lg.app.signage.scapservice");

var Configuration = require("./api/configuration.js");
var configuration = new Configuration(service);

// setPictureMode
service.register("setPictureMode", function (message) {
  var options = {};
  options.mode = Configuration.PictureMode.APS;
  options.mode = message.payload.param;

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

  configuration.setPictureMode(successCb, failureCb, options);
});

service.register("setPictureProperty", function (message) {
  var options = {};
  options.backlight = 40;
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

// getPictureMode
service.register("getPictureMode", function (message) {
  function successCb(cbObject) {
    message.respond({
      returnValue: true,
      returnData: JSON.stringify(cbObject),
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

  configuration.getPictureMode(successCb, failureCb);
});

service.register("getCurrentTime", function (message) {
  function successCb(cbObject) {
    message.respond({
      returnValue: true,
      returnData: JSON.stringify(cbObject),
    });
  }

  function failureCb(cbObject) {
    message.respond({
      returnValue: false,
      errorCode: cbObject.errorCode,
      errorText: cbObject.errorText,
    });
  }
  configuration.getCurrentTime(successCb, failureCb);
});

service.register("getServerProperty", function (message) {
  function successCb(cbObject) {
    message.respond({
      returnValue: true,
      returnData: JSON.stringify(cbObject),
    });
  }

  function failureCb(cbObject) {
    message.respond({
      returnValue: false,
      errorCode: cbObject.errorCode,
      errorText: cbObject.errorText,
    });
  }

  configuration.getServerProperty(successCb, failureCb);
});
