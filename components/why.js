import classes from "./why.module.css";

function WhySection() {
  return (
    <div class={classes.whyContainer}>
      <div class={classes.whySection}>
        <div class={classes.sectionHeader}>Why Prior Solutions?</div>
        <div>
          <p>
            Our platform will provide your business with accurate and timely
            financial reports, KPIs, forecasting, trend analysis, and other
            finance features to help make your company more profitable.
          </p>
          <p>
            We want to help your company be forward thinking rather than
            reactive by providing solutions before there's a problem!
          </p>
          <p>
            <br />
            We will integrate our platform with your existing software so there
            is no expensive accounting software migration.
          </p>
          <p>
            <br />
            Our AI will perform trend analysis on your company and projects
            based on standard or custom KPIs.
          </p>
          <p>
            Alerts will be sent to your management team to mitigate damage as
            early as possible while also congratulating your team on positive
            trends.
            <br />
            It's important to celebrate the wins!
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhySection;
