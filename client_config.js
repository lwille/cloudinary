Meteor.startup(function () {
  Meteor.call('Cloudinary.getConfig', function (err, config) {
    if (err) {
      return console.error(err);
    }
    console.log("Cloudinary configured");
    $('body').append($(config));
  });
  Meteor.call('Cloudinary.fileUpload', 'image_id', function(err, snippet) {
  	Session.set('cloudinary-fileupload', snippet);
  });
});