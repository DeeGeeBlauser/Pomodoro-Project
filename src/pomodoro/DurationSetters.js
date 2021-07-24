//Component that holds both duration setter components
//(Focus Setter and Break Setter)

import React from "react";
import FocusSetter from "./FocusSetter";
import BreakSetter from "./BreakSetter";

function DurationSetters({
  focusDuration,
  handleFocusDecrease,
  session,
  minFocus,
  handleFocusIncrease,
  maxFocus,
  breakDuration,
  handleBreakDecrease,
  minBreak,
  handleBreakIncrease,
  maxBreak,
}) {
  return (
    <div className="row">
      <FocusSetter
        focusDuration={focusDuration}
        handleFocusDecrease={handleFocusDecrease}
        session={session}
        minFocus={minFocus}
        handleFocusIncrease={handleFocusIncrease}
        maxFocus={maxFocus}
      />
      <BreakSetter
        breakDuration={breakDuration}
        handleBreakDecrease={handleBreakDecrease}
        session={session}
        minBreak={minBreak}
        handleBreakIncrease={handleBreakIncrease}
        maxBreak={maxBreak}
      />
    </div>
  );
}

export default DurationSetters;
