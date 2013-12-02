var cloudinary = Npm.require("cloudinary");
Meteor.startup(function () {
  var corsCallback = Meteor.absoluteUrl("packages/cloudinary/client/html/cloudinary_cors.html"),
  config = cloudinary.config();
  Meteor.methods({
    "Cloudinary.getConfig": function () {
      return cloudinary.cloudinary_js_config();
    },
    "Cloudinary.fileUpload": function (field) {
      return cloudinary.uploader.image_upload_tag(field, {callback: corsCallback});
    }
  });
});