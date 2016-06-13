## Step 1: create forceios template app and add dependencies

### Prerequisite

* Dreamhouse org and Data setup:

Before getting started with this tutorial you need to have Broker and Property custom objects set and populated with data

Follow installation instructions at [dreamhouse micro-site](http://dreamhouse-site.herokuapp.com/installation/)


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

See this [package.json](/package.json) for inspiration:

* `react.force`
* `react.force.data`
* `react.force.datacontainer`
* `react.force.layout`
* `react.force.base.theme`



