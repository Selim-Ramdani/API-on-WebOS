// webOS.service.request("luna://com.lg.app.signage.scapservice/", {
//   method: "setPictureMode",
//   parameters: {
//     param: "game",
//   },
//   onSuccess: function (ret) {
//     console.log(ret.message);
//   },
//   onFailure: function (err) {
//     console.log(JSON.stringify(err));
//   },
// });

webOS.service.request("luna://com.lg.app.signage.scapservice/", {
  method: "getSensorValues",
  onSuccess: function (ret) {
    console.log("getSensorValues: " + ret.returnData);
    console.log(ret.message);
  },
  onFailure: function (err) {
    console.log(JSON.stringify(err));
  },
});
