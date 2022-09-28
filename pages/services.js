import classes from "../styles/Home.module.css";
import ScrollingText from "../components/scrollingText";

function Services() {
  return (
    <div>
      <ScrollingText />

      <div className={classes.servicesSection}>
        <div className={classes.sectionHeader}>Services</div>
        <ul className={classes.serviceGrid}>
          <li>
            Financial Statements compilation (Balance Sheet, Income Statement,
            and Cash Flow Statement)
          </li>
          <li>
            Provide early warning indicators for negative budget variances &
            cash positions, cost overruns, and others
          </li>
          <li>Profit gain/fade analysis</li>
          <li>Cash flow forecasting</li>
          <li>
            Establish KPIs using industry standards or your own custom KPIs
          </li>
          <li>Working capital management</li>
          <li>Capital budget</li>
          <li>
            Budget variance analysis, on the project level and company wide
          </li>
          <li>Work in Progress (WIP) compilation</li>
          <li>
            Our platform will provide user access levels, so you decide who gets
            access to which reports
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Services;
