import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS, SPACING} from '../theme/theme';
import CustomIcon from './CustomIcon';

interface GradientBGIconsProps {
  name: string;
  color: string;
  size: number;
}
export const GradientBGIcons: React.FC<GradientBGIconsProps> = ({
  name,
  color,
  size,
}) => {
  return (
    <View style={styles.Container}>
      <LinearGradient
        colors={[COLORS.primaryDarkGreyHex, COLORS.primaryBlackHex]}
        style={styles.LinearGradientBG}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}>
        <CustomIcon name={name} color={color} size={size} />
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    borderWidth: 2,
    borderColor: COLORS.secondaryDarkGreyHex,
    borderRadius: SPACING.space_12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.secondaryDarkGreyHex,
    overflow: 'hidden',
  },
  LinearGradientBG: {
    height: SPACING.space_36,
    width: SPACING.space_36,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
