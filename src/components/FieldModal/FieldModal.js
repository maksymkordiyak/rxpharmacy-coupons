import React, {Component} from "react";
import {Modal, Text, View} from "react-native";
import {bool, func, object} from "prop-types";
import {colors} from "../../constants/Colors";
import Autocomplete from "../Autocomplete";
import {Button} from "../Button";
import {HelveticaBoldText, HelveticaRegularText} from "../StyledText";
import Divider from "../Divider";
import styles from "./FieldModal.styles";

export class FieldModal extends Component {
  render() {
    const {opened = false, onClose, input, error} = this.props;

    return (
      <Modal
        animationType="fade"
        transparent={false}
        visible={opened}
        onRequestClose={() => onClose()}
      >
        <View style={styles.container}>
          <View style={styles.column}>
            <Button
              style={styles.closeBtn}
              type="transparent"
              iconSet="Ionicons"
              middle="CLOSE"
              right="md-close"
              color={colors.primary}
              textStyle={styles.closeBtnText}
              onClick={() => onClose()}
              size={20}
            />
            <HelveticaBoldText style={styles.header}>
              Change Your Location
            </HelveticaBoldText>
          </View>
          <Divider />
          <HelveticaRegularText style={styles.text}>
            Enter your location to
          </HelveticaRegularText>
          <HelveticaRegularText style={[styles.text, styles.gutterBottom]}>
            pharmacy drug pricing in near you.
          </HelveticaRegularText>
          <Autocomplete onChangeText={val => input.onChange(val)} />
          {error && <Text>{error}</Text>}
        </View>
      </Modal>
    );
  }
}

FieldModal.propTypes = {
  input: object.isRequired,
  opened: bool.isRequired,
  onClose: func.isRequired,
};

export default FieldModal;
