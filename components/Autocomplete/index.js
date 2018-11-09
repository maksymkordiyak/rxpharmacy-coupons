import React, {Component} from "react";
import {
  StyleSheet,
  SectionList,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {colors} from "../../constants/Colors";
import {capitalizeFirstLetter} from "../../utils/string";
import {HelveticaMediumText} from "../StyledText";
import {Octicon} from "../Icon";

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
      <View style={styles.container}>
        <Octicon
          size={20}
          style={styles.plus}
          name="plus"
          color={colors.concrete}
        />
        <TextInput
          style={styles.input}
          onChangeText={text => this.setState({inputValue: text})}
          placeholder="Add a Drzugs"
          placeholderTextColor={colors.concrete}
          value={inputValue}
          autoCorrect={false}
        />

        <SectionList
          style={styles.suggestionList}
          renderItem={({item, index, section}) => (
            <TouchableOpacity style={styles.listItem}>
              <HelveticaMediumText style={styles.listItemText} key={index}>
                {capitalizeFirstLetter(item)}
              </HelveticaMediumText>
            </TouchableOpacity>
          )}
          renderSectionHeader={({section: {title}}) => (
            <View style={[styles.listItem, styles.listHeader]}>
              <HelveticaMediumText style={styles.listHeaderText} key={title}>
                {title.toUpperCase()}
              </HelveticaMediumText>
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
          ListFooterComponent={
            <View style={[styles.listItem, styles.listFooter]} />
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
  },
  plus: {
    position: "absolute",
    left: 16.6,
    top: 9,
  },
  suggestionList: {
    width: 358,
    backgroundColor: "white",
    paddingTop: 6,
    marginTop: -6,
  },
  listFooter: {
    height: 16.7,
    borderBottomColor: colors.darkGreen,
  },
  input: {
    fontSize: 20,
    textDecorationLine: "none",
    paddingLeft: 40,
    height: 42,
    width: 358,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.darkGreen,
    fontFamily: "HelveticaMedium",
  },
  listItem: {
    paddingLeft: 15,
    paddingTop: 3,
    height: 41,
    borderTopWidth: 0,
    borderWidth: 1,
    borderLeftColor: colors.darkGreen,
    borderRightColor: colors.darkGreen,
    borderBottomColor: colors.dividerColor,
  },
  listItemText: {
    fontSize: 19,
  },
  listHeader: {
    borderTopWidth: 1,
    borderTopColor: colors.darkGreen,
    height: 35.8,
  },
  listHeaderText: {
    fontSize: 17,
    color: colors.darkConcrete,
  },
});

export default Autocomplete;
