//
//  CocololoDataSource.h
//  CocololoSDK
//
//  Created by doanhkisi on 1/2/17.
//  Copyright © 2017 doanhkisi. All rights reserved.
//

#ifndef CocololoDataSource_h
#define CocololoDataSource_h


#endif /* CocololoDataSource_h */
#import "UserInfo.h"
@protocol CocololoDataSource <NSObject>
@required
- (UserInfo *)getUserInfo;

@end;
