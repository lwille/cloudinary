Meteor.startup(function(){
  $.cloudinary.config({
    cloud_name: Meteor.settings.public.cloudinary.cloud_name,
    api_key: Meteor.settings.public.cloudinary.api_key,
    callback: Meteor.absoluteUrl("packages/cloudinary/client/html/cloudinary_cors.html")
  });
});