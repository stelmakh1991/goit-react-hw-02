import s from './Options.module.css';

export const Options = ({
  updateFeedback,
  resetFeedback,
  totalFeedbackCount,
}) => {
  return (
    <div className={s.buttonsFeedbackContainer}>
      <button
        className={s.buttonFeedback}
        onClick={() => updateFeedback('good')}
      >
        Good
      </button>
      <button
        className={s.buttonFeedback}
        onClick={() => updateFeedback('neutral')}
      >
        Neutral
      </button>
      <button
        className={s.buttonFeedback}
        onClick={() => updateFeedback('bad')}
      >
        Bad
      </button>
      {!!totalFeedbackCount && (
        <button className={s.buttonFeedback} onClick={resetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;