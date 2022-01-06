import React from 'react';
import {IconButton as IButton} from 'react-native-paper';

const IconButton: React.FC<IButtonProps> = ({
  icon,
  onPress,
  size,
  color,
  disabled,
}) => {
  return (
    <IButton
      icon={icon}
      disabled={disabled}
      color={color ?? 'white'}
      size={size ?? 24}
      onPress={onPress}
    />
  );
};

interface IButtonProps {
  icon: any;
  size?: number;
  color?: string;
  disabled?: boolean;
  onPress?: () => void;
}

export default IconButton;
