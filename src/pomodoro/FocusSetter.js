//Component for setting the focus duration

import React from "react";
import { minutesToDuration } from "../utils/duration";

function FocusSetter({
  focusDuration,
  handleFocusDecrease,
  session,
  minFocus,
  handleFocusIncrease,
  maxFocus
}) {
  return (
    <div className="col">
    <div className="input-group input-group-lg mb-2">
      <span className="input-group-text" data-testid="duration-focus">
        Focus Duration: {minutesToDuration(focusDuration)}
      </span>
      <div className="input-group-append">
        <button
          type="button"
          className="btn btn-secondary"
          data-testid="decrease-focus"
          onClick={handleFocusDecrease}
          disabled={session || focusDuration === minFocus}
        >
          <span className="oi oi-minus" />
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          data-testid="increase-focus"
          onClick={handleFocusIncrease}
          disabled={session || focusDuration === maxFocus}
        >
          <span className="oi oi-plus" />
        </button>
      </div>
    </div>
    </div>
  );
}

export default FocusSetter;
