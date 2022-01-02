import React from 'react';
import {IconButton as IButton} from 'react-native-paper';

const IconButton: React.FC<IButtonProps> = ({icon, onPress, size, color}) => {
  return (
    <IButton
      icon={icon}
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
  onPress?: () => void;
}

export default IconButton;
