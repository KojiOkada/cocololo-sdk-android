//
//  Connection.h
//  WorldCup2014
//
//  Created by Kei on 2014/05/28.
//  Copyright (c) 2014年 株式会社 クリエイテラ. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <CoreGraphics/CGBase.h>
enum
{
	kConnectionTypeBefore,
	kConnectionTypeAfter,
	kConnectionTypeData,
};

enum {
	kConnectionSuccess,
	kConnectionError,
	kConnectionReMeasurement,
};

// 測定
#define kReturnDataBefore_Result_Before						@"Result_Before"
#define kReturnDataBefore_StressRelaxIndex_Before			@"StressRelaxIndex_Before"
#define kReturnDataBefore_TotalPower_Before					@"TotalPower_Before"
#define kReturnDataBefore_Comment_Before					@"Comment_Before"
#define kReturnDataBefore_LF_Before							@"LF_Before"
#define kReturnDataBefore_HF_Before							@"HF_Before"
#define kReturnDataBefore_HR_Before							@"HR_Before"
#define kReturnDataBefore_SummedRRI_Before					@"SummedRRI_Before"

// 曲測定
#define kReturnDataAfter_RelaxIndex							@"RelaxIndex"



// メモ


@protocol ConnectionDelegate;
@class Game;
#import "UserInfo.h"

@interface Connection : NSObject {
	
//	CGFloat			LFBefore_;
//	CGFloat			HFBefore_;
//	CGFloat			HRBefore_;
//	CGFloat			summedRRIBefore_;
//	
//	NSInteger		excitement_;
//	NSMutableString	*comment_;
//	NSMutableString	*level_;
	
	NSInteger		connectionType_;
	
	NSMutableString	*result_;
	CGFloat			relax_;
	CGFloat			power_;
	NSMutableString	*comment_;
	CGFloat			rri_;
	
	CGFloat			LF_;
	CGFloat			HF_;
	NSInteger		HR_;
}

@property (nonatomic, assign) id delegate;
@property (nonatomic, strong) UserInfo *userInfo;

- (void)connection:(NSInteger)connectionType;
- (BOOL)analyzeMeasurementResult:(NSData *)result;

@end

@protocol ConnectionDelegate <NSObject>
@optional
- (void)connectionError:(NSError *)error;
- (void)didFinishConnection:(NSData*)data;
//- (void)didFinishConnection:(NSInteger)succeed result:(NSString *)result relax:(CGFloat)relax power:(CGFloat)power comment:(NSString *)comment rri:(CGFloat)rri;
@end
