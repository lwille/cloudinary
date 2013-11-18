Package.describe({
  summary: 'Cloudinary client library'
});

Package.on_use(function (api) {
  api.use('jquery', 'client');
  api.use('underscore', 'server');
  api.add_files('client/js/jquery.ui.widget.js', 'client');
  api.add_files('client/js/jquery.iframe-transport.js', 'client');
  api.add_files('client/js/jquery.fileupload.js', 'client');
  api.add_files('client/js/jquery.cloudinary.js', 'client');
  api.add_files('client/html/cloudinary_cors.html', 'client');
  api.add_files('client_config.js', 'client');

  api.add_files('server/signing.js', 'server')
  api.export('Cloudinary', ['client', 'server']);
});