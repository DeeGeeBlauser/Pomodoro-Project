//component for setting the Break Duration

import React from "react";
import { minutesToDuration } from "../utils/duration";

function BreakSetter({
  breakDuration,
  handleBreakDecrease,
  session,
  minBreak,
  handleBreakIncrease,
  maxBreak,
}) {
  return (
    <div className="col">
      <div className="float-right">
        <div className="input-group input-group-lg mb-2">
          <span className="input-group-text" data-testid="duration-break">
            Break Duration: {minutesToDuration(breakDuration)}
          </span>
          <div className="input-group-append">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleBreakDecrease}
              disabled={session || breakDuration === minBreak}
              data-testid="decrease-break"
            >
              <span className="oi oi-minus" />
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              data-testid="increase-break"
              onClick={handleBreakIncrease}
              disabled={session || breakDuration === maxBreak}
            >
              <span className="oi oi-plus" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BreakSetter;
