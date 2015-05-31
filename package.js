Package.describe({
  name: 'adain:meteor-guid',
  summary: 'guid for meteor https://github.com/dandean/guid',
  version: '1.0.1',
  git: 'https://github.com/ADAIN/meteor-guid.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('./lib/guid.js', ['client', 'server']);
  api.export('Guid', ['client', 'server']);
});
