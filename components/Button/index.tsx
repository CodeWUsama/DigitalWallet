import * as React from 'react';
import {Button as RButton} from 'react-native-paper';
import {Colors} from '../../constants';

const Button: React.FC<ButtonProps> = ({
  label,
  mode,
  icon,
  backgroundColor,
  onPress,
}) => {
  return (
    <RButton
      icon={icon}
      mode={mode ?? 'contained'}
      onPress={onPress}
      labelStyle={{fontSize: 24}}
      style={{
        height: 60,
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
      }}
      color={backgroundColor ?? Colors.buttonColor}>
      {label}
    </RButton>
  );
};

interface ButtonProps {
  label: string;
  mode?: Mode;
  backgroundColor?: string;
  icon?: any;
  onPress?: () => void;
}

enum Mode {
  text = 'text',
  outlined = 'outlined',
  contained = 'contained',
}

export default Button;
