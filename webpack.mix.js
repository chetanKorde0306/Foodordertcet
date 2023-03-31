let mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js/app.js').sass('resources/scss/app.scss','public/css/app.css').sass('resources/scss/cart.scss','public/css/cart.css').sass('resources/scss/login.scss','public/css/login.css').sass('resources/scss/register.scss','public/css/register.css').sass('resources/scss/contact.scss','public/css/contact.css').sass('resources/scss/grid.scss','public/css/grid.css').sass('resources/scss/menu.scss','public/css/menu.css');

// mix.sass('resources/sass/app.sass', 'public/css')
//     .sass('resources/sass/admin.sass', 'public/css/admin');