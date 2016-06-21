## Step 6: Adding SObject Data Container

##### Goal

Learn how to use Sobject Data Container

##### Before getting started

If you are building your app from scratch: [Step5](/tutorial/step05_relevant_items/) needs to be completed.

OR

If you just want to practice this step: you can start editing [Step5 components](/tutorial/step05_relevant_items/) in this repo and run

```

npm run step5

```

***

##### 1. Create file [app/BrokerList/ListItem/index.js](/tutorial/step06_sobject_list/app/BrokerList/ListItem/index.js):

```html

import React, {
  ListView,
  View,
  Text,
} from 'react-native';

import styles from './styles';

module.exports = React.createClass({
  contextTypes:{
    sobj: React.PropTypes.object
  },
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          {this.context.sobj.Name}
        </Text>
      </View>
    );
  },
});

```

##### 2. Create file [app/BrokerList/ListItem/styles.js](/tutorial/step06_sobject_list/app/BrokerList/ListItem/styles.js):

```js

module.exports = {
  container:{
    backgroundColor:'white',
    padding:20
  },
  text:{
    fontSize:14,
    color:'purple',
    textAlign:'center'
  }
};

```


##### 3. Modify [app/BrokerList/List/index.js](/tutorial/step06_sobject_list/app/BrokerList/List/index.js):

```js

import React, {
  ListView,
  View,
  Text,
} from 'react-native';

import {Sobj} from 'react.force.datacontainer'; /* <-- Add this line */

import ListItem from '../ListItem';

import styles from './styles';


module.exports = React.createClass({
  contextTypes:{
    dataSource: React.PropTypes.object
  },
  renderRow(sobj){
    return (
      <Sobj id={sobj.Id} type={sobj.attributes.type}>{/* <-- Add this line */}
        <ListItem />{/* <-- Add this line */}
      </Sobj>
    );
  },
  render() {
    return (
      <ListView
        dataSource={this.context.dataSource}
        enableEmptySections={true}
        renderRow={this.renderRow}
      />
    );
  },
});

```
***

##### Expected Result:

You should see list of relevant item names:

![iOS Screenshot](/tutorial/README_FILES/step6.png?raw=true)

***

##### Next Step:

Let's add Salesforce Base Theme to style it:

[Step 7: Using Salesforce Base Theme](/tutorial/step07_list_item_with_base.theme/)
