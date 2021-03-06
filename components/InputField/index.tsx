import * as React from 'react';
import {TextInput} from 'react-native-paper';
import {Colors} from '../../constants';

const InputField: React.FC<InputFieldProps> = ({
  label,
  mode,
  placeholder,
  multiline,
  height,
  value,
  rightIcon,
  isNumeric,
  onIconTouch,
  onChange,
  disabled,
  secureTextEntry,
  onPress,
  maxLength,
}) => {
  return (
    <TextInput
      secureTextEntry={secureTextEntry}
      onChangeText={onChange}
      value={value ?? ''}
      keyboardType={isNumeric ? 'numeric' : 'default'}
      disabled={disabled}
      mode={mode ?? 'flat'}
      onPressIn={onPress}
      label={label ?? 'Label'}
      placeholder={placeholder}
      multiline={multiline}
      maxLength={maxLength}
      autoCapitalize={label === 'email' ? 'none' : 'sentences'}
      style={{
        backgroundColor: 'white',
        height: height ?? 60,
        borderRadius: 3,
      }}
      activeUnderlineColor={Colors.base}
      right={
        rightIcon ? (
          <TextInput.Icon onPress={onIconTouch} name={rightIcon} />
        ) : null
      }
    />
  );
};

interface InputFieldProps {
  label: string;
  mode?: Mode;
  placeholder?: string;
  multiline?: boolean;
  height?: number;
  value?: any;
  disabled?: boolean;
  rightIcon?: any;
  onIconTouch?: () => void;
  onPress?: () => void;
  onChange?: (v: string) => void;
  secureTextEntry?: boolean;
  isNumeric?: boolean;
  maxLength?: number;
}

export enum Mode {
  outlined = 'outlined',
  flat = 'flat',
}

export default InputField;
