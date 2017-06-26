//
//  CocololoDelegate.h
//  CocololoSDK
//
//  Created by doanhkisi on 1/2/17.
//  Copyright © 2017 doanhkisi. All rights reserved.
//

#ifndef CocololoDelegate_h
#define CocololoDelegate_h


#endif /* CocololoDelegate_h */
#import "Constant.h"
#import "MeasurementData.h"

@protocol CocololoDelegate <NSObject>

- (void)cocololoPrepareMeasument;
- (void)cocololoDidStart;
- (void)cocololoDidStartCamera;
- (void)cocololoDidFinishUseCamera;
- (void)getCocololoCurrentBrightness:(MeasurementData *)brightness;
- (void)getCocololoTotalBrightness:(NSMutableArray *)allData;
- (void)getCocololoResult:(NSDictionary *)result;
- (void)cocololoDidCancel;
- (void)cocololoDidError:(ErrorCode)errorCode;
- (void)didFinishMeasurement;
- (void)captureOutput:(UIImage *)image;
- (void)getCurrentProgress:(CGFloat)currenValue;

@end
