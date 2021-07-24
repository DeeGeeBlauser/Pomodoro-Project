//Component that shows the status of the current session.
//Rendering is conditional based on if there is indeed a current
//session.
//The Progress Bar component is housed inside this component.

import React from "react";
import ProgressBar from "./ProgressBar";
import { minutesToDuration, secondsToDuration } from "../utils/duration";

function Session({ session, focusDuration, breakDuration }) {
  const duration =
    session?.label === "Focusing" ? focusDuration : breakDuration;
  const totalTime = duration * 60;

  return (
    session && (
      <div>
        {/* DONE?: This area should show only when there is an active focus or break - i.e. the session is running or is paused */}
        <div className="row mb-2">
          <div className="col">
            {/* DONE?: Update message below to include current session (Focusing or On Break) total duration */}
            <h2 data-testid="session-title">
              {session.label} for {minutesToDuration(duration)} minutes
            </h2>
            {/* DONE?: Update message below correctly format the time remaining in the current session */}
            <p className="lead" data-testid="session-sub-title">
              {secondsToDuration(session.timeRemaining)} remaining
            </p>
          </div>
        </div>
        <ProgressBar
          currentTime={Math.abs(session.timeRemaining - totalTime)}
          totalTime={totalTime}
        />
      </div>
    )
  );
}

export default Session;
