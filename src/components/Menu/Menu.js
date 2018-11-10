import React, {Component} from "react";
import {
  Animated,
  Easing,
  FlatList,
  Modal,
  StyleSheet,
  View,
} from "react-native";
import {bool, func} from "prop-types";
import {colors} from "../../constants/Colors";
import {MENU_ANIMATION} from "../../constants/Layout";
import {IconButton} from "../Button";
import {TabBarContent} from "../TabBarIcon/index";
import {isIos, isX} from "../../utils/common";
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
      duration: 300,
      easing: Easing.linear,
    }).start();
    Animated.timing(this.animatedOpacity, {
      toValue: finalOpacity,
      duration: 300,
      easing: Easing.linear,
    }).start();
  };

  render() {
    const {hideMenu, opened} = this.props;
    // if (!opened) {
    //   setTimeout(() => {
    //     this.isOpened = opened;
    //   }, 300);
    // }
    const animatedStyle = {
      transform: [{translateY: this.animatedHeight}],
      paddingTop: (isIos && ((isX && 40) || 20)) || 0,
      opacity: this.animatedOpacity,
    };

    return (
      <Modal
        animationType="fade"
        transparent
        visible={opened}
        onRequestClose={() => hideMenu()}
      >
        <View style={styles.overlay} />
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
        </Animated.View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    overflow: "hidden",
    top: 0,
    left: 0,
    borderBottomColor: colors.primary,
    borderBottomWidth: 3,
    backgroundColor: colors.primary,
  },
  overlay: {
    backgroundColor: colors.bgPrimary,
    opacity: 0.6,
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: "100%",
    flex: 1,
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
    paddingTop: 9,
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
});

Menu.propTypes = {
  opened: bool.isRequired,
  hideMenu: func.isRequired,
};

export default Menu;
