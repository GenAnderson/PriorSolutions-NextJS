import classes from "./scrollingText.module.css";

function ScrollingText() {
  return (
    <div className={classes.scrollingFlexText}>
      <p className={classes.flexScroller}>
        <span>
          fast
          <br />
          automatic
          <br />
          simple
        </span>
      </p>
      <p className={classes.flexText}>
        solutions to your financial planning needs
      </p>
    </div>
  );
}

export default ScrollingText;
