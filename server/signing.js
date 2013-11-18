crypto = Npm.require('crypto');

function api_sign_request(params_to_sign, api_secret) {
  var k, shasum, to_sign, v;
  to_sign = _.sortBy((function() {
    var _results;
    _results = [];
    for (k in params_to_sign) {
      v = params_to_sign[k];
      if (v != null) {
        _results.push("" + k + "=" + (build_array(v).join(",")));
      }
    }
    return _results;
  })(), _.identity).join("&");
  shasum = crypto.createHash('sha1');
  shasum.update(to_sign + api_secret);
  return shasum.digest('hex');
};

function build_array(arg) {
  if (arg == null) {
    return [];
  } else if (_.isArray(arg)) {
    return arg;
  } else {
    return [arg];
  }
};

Meteor.startup(function() {
	Meteor.methods({
		signCloudinaryRequest: function(params) {
			return api_sign_request(params, Meteor.settings.cloudinary.api_secret);
		}
	});
});