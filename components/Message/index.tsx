import React from 'react';
import {Text} from 'react-native';
import GlobalStyles from '../Styles';

const Message: React.FC<MessageProps> = ({data}) => {
  return data.enable ? (
    <Text
      style={{
        ...GlobalStyles.textNormal,
        color: data.mode === MessageMode.success ? 'white' : 'red',
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10,
      }}>
      {data.message}
    </Text>
  ) : (
    <></>
  );
};

interface MessageProps {
  data: {
    enable: boolean;
    message: string;
    mode: MessageMode | '';
  };
}

export enum MessageMode {
  success,
  error,
}

export default Message;
