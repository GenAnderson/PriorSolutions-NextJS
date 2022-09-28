import classes from "./footer.module.css";

function FooterSection() {
  return (
    <div>
      <div className={classes.footerSection}>
        <div className={classes.footerGrid}>
          <div>
            <p>Company</p>
            <ul>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Use</a>
              </li>
            </ul>
          </div>
          <div>
            <p class="footer-subhead">New to Prior Solutions?</p>
            <ul>
              <li>
                <a href="#">What is it?</a>
              </li>
              <li>
                <a href="#">Why should I use it?</a>
              </li>
              <li>
                <a href="#">What are their services?</a>
              </li>
            </ul>
          </div>
          <div>
            <p>Connect</p>
            <ul>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
            </ul>
          </div>
          <div>
            <p>Extra column</p>
            <ul>
              <li>
                <a href="#">Lorem ipsum dolor.</a>
              </li>
              <li>
                <a href="#">sit amet consectetur</a>
              </li>
              <li>
                <a href="#">Quam pariatur</a>
              </li>
              <li>
                <a href="#">iste aliquam</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterSection;
