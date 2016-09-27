import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  Animated
} from 'react-native';


class SlideInFadeIn extends React.Component {

   constructor(props) {
     super(props);
     this.state = {
       fadeAnim: new Animated.Value(0), // init opacity 0
       xAnim: new Animated.Value(0), // init opacity 0
     };
   }

   componentDidMount() {
    this.doAnimate();
   }

   doAnimate() {
    const timing = Animated.timing;
    const delay = Animated.delay;
    const spring = Animated.spring;

     Animated.sequence([
      delay(200),
      spring(
        this.state.fadeAnim,    
        {
          toValue: this.props.reverse?0:1,
          duration:450,
        }
      ),
    ]).start();
   }

   render() {
    const animatedStyle = {
     opacity: this.state.fadeAnim, // Binds directly
     transform: [{
       translateY: this.state.fadeAnim.interpolate({
         inputRange: [0, 1],
         outputRange: [150, 0]  // 0 : 150, 0.5 : 75, 1 : 0
       }),
     }],
    };
    return (
      <Animated.View {... this.props} style={[this.props.style, animatedStyle]}>
        {this.props.children}
      </Animated.View>
    );
   }

   componentDidUpdate(prevProps) {
    if(this.props.reverse !== prevProps.reverse){
      this.doAnimate();
    }
   }
 };

module.exports = SlideInFadeIn;