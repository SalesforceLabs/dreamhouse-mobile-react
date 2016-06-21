## Step 11: Handling Compact Layout Touch Events


##### Goal

Learn how to handle Compact Layout Touch Events

##### Before getting started

If you are building your app from scratch: [Step 10](/tutorial/step10_compact_layout/) needs to be completed.

OR

If you just want to practice this step: you can start editing [Step 10 components](/tutorial/step10_compact_layout/) in this repo and run

```

npm run step10

```

***

##### 1. Modify [app/BrokerDetail/index.js](/tutorial/step11_compact_layout_event_handling/app/BrokerDetail/index.js):

1. add `handleLayoutTap` method
2. add `onLayoutTap` property to `<CompactLayout />`

```js

import React, {
  View
} from 'react-native';

import {Sobj} from 'react.force.datacontainer';

import {CompactLayout} from 'react.force.layout';

import Header from './Header';

import styles from './styles';

module.exports = React.createClass({
  handleLayoutTap(layoutTapEvent) {
    if(layoutTapEvent.eventType === 'phone'){
      alert('CALL: '+layoutTapEvent.value)
    }
    else if(layoutTapEvent.eventType === 'email'){
      alert('EMAIL: '+layoutTapEvent.value)
    }
  },
  render() {
    return (
      <View style={styles.container}>
        <Sobj type={this.props.route.sobj.attributes.type} id={this.props.route.sobj.Id}>
          <Header />
          <CompactLayout onLayoutTap={this.handleLayoutTap}/>
        </Sobj>
      </View>
    );
  },
});

```

***

##### Expected Result:

When tapped on phone or email:

![iOS Screenshot](/tutorial/README_FILES/step11.png?raw=true)

***

##### Next Step:

Let's use `Linking` library to do actual call and/or open email client and add pull-to-refresh functionality

[Step 12: Adding `ScrollRefresh` component](/tutorial/step12_sobject_detail_pull_to_refresh/)
