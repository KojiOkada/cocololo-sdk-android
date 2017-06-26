//
//  Common.h
//  CocololoSDK
//
//  Created by doanhkisi on 1/4/17.
//  Copyright © 2017 doanhkisi. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface SDKCommon : NSObject

+ (NSInteger)getFeelingId:(NSString *)feeling;

+ (NSString *)getLongDateString:(NSDate *)date;
+ (NSString *)getDateStringForUpload:(NSDate *)date;
+ (NSString *)getDateStringFromDate:(NSDate *)date format:(NSString *)format;
+ (double)getTimeFromDate:(NSDate *)date;

@end
