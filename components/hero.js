import classes from "./hero.module.css";

function Hero() {
  return (
    <div className={classes.heroMain}>
      <img src="/images/hero.jpg" className={classes.heroImg} alt="water" />
      <div className={classes.heroText}>
        <h1>Let us handle your finances</h1>
        <h2>so you can stay focused on doing what you do best</h2>
        <br />
        <p>
          <em>
            A small ripple can create positive change throughout your company
          </em>
        </p>
      </div>
    </div>
  );
}

export default Hero;
