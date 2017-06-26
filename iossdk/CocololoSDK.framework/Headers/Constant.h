//
//  Constant.h
//  CocololoSDK
//
//  Created by doanhkisi on 1/2/17.
//  Copyright © 2017 doanhkisi. All rights reserved.
//

#ifndef Constant_h
#define Constant_h

#define kUDKey_Threshold_Wave_value_SDK					@"Threshold_Wave_value_sdk"
#define kUDKey_Threshold_Wave_steps_SDK					@"Threshold_Wave_steps_sdk"
#define kUDKey_Threshold_R_G_SDK                        @"Threshold_R_G_SDK"
#define kUDKey_Threshold_R_B_SDK                        @"Threshold_R_B_SDK"
#define kUDKey_ReturnFeeling_SDK						@"ReturnFeeling_SDK"
#define kUDKey_MeasurementDateSDK						@"MeasurementDateSDK"	

#define kUDKey_User_Nickname					@"UDKey_User_Nickname"
#define kUDKey_User_Password					@"UDKey_User_Password"
#define kUDKey_User_Gender						@"UDKey_User_Gender"
#define kUDKey_User_Birthday					@"UDKey_User_Birthday"

#define kUDKey_User_MailAddress					@"UDKey_User_MailAddress"
#define kUDKey_User_Job							@"UDKey_User_Job"
#define kUDKey_User_Prefecture					@"UDKey_User_Prefecture"
#define kUDKey_User_Height						@"UDKey_User_Height"
#define kUDKey_User_Weight						@"UDKey_User_Weight"

#define kMeasurementNumOfSeconds                        5
#define kMeasurementDuration                            35
#define kConnectionTypeBeforeSDK                        0


#define kBeforeUploadURL				@"https://star-ana.cocololo.jp/CocololoAnalyzeServerForBefore/Upload"
#define kDataUploadURL					@"https://star-ana.cocololo.jp/CocololoAnalyzeServerForData/Upload"
#define kDataByPHPConnectionURLSDK		@"https://phphttps.cocololo.jp/public_html/"
#define kDocumentDirectory		[NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES) objectAtIndex:0]
#define kCachesDirectory		[NSSearchPathForDirectoriesInDomains(NSCachesDirectory, NSUserDomainMask, YES) objectAtIndex:0]
#define kMeasurementFileSDK		[NSString stringWithFormat:@"%@/brightness_sdk.csv", kCachesDirectory]

static NSString* Feeling[] __unused = { @"かなり理想", @"やや理想", @"かなりのんびり", @"ややのんびり", @"かなりぐったり", @"ややぐったり", @"ストレス気味", @"ややストレス", };
static NSString* Action[] __unused = { @"仕事", @"家事", @"移動", @"食事・飲み会", @"余暇", @"運動", @"睡眠", @"その他", };
//typedef NS_ENUM(NSUInteger, ErrorCode) {
//    ErrorCodeBadRequest = 400,
//    ErrorCodeRequestTimeout = 408,
//    ErrorCodeInternalSeverError = 500,
//    ErrorCodeUnknown = 200,
//};
typedef NS_ENUM(NSUInteger, ErrorCode) {
    ErrorCodeCannotUseCamera = 0,
    ErrorCodeAVAuthorizationStatusDenied = 1,
    ErrorCodeBadRequest = 400,
    ErrorCodeRequestTimeout = 408,
    ErrorCodeInternalSeverError = 500,
    ErrorCodeUnknown = 200,
    ErrorCodeNotHand = 69,
    ErrorCodeNotImplementDataSource = 44,
    ErrorCodeNotInsertMeasurementInfo = 55,
};
#endif /* Constant_h */
