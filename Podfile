# Uncomment this line to define a global platform for your project
# platform :ios, '8.0'

def shared_pods

source 'https://github.com/forcedotcom/SalesforceMobileSDK-iOS-Specs.git' # need to be first
source 'https://github.com/CocoaPods/Specs.git'

pod 'React', :path => './node_modules/react-native', :subspecs => [
  'Core',
  'RCTImage',
  'RCTNetwork',
  'RCTText',
  'RCTWebSocket',
  'RCTLinkingIOS'
]

pod 'SalesforceSDKCore'
pod 'SalesforceNetwork'
pod 'SalesforceRestAPI'
pod 'SmartStore'
pod 'SmartSync'
pod 'SalesforceReact'

end

target 'dreamhouse' do

  shared_pods

end
