import React, {Component} from "react";
import {SectionList, TextInput, TouchableOpacity, View} from "react-native";
import {colors} from "../../constants/Colors";
import {capitalizeFirstLetter, highlightString} from "../../utils/string";
import {HelveticaMediumText} from "../StyledText";
import {Icon} from "../Icon";
import {styles} from "./Autocomplete.styles";
import API from "../../utils/api";
import {WAIT_INTERVAL} from "../../constants/Autocomplete";

class Autocomplete extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      inputValue: "",
    };

    this.timer = null;

    this.triggerChange = this.triggerChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.renderItem = this.renderItem.bind(this);
  }

  handleInputChange(text) {
    clearTimeout(this.timer);
    this.setState({inputValue: text});
    this.timer = setTimeout(this.triggerChange, WAIT_INTERVAL);
  }

  async triggerChange() {
    const {inputValue} = this.state;
    try {
      const drugs = await API.searchDrugNames({search: inputValue});

      this.setState({items: drugs});
    } catch (error) {
      throw new Error();
    }
  }

  renderItem(item, index) {
    const {inputValue} = this.state;

    const highlightedText = highlightString(
      capitalizeFirstLetter(item.name),
      inputValue,
      colors.darkGreenColor,
    );

    return (
      <TouchableOpacity style={styles.listItem}>
        <HelveticaMediumText style={styles.listItemText} key={index}>
          {highlightedText}
        </HelveticaMediumText>
      </TouchableOpacity>
    );
  }

  renderSeparator() {
    return <View style={styles.separator} />;
  }

  renderSectionHeader(title) {
    return (
      <View style={[styles.listItem, styles.listHeader]}>
        <HelveticaMediumText style={styles.listHeaderText} key={title}>
          {title.toUpperCase()}
        </HelveticaMediumText>
      </View>
    );
  }

  render() {
    const {inputValue, items} = this.state;
    const {sectionName, placeholder} = this.props;

    const displayListCheck = items.length > 0 && inputValue;

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
          placeholder={placeholder}
          placeholderTextColor={colors.concrete}
          value={inputValue}
          autoCorrect={false}
          onChangeText={text => this.handleInputChange(text)}
        />
        {displayListCheck ? (
          <View style={styles.listShadow}>
            <SectionList
              style={styles.list}
              renderItem={({item, index}) => this.renderItem(item, index)}
              ItemSeparatorComponent={this.renderSeparator}
              renderSectionHeader={({section: {title}}) =>
                this.renderSectionHeader(title)
              }
              sections={[
                {
                  title: sectionName,
                  data: items,
                },
              ]}
              keyExtractor={(item, index) => item + index}
              ListFooterComponent={
                <View style={[styles.listItem, styles.listFooter]} />
              }
            />
          </View>
        ) : null}
      </View>
    );
  }
}

Autocomplete.defaultProps = {
  sectionName: "drugs",
  placeholder: "Add a Drug",
};

export default Autocomplete;
