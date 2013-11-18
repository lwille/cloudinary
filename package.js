Package.describe({
  summary: 'Cloudinary client library'
});

Package.on_use(function (api) {
  api.use('jquery', 'client');
  api.add_files('client/js/jquery.ui.widget.js', 'client');
  api.add_files('client/js/jquery.iframe-transport.js', 'client');
  api.add_files('client/js/jquery.fileupload.js', 'client');
  api.add_files('client/js/jquery.cloudinary.js', 'client');
});