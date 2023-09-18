import React from "react";
import styles from "./ResultsSummary.module.css";
import ReactionIcon from "../images/icon-reaction.svg";
import MemoryIcon from "../images/icon-memory.svg";
import VerbalIcon from "../images/icon-verbal.svg";
import VisualIcon from "../images/icon-visual.svg";

function ResultsSummary(props) {
	return (
		<div className={styles.container}>
			<div className={styles.scoreContainer}>
				<p>Your result</p>
				<div className={styles.score}>
					<h1>76</h1>
					<p>of 100</p>
				</div>
				<h3>Great</h3>
				<p className={styles.scoreDescription}>
					You scored higher than 65% of the people who have taken these tests
				</p>
			</div>
			<div className={styles.summaryContainer}>
				<div className={styles.summaryHeading}>
					<p>Summary</p>
				</div>
				<div className={styles.scoreCardReaction}>
					<img src={ReactionIcon} alt="reaction-icon" />
					<p className={styles.scoreCardText}>Reaction</p>
					<div className={styles.scoreCardScore}>
						<div className={styles.userScore}>
							<p>80</p>
						</div>
						<p>/ 100</p>
					</div>
				</div>
				<div className={styles.scoreCardMemory}>
					<img src={MemoryIcon} alt="memory-icon" />
					<p className={styles.scoreCardText}>Memory</p>
					<div className={styles.scoreCardScore}>
						<div className={styles.userScore}>
							<p>80</p>
						</div>
						<p>/ 100</p>
					</div>
				</div>
				<div className={styles.scoreCardVerbal}>
					<img src={VerbalIcon} alt="verbal-icon" />
					<p className={styles.scoreCardText}>Verbal</p>
					<div className={styles.scoreCardScore}>
						<div className={styles.userScore}>
							<p>80</p>
						</div>
						<p>/ 100</p>
					</div>
				</div>
				<div className={styles.scoreCardVisual}>
					<img src={VisualIcon} alt="visual-icon" />
					<p className={styles.scoreCardText}>Visual</p>
					<div className={styles.scoreCardScore}>
						<div className={styles.userScore}>
							<p>80</p>
						</div>
						<p>/ 100</p>
					</div>
				</div>
				<button>Continue</button>
			</div>
		</div>
	);
}

export default ResultsSummary;
