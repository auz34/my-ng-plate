### 0. Install Prerequisites
+ a) [NodeJs](http://nodejs.org/)
+ b) npm install -g bower
+ c) npm install -g grunt
+ d) npm install -g grunt-cli
+ e) npm install -g karma-cli

### 1. Basic application preparations  

Create high level ode structure

```
root/
  |- src/   contains all client-side code in development  
  |- test/  contains unit tests  
```

Initialize bower 

```
*Terminal* bower init
```

after answering simple questions you should get bower.json similar to following one

```javascript
{
  "name": "my-ng-plate",
  "version": "0.0.1",
  "homepage": "https://github.com/auz34/my-ng-plate",
  "authors": [
    "auz34 <andrewzavgorodniy@gmail.com>"
  ],
  "description": "Angular based boiler plate",
  "keywords": [
    "boilerplate",
    "angular",
    "react"
  ],
  "license": "MIT",
  "ignore": [
    "**/.*",
    "node_modules",
    "bower_components",
    "test",
    "tests"
  ]
}
```

### 2. Install client 3rd party libraries 

```
*Terminal* bower install angular -S
*Terminal* bower install react -S
*Terminal* bower install ngReact -S
```

On windows you can get "ENOGIT git is not installed or not in the PATH" error. If you are observing this issue advice 
here should help  


### 3. Make the simplest angular application

### 4. Make first steps to configure your environment for development

####Add package.json
```javascript
{
    "author": "Andrew Zavgorodniy",
    "name": "my-ng-plate",
    "version": "0.0.1",
    "homepage": "https://github.com/auz34/my-ng-plate",
    "licenses": {
        "type": "MIT",
        "url": "https://github.com/auz34/my-ng-plate/LICENSE"
    },
    "bugs": "https://github.com/auz34/my-ng-plate/issues",
    "repository": {
        "type": "git",
        "url": "git@github.com:auz34/my-ng-plate"
    },
    "dependencies": {},
    "devDependencies": {

    }
}
```
#### Install grunt
```
*Terminal* npm install grunt --save-dev
```

#### Add key files to configure grunt
a) Gruntfile.js
b) grunt.settings.js
c) grunt.tasks.js

### 5. Configure JSHint
Add configuration to the main folder
{
    "node": true,
    "browser": true,
    "esnext": true,
    "bitwise": true,
    "camelcase": true,
    "curly": true,
    "eqeqeq": true,
    "immed": true,
    "indent": 4,
    "latedef": true,
    "newcap": true,
    "noarg": true,
    "quotmark": "single",
    "regexp": true,
    "undef": true,
    "strict": true,
    "trailing": true,
    "smarttabs": true,
    "globals": {
        "angular": false,
        "app": false
    }
}

setup web storm

```
*Terminal* npm install grunt-contrib-jshint --save-dev
```

```
*Terminal* npm install grunt-contrib-watch --save-dev
```

```
*Terminal* npm install jshint-stylish --save-dev
```

### 6. Configure Karma-Jasmine
```
*Terminal* npm install karma --save-dev
*Terminal* npm install karma-jasmine --save-dev
*Terminal* npm install grunt-karma --save-dev
*Terminal* npm install karma-chrome-launcher --save-dev

*Terminal* bower install angular-mocks -D
```


### 7. Get more complicated angular application

### 8. Configure less

```
*Terminal* npm install grunt-contrib-less --save-dev
```

### 9. Configure React
```
*Terminal* npm install grunt-react --save-dev
```

### 10. Complete configuring development environment
```
*Terminal* npm install grunt-contrib-concat --save-dev
```

```
*Terminal* npm install grunt-ng-annotate --save-dev
```

```
*Terminal* npm install grunt-contrib-uglify --save-dev
```

```
*Terminal* npm install grunt-contrib-clean --save-dev
```
