import * as React from 'react';
import {TextInput} from 'react-native-paper';
import {Colors} from '../../constants';

const InputField: React.FC<InputFieldProps> = ({label, mode, placeholder}) => {
  return (
    <TextInput
      mode={mode ?? 'flat'}
      label={label ?? 'Label'}
      placeholder={placeholder}
      style={{
        backgroundColor: 'white',
        height: 60,
        borderRadius: 3,
      }}
      activeUnderlineColor={Colors.base}
    />
  );
};

interface InputFieldProps {
  label: string;
  mode?: Mode;
  placeholder?: string;
}

enum Mode {
  outlined = 'outlined',
  flat = 'flat',
}

export default InputField;
