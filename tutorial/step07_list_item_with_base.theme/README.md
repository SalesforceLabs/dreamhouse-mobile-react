## Step 7: Styling List Item with Salesforce Base Theme

##### Goal

Learn how to use Salesforce Base Theme

##### Before getting started

If you are building your app from scratch: [Step 6](/tutorial/step06_sobject_list/) needs to be completed.

OR

If you just want to practice this step: you can start editing [Step 6 components](/tutorial/step06_sobject_list/) in this repo and run

```

npm run step6

```

***

##### 1. Modify [app/BrokerList/ListItem/index.js](/tutorial/step07_list_item_with_base.theme/app/BrokerList/ListItem/index.js):

1. import `react.force.base.theme`
2. use `Theme.Tiles.List` component in `render` method

```js

import React, {
  Image,
} from 'react-native';

import Theme from 'react.force.base.theme';

import {utils} from 'react.force.datacontainer';

import styles from './styles';

module.exports = React.createClass({
  contextTypes:{
    sobj: React.PropTypes.object
  },
  render() {
    const imgConfig = utils.parseImageHTML(this.context.sobj['Picture_IMG__c']);
    const title = this.context.sobj.Name;
    const detail = this.context.sobj['Title__c']?this.context.sobj['Title__c']:' ';
    return (
      <Theme.Tiles.List 
        title={title} 
        detail={detail}
        image={
          <Image 
            style={styles.image}
            source={{uri: imgConfig.url }}
          />} 
      />
    );
  },
});


```

##### 2. Modify [app/BrokerList/ListItem/styles.js](/tutorial/step07_list_item_with_base.theme/app/BrokerList/ListItem/styles.js):

```js

module.exports = {
  image:{
    width:46,
    height:46,
    borderRadius:23
  }
};

```

***

##### Expected Result:

You should see list of relevant item names:

![iOS Screenshot](/tutorial/README_FILES/step7.png?raw=true)

***

##### Next Step:

Let's add Salesforce Base Theme to style it:

[Step 8: Adding Navigation on tap](/tutorial/step08_list_item_touch_handler/)
