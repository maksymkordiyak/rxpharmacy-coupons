import React from "react";
import {connect} from "react-redux";
import {Image, View} from "react-native";
import {IconButton} from "../Button/index";
import {SerifText, SerifBoldText} from "../StyledText/index";
import {styles} from "./styles";
import {showMenu, hideMenu} from "../../actions/menu";

export const LogoTitle = ({openMenu, closeMenu, menuOpened}) => (
  <View style={styles.row}>
    <IconButton
      onClick={() => (menuOpened ? closeMenu() : openMenu())}
      name="three-bars"
      size={32}
      iconSet="Octicons"
      style={styles.menuIcon}
    />
    <Image
      source={require("../../assets/images/header_logo.png")}
      style={styles.headerLogo}
    />
    <SerifBoldText style={styles.pharmacyHeaderText}>Pharmacy</SerifBoldText>
    <SerifText style={styles.pharmacyHeaderText}>Coupons</SerifText>
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
)(LogoTitle);
