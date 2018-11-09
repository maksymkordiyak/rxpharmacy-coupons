import React, {Component} from "react";
import {
  StyleSheet,
  SectionList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {colors} from "../../constants/Colors";
import {capitalizeFirstLetter} from "../../utils/string";

class Autocomplete extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      inputValue: "",
    };
  }

  render() {
    const {inputValue} = this.state;

    return (
      <View>
        <TextInput
          style={styles.input}
          onChangeText={text => this.setState({inputValue: text})}
          placeholder="Add a Drug"
          placeholderTextColor={colors.concrete}
          value={inputValue}
          autoCorrect={false}
        />
        <SectionList
          style={styles.suggestionList}
          renderItem={({item, index, section}) => (
            <TouchableOpacity style={styles.autocompleteItem}>
              <Text style={styles.autocompleteItemText} key={index}>
                {capitalizeFirstLetter(item)}
              </Text>
            </TouchableOpacity>
          )}
          renderSectionHeader={({section: {title}}) => (
            <View style={[styles.autocompleteItem, styles.autocompleteHeader]}>
              <Text style={styles.autocompleteHeaderText} key={title}>
                {title.toUpperCase()}
              </Text>
            </View>
          )}
          sections={[
            {
              title: "Drugs",
              data: [
                "lipichol 540",
                "lipidshield plus",
                "lipistart",
                "lipitor",
              ],
            },
          ]}
          keyExtractor={(item, index) => item + index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  suggestionList: {
    position: "relative",
    top: -6,
  },
  input: {
    fontSize: 20,
    textDecorationLine: "none",
    paddingLeft: 16,
    height: 42,
    width: 358,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.darkGreen,
    fontFamily: "helvetica-medium",
  },
  autocompleteItem: {
    paddingLeft: 15,
    paddingTop: 3,
    height: 41,
    borderTopWidth: 0,
    borderWidth: 1,
    borderLeftColor: colors.darkGreen,
    borderRightColor: colors.darkGreen,
    borderBottomColor: colors.dividerColor,
  },
  autocompleteItemText: {
    fontFamily: "helvetica-medium",
    fontSize: 19,
  },
  autocompleteHeader: {
    height: 35.8,
  },
  autocompleteHeaderText: {
    fontFamily: "helvetica-medium",
    fontSize: 17,
    color: colors.darkConcrete,
  },
});

export default Autocomplete;
