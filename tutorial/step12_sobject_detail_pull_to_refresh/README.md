## Step 12: Using `Linking` library to call and adding `pull-to-refresh` functionality


##### Goal

Learn how to use `Linking` library and `ScrollRefresh` component

***

##### Video: [Step12](https://youtu.be/RY2vn2bT6XU?t=1639)

***

##### Before getting started

If you are building your app from scratch: [Step 11](/tutorial/step11_compact_layout_event_handling/) needs to be completed.

OR

If you just want to practice this step: you can start editing [Step 11 components](/tutorial/step11_compact_layout_event_handling/) in this repo and run

```

npm run step11

```

***

##### 1. Modify [app/BrokerDetail/index.js](/tutorial/step11_compact_layout_event_handling/app/BrokerDetail/index.js):

1. import `Linking` library
2. add `doEmail` and `doCall` functions
3. modify `handleLayoutTap`: call `doEmail` or `doCall` on tap event 
4. import `ScrollRefresh` component from `react.force.datacontainer` package
5. wrap `<Header />` and `<CompactLayout />` with `<ScrollRefresh>` component 
 
```js

import React, {
  View,
  Linking
} from 'react-native';

import {Sobj,ScrollRefresh} from 'react.force.datacontainer';

import {CompactLayout} from 'react.force.layout';

import Header from './Header';

import styles from './styles';

const doCall = (phone) => {
  const url = 'tel:'+phone;
  Linking.canOpenURL(url).then(supported => {
    if (!supported) {
      alert('Can\'t handle url: ' + url);
    } else {
      return Linking.openURL(url);
    }
  }).catch(err => console.error('An error occurred', err));
};

const doEmail = (email) => {
  const url = 'mailto:'+email;
  Linking.canOpenURL(url).then(supported => {
    if (!supported) {
      alert('Can\'t handle url: ' + url);
    } else {
      return Linking.openURL(url);
    }
  }).catch(err => console.error('An error occurred', err));
};

module.exports = React.createClass({
  handleLayoutTap(layoutTapEvent) {
    if(layoutTapEvent.eventType === 'phone'){
      doCall(layoutTapEvent.value);
    }
    else if(layoutTapEvent.eventType === 'email'){
      doEmail(layoutTapEvent.value);
    }
  },
  render() {
    return (
      <Sobj type={this.props.route.sobj.attributes.type} id={this.props.route.sobj.Id} style={styles.container}>
        <ScrollRefresh>
          <Header />
          <CompactLayout onLayoutTap={this.handleLayoutTap} />
        </ScrollRefresh>
      </Sobj>
    );
  },
});

```

***

##### Expected Result:

Data fetch and spinner on pull-to-refresh:

![iOS Screenshot](/tutorial/README_FILES/step12.png?raw=true)

***

##### Done!
