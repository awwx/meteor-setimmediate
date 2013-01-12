Package.describe({
  summary: "setImmediate polyfill"
});

Package.on_use(function (api) {
  api.add_files('setImmediate.js', ['client', 'server']);
});
