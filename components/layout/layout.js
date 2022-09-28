import { Fragment } from "react";
import NavigationBar from "./navigationBar";

function Layout(props) {
  return (
    <Fragment>
      <NavigationBar />
      <main>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
