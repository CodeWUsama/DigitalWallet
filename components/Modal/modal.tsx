import * as React from 'react';
import {Modal as RNModal, Portal} from 'react-native-paper';

const Modal: React.FC<ModalProps> = ({show, onClose, children}) => {
  const containerStyle = {
    backgroundColor: 'white',
    paddingTop: 10,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    margin: 15,
    borderRadius: 3,
  };

  return (
    <Portal>
      <RNModal
        visible={show}
        onDismiss={onClose}
        contentContainerStyle={containerStyle}>
        {children}
      </RNModal>
    </Portal>
  );
};

interface ModalProps {
  show: boolean;
  onClose: () => void;
  children?: JSX.Element;
}

export default Modal;
