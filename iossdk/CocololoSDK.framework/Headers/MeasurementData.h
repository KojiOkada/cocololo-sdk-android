//
//  MeasurementData.h
//  WorldCup2014
//
//  Created by Kei on 2014/05/22.
//  Copyright (c) 2014年 株式会社 クリエイテラ. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface MeasurementData : NSObject
{
	NSDate				*date_;
	double				brightness_;
}

@property (readonly) NSDate *date;
@property (readonly) double brightness;

- (id)initWithDate:(NSDate *)date
	withBrightness:(double)brightness;

@end