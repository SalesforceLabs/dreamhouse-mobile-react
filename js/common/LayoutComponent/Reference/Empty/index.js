'use strict';

import React, {
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import SLDS from 'design-system-react-native';


module.exports = React.createClass ({
  render() {
    return <SLDS.InputReadonly.ValueText> ... </SLDS.InputReadonly.ValueText>;
  }
});
