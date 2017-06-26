//
//  UserInfo.h
//  CocololoSDK
//
//  Created by doanhkisi on 1/5/17.
//  Copyright © 2017 doanhkisi. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>

typedef NS_ENUM(NSUInteger, GenderType) {
    Male,
    Femal,
    UnSex,
};

@interface UserInfo : NSObject

@property (nonatomic, strong) NSString *uuid;
@property (nonatomic, strong) NSString *cocololoKey;
@property (nonatomic, strong) NSString *name;
@property (nonatomic, assign) GenderType gender;
@property (nonatomic, strong) NSDate *birthday;
@property (nonatomic, strong) NSString *prefecture;
@property (nonatomic, assign) CGFloat height;
@property (nonatomic, assign) CGFloat weight;
@property (nonatomic, strong) NSString *action;
@property (nonatomic, strong) NSString *memo;

@end
