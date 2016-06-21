## Step 5: Rendering Relevant Items list

##### Goal

Data Containers introduction and RelevantItems component.

##### Before getting started

If you are building your app from scratch: [Step4](/tutorial/step04_navigator_routing/) needs to be completed.

OR

If you just want to practice this step: you can start editing [Step4 components](/tutorial/step04_navigator_routing/) in this repo and run

```

npm run step4

```

***

##### 1. Create file [app/BrokerList/List/index.js](/tutorial/step05_relevant_items/app/BrokerList/List/index.js):

```html

import React, {
  ListView,
  View,
  Text,
} from 'react-native';

import {Sobj} from 'react.force.datacontainer';

import styles from './styles';

module.exports = React.createClass({
  contextTypes:{
    dataSource: React.PropTypes.object
  },
  renderRow(sobj){
    return (
      <View style={styles.row}>
        <Text style={styles.text}>
          {sobj.Id}
        </Text>
      </View>
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

##### 2. Create file [app/BrokerList/List/styles.js](/tutorial/step05_relevant_items/app/BrokerList/List/styles.js):

```js

module.exports = {
  row:{
    backgroundColor:'white',
    padding:10
  },
  text:{
    fontSize:12,
    color:'green',
    textAlign:'center'
  }
};

```

##### 3. Create file [app/BrokerList/index.js](/tutorial/step05_relevant_items/app/BrokerList/index.js):

```html

import React, {
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import {RelevantItems} from 'react.force.datacontainer';

import styles from './styles';

import List from './List';

module.exports = React.createClass({
  render() {
    return (
      <View style={styles.container}>
        <RelevantItems type={'Broker__c'}>
          <List />
        </RelevantItems>
      </View>
    );
  },
});

```

##### 4. Create file [app/BrokerList/styles.js](/tutorial/step05_relevant_items/app/BrokerList/styles.js):

```js
module.exports = {
  container:{
    flex:1,
    backgroundColor:'white',
    padding:50
  },
  text:{
    fontSize:50,
    color:'green',
    textAlign:'center'
  }
};
```

##### 5. Modify file [app/index.js](/tutorial/step05_relevant_items/app/index.js):

```html 

import React, {
  Text,
  View,
  Navigator,

} from 'react-native';

import styles from './styles';

import BrokerList from './BrokerList';

module.exports = React.createClass({
  renderScene(route,navigator){
    return <BrokerList navigator={navigator} route={route} />; /* <-- Modify this line */
  },
  render() {
    return (
      <Navigator
        initialRoute={{name:'BrokerList'}}
        renderScene={this.renderScene}
      />
    );
  },
});

```

***

##### Expected Result:

You should see list of relevant items ids:

![iOS Screenshot](/tutorial/README_FILES/step5.png?raw=true)

***

##### Next Step:

Let's render Sobject data instead of Ids:

[Step 6: Using SObject Data Container](/tutorial/step06_sobject_list/)
