//
//  SnapshotTests.m
//  dreamhouse
//
//  Created by Kapil Gowru on 9/30/16.
//  Copyright © 2016 Salesforce. All rights reserved.
//
#import <UIKit/UIKit.h>
#import <XCTest/XCTest.h>
#import <RCTTest/RCTTestRunner.h>

@interface dreamhouseSnapshotTests : XCTestCase {
  RCTTestRunner *_runner;
}

@end

@implementation dreamhouseSnapshotTests

- (void)setUp {
  //[super setUp];
  // Put setup code here. This method is called before the invocation of each test method in the class.
  _runner = RCTInitRunnerForApp(@"js/testLib/snapshotTests", nil);
  _runner.recordMode = NO;
  
}

#define RCT_TEST(name)                      \
- (void)test##name                          \
{                                           \
[_runner runTest:_cmd module:@#name];   \
}

RCT_TEST(PropertyList);

- (void)testZZZNotInRecordMode
{
  XCTAssertFalse(_runner.recordMode, @"Don't forget to turn record mode back to off");
}

@end
