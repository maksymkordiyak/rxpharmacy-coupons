import React, {Component} from "react";
import {Modal, TextInput, View} from "react-native";
import {bool, func} from "prop-types";
import {colors} from "../../constants/Colors";
import Autocomplete from "../Autocomplete";
import {IconButton} from "../Button";
import {HelveticaMediumText} from "../StyledText";
import styles from "./FieldModal.styles";

export class FieldModal extends Component {
  render() {
    const {opened, onClose, onChange} = this.props;
    console.log("MODAL", opened);

    return (
      <Modal
        animationType="fade"
        transparent={false}
        visible={opened}
        onRequestClose={() => onClose()}
      >
        <View style={styles.container}>
          <IconButton
            iconSet="Ionicons"
            name="md-close"
            color={colors.textInvert}
            onClick={() => onClose()}
            size={20}
          />
          <HelveticaMediumText>Test</HelveticaMediumText>
          <Autocomplete />
          <TextInput
            style={styles.input}
            onChangeText={ev => onChange(ev)}
            label="Test"
          />
        </View>
      </Modal>
    );
  }
}

FieldModal.propTypes = {
  opened: bool.isRequired,
  onClose: func.isRequired,
  onChange: func.isRequired,
};

export default FieldModal;
