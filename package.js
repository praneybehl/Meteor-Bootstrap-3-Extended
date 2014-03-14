Package.describe({
    summary: "Bootstrap 3.x Extended with Bootswatch.com Themes"
});

Package.on_use(function (api) {
    api.use('jquery');

    var path = Npm.require('path');
    var asset_path = path.join('bootstrap');
    api.add_files(path.join(asset_path, 'css', 'bootstrap.min.css'), 'client');
    api.add_files(path.join(asset_path, 'js', 'bootstrap.min.js'), 'client');

    // fonts
    api.add_files(path.join(asset_path, 'fonts', 'glyphicons-halflings-regular.eot'), 'client');
    api.add_files(path.join(asset_path, 'fonts', 'glyphicons-halflings-regular.ttf'), 'client');
    api.add_files(path.join(asset_path, 'fonts', 'glyphicons-halflings-regular.svg'), 'client');
    api.add_files(path.join(asset_path, 'fonts', 'glyphicons-halflings-regular.woff'), 'client');

    // XXX this makes the paths to the icon sets absolute. it needs
    // to be included _after_ the standard bootstrap css so
    // that its styles take precedence.
    api.add_files(path.join('bootstrap-override.css'), 'client');
});