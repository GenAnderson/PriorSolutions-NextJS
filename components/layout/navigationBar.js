import Link from "next/link";
import classes from "./navigationBar.module.css";

function NavigationBar() {
  return (
    <div>
      <ul className={classes.navMenu}>
        <li>
          <Link href="/Services">Services</Link>
        </li>
        <li>
          <Link href="/About">About Us</Link>
        </li>
        <li>
          <Link href="/">
            <img
              src="/images/navlogo.png"
              className={classes.navLogo}
              alt="Prior Solutions Logo"
            />
          </Link>
        </li>
        <li>
          <Link href="/Resources">Resources</Link>
        </li>
        <li>
          <Link href="/login">
            <button className={classes.loginBtn}>Log-in</button>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavigationBar;
