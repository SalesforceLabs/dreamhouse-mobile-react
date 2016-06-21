## Step 9: Working on SObject Detail Page


##### Goal

Learn how to render Sobject information

##### Before getting started

If you are building your app from scratch: [Step 8](/tutorial/step08_list_item_touch_handler/) needs to be completed.

OR

If you just want to practice this step: you can start editing [Step 8 components](/tutorial/step08_list_item_touch_handler/) in this repo and run

```

npm run step8

```

***

##### 1. Create [app/BrokerDetail/Header/index.js](/tutorial/step09_sobject_detail_page/app/BrokerDetail/Header/index.js):

```js

import React, {
  Text,
  View,
  Image
} from 'react-native';

import {Sobj,utils} from 'react.force.datacontainer';

import styles from './styles';

module.exports = React.createClass({
  contextTypes:{
    sobj:React.PropTypes.object
  },
  getName() {
    if(this.context.sobj && this.context.sobj.Name){
      return this.context.sobj.Name;
    }
    return ' ';
  },
  render(){
    const imgConfig = utils.parseImageHTML(this.context.sobj['Picture_IMG__c']);
    const title = this.context.sobj['Title__c'];
    return (
      <View style={styles.container}>
        <View style={styles.bg}/>
          <View style={styles.imageRow}>
            <Image 
              style={styles.image}
              source={{uri: imgConfig.url }}
            />
          </View>
          <Text style={styles.name}>{this.context.sobj.attributes.compactTitle}</Text>
          <Text style={styles.title}>{title}</Text>
      </View>
    );
  }
});


```

##### 2. Create [app/BrokerDetail/Header/styles.js](/tutorial/step09_sobject_detail_page/app/BrokerDetail/Header/styles.js):

```js

module.exports = {
  container: {
    height:260
  },
  name: {
    textAlign:'center',
    backgroundColor: 'rgba(0,0,0,0)',
    color:'white',
    paddingBottom:5,
    fontSize:28
  },
  title: {
    textAlign:'center',
    backgroundColor: 'rgba(0,0,0,0)',
    color:'white',
    paddingBottom:14,
    fontSize:14
  },
  imageRow:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    height:160,
    marginTop:10
  },
  image:{
    width:160,
    height:160,
    backgroundColor:'white',
    borderRadius:80,
    borderWidth: 4, 
    borderColor: 'white',
  },
  bg:{
    position:'absolute',
    bottom:0,
    left:10,
    right:10,
    height:120,
    backgroundColor:'#81ca2b'
  }
};


```

##### 3. Modify [app/BrokerDetail/index.js](/tutorial/step09_sobject_detail_page/app/BrokerDetail/index.js):

1. import `Sobj` from `react.force.datacontainer` module
2. import `Header` component
3. wrap `Header` component with `Sobj` in `render` method

```js

import React, {
  View
} from 'react-native';

import {Sobj} from 'react.force.datacontainer';

import Header from './Header';

import styles from './styles';

module.exports = React.createClass({
  render() {
    return (
      <View style={styles.container}>
        <Sobj type={this.props.route.sobj.attributes.type} id={this.props.route.sobj.Id}>
          <Header />
        </Sobj>
      </View>
    );
  },
});

```

***

##### Expected Result:

![iOS Screenshot](/tutorial/README_FILES/step9.png?raw=true)

***

##### Next Step:

Let's render Compact Layout:

[Step 10: Compact Layout](/tutorial/step10_compact_layout/)
