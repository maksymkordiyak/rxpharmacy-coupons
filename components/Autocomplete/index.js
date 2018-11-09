import React, {Component} from "react";
import {SectionList, TextInput, TouchableOpacity, View} from "react-native";
import {colors} from "../../constants/Colors";
import {capitalizeFirstLetter} from "../../utils/string";
import {HelveticaMediumText} from "../StyledText";
import {Icon} from "../Icon";
import {styles} from "./Autocomplete.styles";

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
        <Icon
          iconSet="Octicons"
          size={20}
          style={styles.plus}
          name="plus"
          color={colors.concrete}
        />
        <TextInput
          style={styles.input}
          onChangeText={text => this.setState({inputValue: text})}
          placeholder="Add a Drugs"
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

export default Autocomplete;
