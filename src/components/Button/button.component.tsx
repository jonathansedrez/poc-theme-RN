import React, {ReactElement} from 'react';
import {SvgCss} from 'react-native-svg';
import {
  TouchableWithoutFeedback,
  Text,
  View,
  ViewStyle,
  TextStyle,
} from 'react-native';

import styles from './styles';

export interface ButtonProps {
  children: string;
  onPress(): void;
  disabled?: boolean;
  type?: 'primary' | 'secondary';
  style?: ViewStyle;
  icon?: string;
}

export interface ViewStyleObj {
  [key: string]: ViewStyle[];
}

export interface TextStyleObj {
  [key: string]: TextStyle[];
}

export interface iconStyleObj {
  [key: string]: string;
}

export const Button = (props: ButtonProps): ReactElement => {
  const {children, onPress, type, disabled, icon, style} = props;
  const {
    baseStyle,
    baseTextStyle,
    primaryStyle,
    primaryTextStyle,
    primaryDisabledStyle,
    primaryTextDisabledStyle,
    secondaryStyle,
    secondaryTextStyle,
    secondaryDisabledStyle,
    secondaryTextDisabledStyle,
    iconStyle,
  } = styles;

  const viewStyles: ViewStyleObj = {
    primary: [primaryStyle, disabled && primaryDisabledStyle],
    secondary: [secondaryStyle, disabled && secondaryDisabledStyle],
  };

  const textStyles: TextStyleObj = {
    primary: [primaryTextStyle, disabled && primaryTextDisabledStyle],
    secondary: [secondaryTextStyle, disabled && secondaryTextDisabledStyle],
  };

  const iconStyles: iconStyleObj = {
    primary: 'white',
    secondary: 'blue',
  };

  return (
    <TouchableWithoutFeedback onPress={!disabled ? onPress : null}>
      <View style={[baseStyle, viewStyles[type || 'primary'], style && style]}>
        {icon && (
          <SvgCss
            xml={icon}
            fill={iconStyles[type || 'primary']}
            width={32}
            height={32}
            style={iconStyle}
          />
        )}
        <Text style={[baseTextStyle, textStyles[type || 'primary']]}>
          {children}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Button;
