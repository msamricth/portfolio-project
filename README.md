<h1 align="center">Static site starter</h1>
<p align="center"><strong>Static site starter</strong> is a starter template for static sites.</p>

## ⚙️ Prerequisites
- [**asdf**](https://github.com/asdf-vm/asdf)
- [**Make**](https://www.gnu.org/software/make/)
- [**Node.js**](https://nodejs.org)
- [**Yarn**](https://yarnpkg.com)

## 🥞 Stack
- [**Babel**](https://babeljs.io)
- [**Browsersync**](https://www.browsersync.io)
- [**Gulp**](https://gulpjs.com)
- [**minireset.css**](https://jgthms.com/minireset.css/)
- [**Pug**](https://pugjs.org)
- [**Sass**](https://sass-lang.com) 
- [**Webpack**](https://webpack.js.org)

## ⌨️ Commands 
### Serve
```makefile
# Serve site at localhost:3000 with live reloading

make
```

💡 This command will also **install dependencies** on first run and when `package.json` or `yarn.lock` files are updated.

### Build
```makefile
# Build site for production use

make build
```

💡 This command will also **install dependencies** on first run and when `package.json` or `yarn.lock` files are updated.

### Help
```makefile
# List available commands

make help
```

## 🗄️ Project structure
```
.
├── gulp                           # Gulp/Webpack configuration and tasks
│   ├── env                        # Gulp configuration per environment
│   │   ├── dev.js                 # Development environment
│   │   └── prod.js                # Production environment
│   │
│   ├── helpers                    # Gulp helpers
│   │   └── url.js                 # Helper for URL creation
│   │
│   ├── tasks                      # Gulp tasks
│   │   ├── pug.js                 # Pug task declaration
│   │   ├── sass.js                # Sass task declaration
│   │   └── script.js              # JavaScript task declaration
│   │
│   ├── webpack                    # Webpack configuration per environment
│   │   ├── common.js              # Shared between development and production environments
│   │   ├── dev.js                 # Development environment
│   │   └── prod.js                # Production environment
│   │
│   └── index.js                   # Script to invoke proper environment and dynamically load Gulp tasks
│
│
├── js                             # JavaScript source files
│   ├── foo.js                     # Sample script imported in scripts.js
│   └── scripts.js                 # Main JavaScript file used as entry by Webpack
│
│
├── sass                           # Sass style
│   ├── dev                        # WIP style for development
│   │   └── shame.sass             # WIP style or dirty hacks
│   │
│   ├── fonts                      # Fonts style
│   │   └── _all.sass              # File used to import all fonts-related style
│   │
│   ├── libs                       # Libraries
│   │   └── _all.sass              # File used to import all libraries (e.g. minireset.css)
│   │
│   ├── utilities                  # Utilities
│   │   ├── _all.sass              # File used to import all utilities
│   │   ├── functions.sass         # Functions available in all .sass files
│   │   └── initial-variables.sass # Variables available in all .sass files
│   │
│   └── style.sass                 # Main Sass file used as source by Gulp
│
│
├── site                           # Site build destination folder
│   ├── fonts                      # Font assets
│   │   └── .gitkeep               # Tracking an empty directory within Git
│   │
│   └── images                     # Image assets
│       └── unicorn.jpg            # Sample image
│
│
├── templates                      # Pug templates
│   ├── layouts                    # Layouts
│   │   └── default.pug            # Default layout
│   │
│   ├── partials                   # Partials
│   │   └── unicorn.pug            # Sample partial featuring an image
│   │
│   ├── index.pug                  # Home page
│   └── page.pug                   # Sample page
│
│
├── .babelrc                       # Presets and plugins to use, used by Babel
├── .gitignore                     # Files and folders ignored by Git
├── .tool-versions                 # Which version to use locally for each language, used by asdf
├── gulpfile.js                    # Gulp configuration
├── LICENSE                        # License
├── Makefile                       # Commands for this project
├── package.json                   # JavaScript dependencies, used by Yarn
├── README.md                      # Project documentation
└── yarn.lock                      # Tracking exact versions for JavaScript dependencies, used by Yarn
```

## 🍱 Cache busting
Our strategy for cache busting is to automatically append a `?v=[version]` to each asset query. When you need to bust the cache, simply update [`version` in `package.json`](package.json#L3).

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

## 📄 License
Static site starter is licensed under the [GNU General Public License v3.0](LICENSE).
