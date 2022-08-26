import { useState } from "react";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import classes from "./Layout.module.css";

const Layout = (props) => {
  let [showSideDrawer, setShowSideDrawer] = useState(true);
  const sideDrawerClosedHandler = () => setShowSideDrawer(false);
  const sideDrawerToggleHandler = () => {
    showSideDrawer = !showSideDrawer;
    setShowSideDrawer(showSideDrawer);
  };
  return (
    <>
      <Toolbar drawerToggleClicked={sideDrawerToggleHandler} />
      <SideDrawer open={showSideDrawer} closed={sideDrawerClosedHandler} />
      <main className={classes.Content}>{props.children}</main>
    </>
  );
};

export default Layout;
