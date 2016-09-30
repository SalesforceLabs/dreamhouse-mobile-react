require("babel-register")({
  //ignore react-native, react, enzyme, and react-native-mock modules but transpile the rest
  ignore: /node_modules\/(?!react-native|react|enzyme|react-native-mock)/
});
