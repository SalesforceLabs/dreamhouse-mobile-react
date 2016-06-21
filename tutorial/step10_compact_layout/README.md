## Step 10: Adding Compact Layout to SObject Detail Page


##### Goal

Learn how to render Sobject Compact Layout

##### Before getting started

If you are building your app from scratch: [Step9](/tutorial/step09_sobject_detail_page/) needs to be completed.

OR

If you just want to practice this step: you can start editing [Step8 components](/tutorial/step09_sobject_detail_page/) in this repo and run

```

npm run step9

```

***

##### 1. Modify [app/BrokerDetail/index.js](/tutorial/step09_sobject_detail_page/app/BrokerDetail/index.js):

1. import `CompactLayout` from `react.force.layout` module
2. add `<CompactLayout />` after `<Header />` component

```js

import React, {
  View
} from 'react-native';

import {Sobj} from 'react.force.datacontainer';

import {CompactLayout} from 'react.force.layout';

import Header from './Header';

import styles from './styles';

module.exports = React.createClass({
  render() {
    return (
      <View style={styles.container}>
        <Sobj type={this.props.route.sobj.attributes.type} id={this.props.route.sobj.Id}>
          <Header />
          <CompactLayout />
        </Sobj>
      </View>
    );
  },
});

```

***

##### Expected Result:

![iOS Screenshot](/tutorial/README_FILES/step10.png?raw=true)

***

##### Next Step:

Let's add Compact Layout Touch event handlers:

[Step 11: Compact Layout Events](/tutorial/step11_compact_layout_event_handling/)
