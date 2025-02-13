import { View, StatusBar, Platform } from 'react-native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const MyStatusBar = ({ backgroundColor, barStyle, translucent = false }) => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        flex: 0,
        height: translucent ? 0 : insets.top,
        backgroundColor: backgroundColor || 'transparent',
      }}>
      <StatusBar
        translucent={translucent}
        backgroundColor={backgroundColor}
        barStyle={barStyle}
      />
    </View>
  );
};

export default MyStatusBar;
