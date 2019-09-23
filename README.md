<h1 align="center">Static site starter</h1>
<p align="center"><strong>Static site starter</strong> is a starter template for static sites<br>featuring Gulp, Pug, Sass and Webpack.</p>

## ⚙️ Prerequisites
- [**asdf**](https://github.com/asdf-vm/asdf)
- [**Make**](https://www.gnu.org/software/make/)
- [**Node.js**](https://nodejs.org)
- [**Yarn**](https://yarnpkg.com)

## 🥞 Stack
- [**Babel**](https://babeljs.io)
- [**Gulp**](https://gulpjs.com)
- [**Pug**](https://pugjs.org)
- [**Sass**](https://sass-lang.com) 
- [**Webpack**](https://webpack.js.org)

## ⌨️ Commands 
### Serve
Serve `site/` with livereload on [localhost:3000](http://localhost:3000).

```
make
``` 

💡 This command will also install dependencies on first run and when `package.json` or `yarn.lock` files are updated.

### Build
Build everything with Webpack and Gulp production environment to `site/`.

```
make buid
```

### Help
Display a list of available commands.

```
make help
```

## 🗄️ Project structure
```
.
├── gulp                     # Gulp tasks and configuration
│   ├── env                  # Gulp configuration file per environment
│   │   ├── dev.js           # Development environment configuration file
│   │   └── prod.js          # Production environment configuration file
│   ├── helpers              # Gulp helpers folder
│   │   └── url.js           # Helper for URL creation
│   ├── tasks                # Gulp tasks folder
│   │   ├── pug.js           # Pug task declaration
│   │   ├── sass.js          # Sass task declaration
│   │   └── script.js        # JavaScript task declaration
│   ├── webpack              # Webpack configuration files
│   │   ├── common.js        # Configuration shared between dev and prod environments
│   │   ├── dev.js           # Development environment configuration file
│   │   └── prod.js          # Production environment configuration file
│   └── index.js             # Script to invoke correct environment 
│                            # and dynamically load tasks from tasks folder
│
├── js                       # JavaScript source files
│   ├── foo.js               # Sample JavaScript file imported in scripts.js
│   └── scripts.js           # Main JavaScript file used as entry by Webpack
│
├── sass                     # Sass stylesheets folder 
│   ├── dev                  # Development stylesheets folder
│   │   ├── _all.sass        # Sass file to register all development stylesheets
│   │   └── shame.sass       # Here we put WIP style or dirty hacks
│   │                        # See csswizardry.com/2013/04/shame-css/
│   ├── fonts                # Fonts stylesheets folder
│   │   └── _all.sass        # Sass file to register all fonts stylesheets
│   ├── utilities            # Utilities style folder
│   │   ├── _all.sass        # Sass file to register all utilities stylesheets
│   │   └── functions.sass   # Sass functions
│   └── style.sass           # Main Sass file used as source by Gulp
│
├── site                     # Site folder
│   ├── css                  # Minified, optimized and compiled CSS
│   ├── fonts                # Fonts folder
│   ├── images               # Images folder
│   └── js                   # Minified, optimized and compiled JavaScript
│
├── templates                # Pug templates folder
│   ├── index.pug            # Home page
│   ├── layouts              # Layout templates folder
│   │   └── default.pug      # Default layout template
│   ├── page.pug             # Sample page
│   └── partials             # Partial templates folder
│       └── unicorn.pug      # Sample partial featuring an unicorn image
│
├── .tool-versions           # Tells asdf which version to use locally for each language
├── gulpfile.js              # Gulp configuration
├── Makefile                 # Defines commands for this project
└── package.json             # Defines libraries and dependencies
```

## 👓 Sass
To `@import` some stylesheet from an installed package:
1. Look at its path in the package, for example: [`bulma/sass/utilities/_all.sass`](https://github.com/jgthms/bulma/blob/master/sass/utilities/_all.sass)
2. Write your import: `@import "bulma/sass/utilities/_all.sass"`

## 🚀 Cache busting
Our strategy for cache busting in this starter is to append a `?v=[version]` to each asset query. You must update [`version` in `package.json`](https://github.com/wearemd/static-site-starter/blob/master/package.json#L3) when you need to bust the cache.

In Pug templates an `assetVersion` variable is available. Usage:

```pug
img(src="images/unicorn.jpg" + assetVersion, alt="")
```

In Sass files an `urlVersion` function is available. Usage:

```sass
background-image: urlVersion("/images/unicorn.jpg")
```

## 🤜🤛 Contributing
Contributions, issues and feature requests are welcome!

## 📝 License
Static site starter is licensed under the [GNU General Public License v3.0](LICENSE).
