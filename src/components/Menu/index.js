import {connect} from "react-redux";
import {hideMenu} from "../../actions/menu";
import Menu from "./Menu";

const mapStateToProps = state => ({
  collapsed: state.menu.showMenu,
});

const mapDispatchToProps = {
  hideMenu,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Menu);
