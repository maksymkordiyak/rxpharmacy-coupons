import React, {Component} from "react";
import {
  Animated,
  Easing,
  FlatList,
  Linking,
  Modal,
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
} from "react-native";
import {bool, func} from "prop-types";
import {colors} from "../../constants/Colors";
import {
  MENU_ANIMATION,
  MENU_ANIMATION_DURATION,
  PADDING_TOP,
} from "../../constants/Layout";
import {IconButton} from "../Button";
import {TabBarContent} from "../TabBarIcon/index";
import {isIos} from "../../utils/common";

import {HelveticaMediumText} from "../StyledText";

export class Menu extends Component {
  componentWillMount() {
    const {opened} = this.props;
    this.animatedHeight = new Animated.Value(0);
    this.animatedOpacity = new Animated.Value(0);
    this.isOpened = false;
    if (opened) {
      this.isOpened = opened;
      this._onToggle();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.opened !== prevProps.opened) {
      this._onToggle();
    }
  }

  _onToggle = () => {
    const {opened} = this.props;
    const initialHeight = opened ? -MENU_ANIMATION : 0;
    const finalHeight = opened ? 0 : -MENU_ANIMATION;
    this.animatedHeight.setValue(initialHeight);
    const initialOpacity = opened ? 0 : 1;
    const finalOpacity = opened ? 1 : 0;
    this.animatedOpacity.setValue(initialOpacity);
    Animated.timing(this.animatedHeight, {
      toValue: finalHeight,
      duration: MENU_ANIMATION_DURATION,
      easing: Easing.bezier(0, 1, 0.6, 1),
    }).start();
    Animated.timing(this.animatedOpacity, {
      toValue: finalOpacity,
      duration: MENU_ANIMATION_DURATION,
      easing: Easing.bezier(0, 1, 0.6, 1),
    }).start();
  };

  render() {
    const {hideMenu, opened} = this.props;
    const animatedStyle = {
      transform: [{translateY: this.animatedHeight}],
      paddingTop: PADDING_TOP,
      opacity: this.animatedOpacity,
    };

    return (
      <Modal
        animationType="fade"
        transparent
        visible={opened}
        onRequestClose={() => hideMenu()}
      >
        <TouchableHighlight style={styles.overlay} onPress={() => hideMenu()}>
          <Animated.View style={[styles.container, animatedStyle]}>
            <View style={styles.header}>
              <IconButton
                onClick={() => hideMenu()}
                name="three-bars"
                size={32}
                iconSet="Octicons"
                style={styles.menuIcon}
              />
              <HelveticaMediumText style={styles.headerText}>
                MENU
              </HelveticaMediumText>
            </View>
            <FlatList
              style={styles.list}
              data={[
                {
                  key: "option1",
                  text: "Instant Savings Option",
                  image: require("../../assets/images/tab1_inactive.png"),
                },
                {
                  key: "option2",
                  text: "Super Savings",
                  image: require("../../assets/images/tab2_inactive.png"),
                },
                {
                  key: "option3",
                  text: "About",
                  image: require("../../assets/images/tab2_inactive.png"),
                },
              ]}
              renderItem={({item}) => (
                <TabBarContent
                  key={item.text}
                  image={item.image}
                  text={item.text}
                  style={styles.menuItem}
                  textStyle={styles.menuItemText}
                  onClick={() => console.log(`${item.text} PRESSED`)}
                />
              )}
            />
            <View style={styles.linskArea}>
              <Text
                style={styles.link}
                onPress={() => Linking.openURL("https://www.google.com")}
              >
                Usage Agreement
              </Text>
              <Text
                style={styles.link}
                onPress={() => Linking.openURL("https://www.google.com")}
              >
                Hippa Privacy Rights & Practices
              </Text>
            </View>
          </Animated.View>
        </TouchableHighlight>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: colors.bgWhiteVeil,
    width: "100%",
    flex: 1,
    position: "relative",
    zIndex: 2,
  },
  container: {
    position: "relative",
    width: "100%",
    overflow: "hidden",
    top: 0,
    left: 0,
    borderBottomColor: colors.primary,
    borderBottomWidth: 3,
    backgroundColor: colors.primary,
    zIndex: 10,
  },
  header: {
    marginTop: 3.8,
    paddingHorizontal: 10,
    height: 43.7,
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  headerText: {
    paddingTop: isIos ? 9 : -1,
    paddingLeft: 20,
    fontSize: 22,
    lineHeight: 30,
    letterSpacing: -0.65,
    color: colors.textPrimary,
  },
  menuIcon: {
    marginRight: 0,
  },
  list: {
    paddingVertical: 20,
    backgroundColor: colors.bgPrimary,
  },
  menuItem: {
    justifyContent: "flex-start",
    minHeight: 40,
    paddingHorizontal: 16,
  },
  menuItemText: {
    fontSize: 22,
    marginLeft: 15,
  },
  linskArea: {
    backgroundColor: colors.tintColor,
    paddingTop: 4,
    paddingBottom: 12,
  },
  link: {
    fontSize: 18,
    textAlign: "center",
    color: colors.textBasic,
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: colors.textBasic,
    padding: 10,
  },
});

Menu.propTypes = {
  opened: bool.isRequired,
  hideMenu: func.isRequired,
};

export default Menu;
