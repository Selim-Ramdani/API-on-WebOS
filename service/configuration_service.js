export function setPictureMode() {
  webOS.service.request("luna://com.lg.app.signage.scapservice/", {
    method: "setPictureMode",
    parameters: {
      param: "eco",
    },
    onSuccess: function (ret) {
      console.log(ret.message);
    },
    onFailure: function (err) {
      console.log(JSON.stringify(err));
    },
  });
}

export function getPictureMode() {
  webOS.service.request("luna://com.lg.app.signage.scapservice/", {
    method: "getPictureMode",
    onSuccess: function (ret) {
      console.log("getPictureMode: " + ret.returnData);
    },
    onFailure: function (err) {
      console.log(JSON.stringify(err));
    },
  });
}

webOS.service.request("luna://com.lg.app.signage.scapservice/", {
  method: "getCurrentTime",
  onSuccess: function (ret) {
    console.log("getCurrentTime: " + ret.returnData);
  },
  onFailure: function (err) {
    console.log(JSON.stringify(err));
  },
});

webOS.service.request("luna://com.lg.app.signage.scapservice/", {
  method: "getServerProperty",
  onSuccess: function (ret) {
    console.log("getServerProperty: " + ret.returnData);
  },
  onFailure: function (err) {
    console.log(JSON.stringify(err));
  },
});
