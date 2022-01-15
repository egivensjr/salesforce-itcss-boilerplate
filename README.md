# Salesforce ITCSS Stylesheet Setup & Overview

_The styles are written in SCSS. SCSS is a powerful preprocessor
language. [This gives us many powerful tools like Variables, Nesting, Partials, and Mixins](https://sass-lang.com/guide)
but also requires us to use a processor to generate css files from it. This first section will explain how to use SCSS
on a day-to-day basis._

## Documentation
1. [Bootstrap 3 (Cloud Craze) Support](https://github.com/egivensjr/salesforce-itcss-boilerplate/blob/main/force-app/main/default/staticresources/theme/docs/Bootstrap-3(Cloud-Craze)/README.md)
2. IDE Setup
   1. [IntelliJ](https://github.com/egivensjr/salesforce-itcss-boilerplate/blob/main/force-app/main/default/staticresources/theme/docs/IDE-Setup/IntelliJ/README.md)
   2. [Visual Studio Code](https://github.com/egivensjr/salesforce-itcss-boilerplate/blob/main/force-app/main/default/staticresources/theme/docs/IDE-Setup/Visual-Studio-Code/README.md)
3. [ITCSS Framework](https://github.com/egivensjr/salesforce-itcss-boilerplate/blob/main/force-app/main/default/staticresources/theme/docs/ITCSS-Framework/README.md)
4. [Principles of writing consistent, idiomatic CSS](https://github.com/egivensjr/salesforce-itcss-boilerplate/blob/main/force-app/main/default/staticresources/theme/Principles-of-writing-consistent,-idiomatic-CSS/README.md)
5. [Pull Request Templates](https://github.com/egivensjr/salesforce-itcss-boilerplate/blob/main/force-app/main/default/staticresources/theme/Pull-Request-TemplatesS/README.md)

## Usage

_Need to make changes to styles and work on the Theme? This section will walk you through the commands to work with the
technologies._

---

### Before You Begin

To work with the Themes, some working knowledge of using a terminal is required. Additionally, you must
have [Node](https://nodejs.org/en/download/) installed, as well
as [the Salesforce CLI](https://developer.salesforce.com/docs/atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_install_cli.htm).

If you want to download the package with bash, run this command in your terminal:

`curl "https://nodejs.org/dist/latest/node-${VERSION:-$(wget -qO- https://nodejs.org/dist/latest/ | sed -nE 's|.*>node-(.*)\.pkg</a>.*|\1|p')}.pkg" > "$HOME/Downloads/node-latest.pkg" && sudo installer -store -pkg "$HOME/Downloads/node-latest.pkg" -target "/"`

[Reference](https://nodejs.org/en/download/package-manager/#community-macos-early-adopters)

### Retrieving Updated Themes from Salesforce

_*Before working on the Theme, make sure you have the most up-to-date copy from your org.* Currently, both VSCode and
IntelliJ have difficulties retrieving folder-style static resources consistently and might handle new or deleted files
in unexpected ways._

As such, to retrieve new changes to the `theme` folder, you should use a terminal. Open a terminal to your working
project directory and run ```sfdx force:source:retrieve -u <org username> -m StaticResource:theme```.

### Apply Your Styling Updates

Make the necessary changes to the .scss files. All styles should be done in the proper .scss files within
`theme/scss/<style-layer>/<style-file>`. If you are unsure where to apply a style, review the below section
on ITCSS for an overview of the framework in use.

### Compiling the SCSS

_After applying changes to the .scss files, you'll need to compile the .scss to generate the .css files for the browser
to use._

#### Change Directory to Root Folder

_Open a terminal to the stylesheet location for your project and theme. Some examples follow:_

```bash
cd force-app/main/default/staticresources # If using Visual Studio Code IDE

cd src/staticresources # If using IntelliJ IDE
```

To compile the .css files, in the terminal, run:

  ```bash
    npm run theme-deploy
  ```

_This runs a sequence of 3 commands:_

1. ```bash npm install # installs node_modules folder ```
2. ```bash npm run build # compiles all SCSS changes to styles.css ```
3. ```bash sfdx force:source:deploy -m StaticResource:theme prepares for the deployment by deploying the theme folder```

Notes:

- _You do not need to run these 3 commands. This is simply an explanation of what npm run theme-deploy is doing._

### Deploying to Salesforce

---

After running ```npm run theme-deploy``` the theme folder can be deployed to the sandbox and repository.

- For a sandbox, deploying any portion of the theme will deploy the whole theme. (Salesforce treats the theme as one
  piece of metadata).

- For the repository, only changes to the .scss files need to be committed. The devops process will compile the .scss
  into a .css file during deployment.

### Adding a New SCSS file

When adding a new SCSS file, you will also need to update `app.scss` with an @import statement. Follow the naming
conventions found in the scss folder and add the import to the respective section of `app.scss`.

### Additional Tools

Additional (optional) CLI scripts that might prove helpful:

Reference:
- [Stylint](https://stylelint.io/)
- [BEM Rules](https://gist.github.com/Potherca/f2a65491e63338659c3a0d2b07eee382)
- [REGEX BEM Rules](https://stylelint.io/user-guide/rules/regex)

  ```bash
  npm run stylelint # run stylelint on your Sass files for syntax review
  ````

### Commit Changes to Repository Process

___

1. Create a git branch to house your latest commit.
2. Copy the `./staticresources/theme` folder from your Salesforce Org and move it to the designated Repository
   location (`./staticresources/theme`) to overwrite the previous file/folder changes.
3. Only stage the changes you personally made to the .scss files.
4. Commit your changes to the designated repository branch (`dev`), complete its build successfully, and then submit
   a Pull Request with a Senior Developer's approval.

_Note: Refer to the Developer Onboarding Document in Teams for more information on using the repo and creating a pull
request._

### Stylesheet Framework Guidelines

1. When deploying updated framework styles, be sure to pull down the latest styles before deploying. There may be times
   that you may need to cherry-pick (merge) in other developer's styles into your styles before deploying yours to
   resolve deployment conflicts. The [IntelliJ Illuminated Cloud](http://www.illuminatedcloud.com/) plugin is great in
   providing this check before deploying.
	1. If using [Intellij](https://www.jetbrains.com/idea/), be sure to configure your Illuminated Cloud Preferences for
	   Connections by having the 'Check for conflicts on deployment', **checked**. This will check for any deployment
	   conflicts anytime you deploy changes.
	   ![img.png](img/img.png)
2. Proper etiquette for stylesheet styling hierarchy:
	1. Elements
	2. IDs
	3. Classes
	4. Mobile breakpoints
3. Follow the [BEM (Block, Element, Modifier)](http://getbem.com/) naming and syntax convention when naming new classes:
   Syntax example:
    ```bash
    .block__element--modifier { }

   .block {
      &__element {
        &--modifier {
          // your styles...
        }
      }    
   }
    ````
4. Take advantage of the [Sass](https://sass-lang.com/documentation) features that are available, such as variables,
   nesting, mixins, and functions. hey are utilized within this framework to indulge in
   the [DRY method](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) and simplify efforts on developing uniform
   styles.
5. Remove commented out or unused code before deploying.
