import type { StyleProp, TextStyle } from 'react-native';
import { StyleSheet, Text } from 'react-native';
import { typography } from '../../tokens';
import { useTheme } from '../../theme';

export interface HeadingProps {
  size?: 'text-xs' | 'text-sm' | 'text-md' | 'text-lg' | 'text-xl' | 'text-xxl' | 'text-xxxl';
  children: React.ReactNode;
  color?: string;
  style?: StyleProp<TextStyle>;
}

export const Heading = ({ size = 'text-xl', children, color, style }: HeadingProps) => {
  const theme = useTheme();
  const finalColor = color || theme.text.primary;

  return (
    <Text accessibilityRole="header" style={[styles.base, textStyles[size], { color: finalColor }, style]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  base: {
    fontFamily: typography.fontFamily.bold,
    fontWeight: typography.fontWeight.bold,
  },
});

const textStyles = StyleSheet.create({
  'text-xxxl': {
    fontSize: typography.fontSize.xxxl,
    lineHeight: typography.fontSize.xxxl * typography.lineHeight.tight,
  },
  'text-xxl': {
    fontSize: typography.fontSize.xxl,
    lineHeight: typography.fontSize.xxl * typography.lineHeight.tight,
  },
  'text-xl': {
    fontSize: typography.fontSize.xl,
    lineHeight: typography.fontSize.xl * typography.lineHeight.tight,
  },
  'text-lg': {
    fontSize: typography.fontSize.lg,
    lineHeight: typography.fontSize.lg * typography.lineHeight.normal,
  },
  'text-md': {
    fontSize: typography.fontSize.md,
    lineHeight: typography.fontSize.md * typography.lineHeight.normal,
  },
  'text-sm': {
    fontSize: typography.fontSize.sm,
    lineHeight: typography.fontSize.sm * typography.lineHeight.normal,
  },
  'text-xs': {
    fontSize: typography.fontSize.xs,
    lineHeight: typography.fontSize.xs * typography.lineHeight.normal,
  },
});
