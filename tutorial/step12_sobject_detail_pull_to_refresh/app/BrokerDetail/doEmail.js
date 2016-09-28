import { Linking } from 'react-native';

module.exports = (email) => {
  const url = 'mailto:'+email;
  Linking.canOpenURL(url).then(supported => {
    if (!supported) {
      alert('Can\'t handle url: ' + url);
    } else {
      return Linking.openURL(url);
    }
  }).catch(err => console.error('An error occurred', err));
};