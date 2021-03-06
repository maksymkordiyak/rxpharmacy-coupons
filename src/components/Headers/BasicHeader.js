import React from "react";
import {connect} from "react-redux";
import {View} from "react-native";
import {styles} from "./styles";
import {IconButton} from "../Button/index";
import {HelveticaMediumText} from "../StyledText/index";
import {showMenu, hideMenu} from "../../actions/menu";

export const BasicHeader = ({openMenu, closeMenu, menuOpened, text}) => (
  <View style={styles.row}>
    <IconButton
      onClick={() => (menuOpened ? closeMenu() : openMenu())}
      name="three-bars"
      size={32}
      iconSet="Octicons"
      style={styles.menuIcon}
    />
    <HelveticaMediumText style={styles.basicHeaderText}>
      {text}
    </HelveticaMediumText>
  </View>
);

const mapStateToProps = state => ({
  menuOpened: state.menu.showMenu,
});

const mapDispatchToProps = {
  openMenu: showMenu,
  closeMenu: hideMenu,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BasicHeader);
