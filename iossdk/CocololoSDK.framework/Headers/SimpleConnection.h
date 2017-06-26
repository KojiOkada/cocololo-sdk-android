//
//  SimpleConnectBYPhp.h
//  COCOLOLO
//
//  Created by リュウショウゼン on 2015/05/26.
//  Copyright (c) 2015年 リュウショウゼン. All rights reserved.
//

#import <Foundation/Foundation.h>

enum
{
    kConnectionType_RGB_Threshold_SDK,
    kConnectionType_Wave_Threshold_SDK,
    insert_ccll_d_measurement_info_SDK,
    get_measurement_id_and_datetime_by_uuid_SDK
};

@interface SimpleConnection : NSObject

+ (NSString*)connectionRequest:(NSInteger)connectionType parameter:(NSString*)parameter;

@end
