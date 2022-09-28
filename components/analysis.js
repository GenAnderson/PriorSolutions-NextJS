import classes from "./analysis.module.css";

function AnalysisSection() {
  return (
    <div class={classes.middleContainer}>
      <div class={classes.analysisSection}>
        <img
          src="images/analysis.jpg"
          className={classes.photoAnalysis}
          alt="computer chip"
        />
        <div className={classes.analysisTextbox}>
          <div className={classes.sectionHeader}>AI Analysis</div>
          <ul className={classes.analysisList}>
            <li>
              <img src="/images/ani-sale.gif" className={classes.gifIcon} />
              Sales trends
            </li>
            <li>
              <img src="/images/ani-cost.gif" className={classes.gifIcon} />
              Cost trends
            </li>
            <li>
              <img src="/images/ani-kpi.gif" className={classes.gifIcon} />
              Monitor general and custom KPIs trends
            </li>
            <li>
              <img src="/images/ani-notify.gif" className={classes.gifIcon} />
              Notify you if general ledger accounts are out of balance
            </li>
            <li>
              <img src="/images/ani-inspect.gif" className={classes.gifIcon} />
              Check for large changes that may warrant further inspection
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AnalysisSection;
