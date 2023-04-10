
let mix = require('laravel-mix');

mix.js('resources/js/app.js', 'dist').setPublicPath('dist');
mix.css('resources/css/app.css', 'dist').setPublicPath('dist');
