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
import {MENU_HEIGHT} from "../../constants/Layout";
import {IconButton} from "../Button";
import {TabBarContent} from "../TabBarIcon/index";
import {isIos, isX} from "../../utils/common";
import {HelveticaMediumText} from "../StyledText";

export class Menu extends Component {
  componentWillMount() {
    const {collapsed} = this.props;
    this.animatedHeight = new Animated.Value(0);
    this.animatedOpacity = new Animated.Value(0);
    if (collapsed) {
      this._onToggle();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.collapsed !== prevProps.collapsed) {
      this._onToggle();
    }
  }

  _onToggle = () => {
    const {collapsed} = this.props;
    const initialHeight = collapsed ? 0 : MENU_HEIGHT;
    const finalHeight = collapsed ? MENU_HEIGHT : 0;
    this.animatedHeight.setValue(initialHeight);
    const initialOpacity = collapsed ? 0 : 1;
    const finalOpacity = collapsed ? 1 : 0;
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
    const {hideMenu, collapsed} = this.props;
    const animatedStyle = {
      maxHeight: this.animatedHeight,
      // transform: [
      //   {translateY: this.animatedHeight } // this would be the result of the animation code below and is just a number.
      // ],
      height: this.animatedHeight,
      paddingTop: (isIos && ((isX && 40) || 20)) || 0,
      opacity: this.animatedOpacity,
    };

    return (
      <Modal
        animationType="none"
        transparent
        visible={collapsed}
        onRequestClose={() => hideMenu()}
      >
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
    maxHeight: 0,
    height: 0,
    overflow: "hidden",
    top: 0,
    left: 0,
    borderBottomColor: colors.primary,
    borderBottomWidth: 3,
    backgroundColor: colors.primary,
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
  collapsed: bool.isRequired,
  hideMenu: func.isRequired,
};

export default Menu;
