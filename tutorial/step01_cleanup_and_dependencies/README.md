## Step 1: Create forceios template app and add dependencies

##### Goal

Learn how to setup project, install dependencies and build first simple view.

##### Before getting started

Before getting started with this tutorial you need to have Broker and Property custom objects set and populated with data

Follow installation instructions at [dreamhouse micro-site](http://dreamhouse-site.herokuapp.com/installation/)


***

##### 1. Create a new React Native Project with forceios CLI:

If you are new to `forceios` CLI: you can use [this great tutorial](http://rajaraodv.github.io/salesforce-react-native-tutorial/) to get started.

  ```

  forceios create

  ```

##### 3. Run your project and make sure it works in simulator:

If you don't know how to do it you can use [this great tutorial](http://rajaraodv.github.io/salesforce-react-native-tutorial/) to get started.

  ```

  npm start

  ```

##### 3. Simplify the project:

copy/replace files: 
* `app` folder
* `package.json`
* `index.os.js` 

##### 4. Add new dependencies to your package.json:

See this [package.json](/package.json) `dependencies` section for inspiration.

* `react.force`
* `react.force.data`
* `react.force.datacontainer`
* `react.force.layout`
* `react.force.base.theme`

##### 5. Re-install dependencies

  ```

  rm -rf node_modules

  npm install

  ```

##### 6. If [RNPM](http://facebook.github.io/react-native/releases/0.24/docs/linking-libraries-ios.html#automatic-linking) is not yet installed:

  ```

  npm install rnpm -g

  ```
##### 7. Link dependencies: 

  ```

  rnpm link

  ```
##### 8. Run the project and make sure everyting works: 

  ```

  npm start

  ```
  
***  
  
##### Expected Result:

![iOS Screenshot](/tutorial/README_FILES/step1.png?raw=true)

***

##### Next Step:

Let's add some interactivity!

Step2: [Adding Touch handler](/tutorial/step02_touch_handler/)
