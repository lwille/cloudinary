Package.describe({
  summary: 'Cloudinary client library'
});

Package.on_use(function (api) {
  api.use('jquery', 'client');
  api.add_files('lib/js/jquery.ui.widget.js', 'client');
  api.add_files('lib/js/jquery.iframe-transport.js', 'client');
  api.add_files('lib/js/jquery.fileupload.js', 'client');
  api.add_files('lib/js/jquery.cloudinary.js', 'client');
});