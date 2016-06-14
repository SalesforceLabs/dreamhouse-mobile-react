## Step 2: Adding Touch Handler

##### Goal

Learn how to handle tap events.

##### Before getting started

If you are building your app from scratch: [Step1](/tutorial/step01_cleanup_and_dependencies/) needs to be completed.

OR

If you just want to practice this step: you can start editing [Step1 components](/tutorial/step01_cleanup_and_dependencies/) in this repo and run

```

npm run step2

```

***

##### 1. In your favorite IDE

Open [app/index.js](/tutorial/step01_cleanup_and_dependencies/app/index.js) file in your favorite IDE

##### 2. Import `TouchableOpacity` component

```js
import React, {
  Text,
  View,
  TouchableOpacity // <- This line is added
} from 'react-native';

```

##### 3. Add `handlePress` method before `render` method in your component

```js
  handlePress(){
    alert('Pressed!');
  },
```

##### 3. Wrap Text component with `TouchableOpacity` in your component render function

```html
  <TouchableOpacity onPress={this.handlePress}>
    <Text style={styles.text}>Let's start coding!!</Text>
  </TouchableOpacity>
```

****

##### Expected Result:

Tap on 'Let's start coding!!' text:

![iOS Screenshot](/tutorial/README_FILES/step2.png?raw=true)

***

##### Next Step:

Let's add Navigator component

[Step3: Adding Navigator](/tutorial/step03_navigator/)

