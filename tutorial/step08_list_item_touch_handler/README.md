## Step 8: Adding Navigation on tap


##### Goal

Learn how to trigger navigation on List Item tap

##### Before getting started

If you are building your app from scratch: [Step7](/tutorial/step07_list_item_with_base.theme/) needs to be completed.

OR

If you just want to practice this step: you can start editing [Step7 components](/tutorial/step07_list_item_with_base.theme/) in this repo and run

```

npm run step7

```

***

##### 1. Create [app/BrokerDetail/index.js](/tutorial/step08_list_item_touch_handler/app/BrokerDetail/index.js):

1. import `react.force.base.theme`
2. use `Theme.Tiles.List` component in `render` method

```js

import React, {
  Text,
  View
} from 'react-native';

import styles from './styles';

module.exports = React.createClass({
  render() {
    return (
      <View style={styles.container}>
        <Text>BROKER DETAIL PAGE</Text>
      </View>
    );
  },
});

```

##### 2. Create [app/BrokerDetail/styles.js](/tutorial/step08_list_item_touch_handler/app/BrokerDetail/styles.js):

1. import `react.force.base.theme`
2. use `Theme.Tiles.List` component in `render` method

```js

module.exports = {
  container:{
    flex:1,
    backgroundColor:'white',
    padding:10,
    marginTop:10
  }
};

```

##### 3. Modify [app/BrokerList/ListItem/index.js](/tutorial/step08_list_item_touch_handler/app/BrokerList/ListItem/index.js):

1. import `TouchableOpacity`
2. add `handlePress` method
3. wrap `Theme.Tiles.List` component with `TouchableOpacity`

```js

import React, {
  Image,
  TouchableOpacity
} from 'react-native';

import Theme from 'react.force.base.theme';

import {utils} from 'react.force.datacontainer';

import styles from './styles';

module.exports = React.createClass({
  contextTypes:{
    sobj: React.PropTypes.object
  },
  handlePress(){
    if(this.props.navigator){
      this.props.navigator.push({
        name:'BrokerDetail',
        sobj:this.context.sobj
      });
    }
  },
  render() {
    const imgConfig = utils.parseImageHTML(this.context.sobj['Picture_IMG__c']);
    const title = this.context.sobj.Name;
    const detail = this.context.sobj['Title__c']?this.context.sobj['Title__c']:' ';
    return (
      <TouchableOpacity onPress={this.handlePress}>
        <Theme.Tiles.List 
          title={title} 
          detail={detail}
          image={
            <Image 
              style={styles.image}
              source={{uri: imgConfig.url }}
            />} 
        />
      </TouchableOpacity>
    );
  },
});

```

***

##### Expected Result:

On List Item tap you should see navigator transition to Broker Detail page:

![iOS Screenshot](/tutorial/README_FILES/step8.png?raw=true)

***

##### Next Step:

Let's work on Broker Detail page:

[Step 9: SObject Detail Page](/tutorial/step09_sobject_detail_page/)
