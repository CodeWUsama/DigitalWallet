import * as React from 'react';
import {
  Button,
  Paragraph,
  Dialog as NativeDialog,
  Portal,
} from 'react-native-paper';
import {Colors} from '../../constants';

const Dialog: React.FC<DialogProps> = ({
  show,
  onCancel,
  title,
  content,
  onConfirm,
}) => {
  return (
    <Portal>
      <NativeDialog visible={show} onDismiss={onCancel}>
        <NativeDialog.Title>{title}</NativeDialog.Title>
        <NativeDialog.Content>
          <Paragraph>{content}</Paragraph>
        </NativeDialog.Content>
        <NativeDialog.Actions>
          <Button color={Colors.buttonColor} onPress={onCancel}>
            Cancel
          </Button>
          <Button color={Colors.buttonColor} onPress={onConfirm}>
            Confirm
          </Button>
        </NativeDialog.Actions>
      </NativeDialog>
    </Portal>
  );
};

interface DialogProps {
  show: boolean;
  onCancel: () => void;
  onConfirm: () => void;
  title: string;
  content: string;
}

export default Dialog;
