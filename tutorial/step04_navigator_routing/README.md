## Step 4: Adding Navigator Router

##### Goal

Learn how to use Navigator Router.

##### Before getting started

If you are building your app from scratch: [Step3](/tutorial/step03_navigator/) needs to be completed.

OR

If you just want to practice this step: you can start editing [Step3 components](/tutorial/step03_navigator/) in this repo and run

```

npm run step3

```

***

##### 1. Copy folder [app/PageA/](/tutorial/step04_navigator_routing/app/PageA/) and call it [app/PageB/](/tutorial/step04_navigator_routing/app/PageB/).

##### 2. Change text in [app/PageB/index.js](/tutorial/step04_navigator_routing/app/PageB/index.js):

In the cloned component replace `Page A` text with `Page B`

```html

import React, {
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import styles from './styles';

module.exports = React.createClass({
  handlePress(){
    if(this.props.navigator){
      this.props.navigator.push({name:'PageA'});
    }
  },
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.handlePress}>
          <Text style={styles.text}>Page B</Text> {/* <-- This line is changed */}
        </TouchableOpacity>
      </View>
    );
  },
});

```

##### 3. Modify [app/PageB/index.js](/tutorial/step04_navigator_routing/app/PageA/index.js):

Replace `PageA` with `PageB` in `navigator.push` call:

```html

import React, {
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import styles from './styles';

module.exports = React.createClass({
  handlePress(){
    if(this.props.navigator){
      this.props.navigator.push({name:'PageB'}); /* <-- This line is changed */
    }
  },
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.handlePress}>
          <Text style={styles.text}>Page A</Text>
        </TouchableOpacity>
      </View>
    );
  },
});

```


##### 3. Modify [app/index.js](/tutorial/step04_navigator_routing/app/index.js):

Add more logic to `renderScene` method to handle `PageB` request:

```html

import React, {
  Text,
  View,
  Navigator,

} from 'react-native';

import styles from './styles';

import PageA from './PageA';
import PageB from './PageB';

module.exports = React.createClass({
  renderScene(route,navigator){
    if(route.name === 'PageB'){ /* <-- This line is added */
      return <PageB navigator={navigator} route={route} />; /* <-- This line is added */
    } /* <-- This line is added */
    return <PageA navigator={navigator} route={route} />;
  },
  render() {
    return (
      <Navigator
        initialRoute={{name:'PageA'}}
        renderScene={this.renderScene}
      />
    );
  },
});

```

***

##### Expected Result:

Tap on 'Page A' text and observe Navigator transition animation to PageB:

![iOS Screenshot](/tutorial/README_FILES/step3.png?raw=true)

***

##### Next Step:

Let's start working with Salesforce data:

[Step 5: Rendering Relevant Items list](/tutorial/step05_relevant_items/)
