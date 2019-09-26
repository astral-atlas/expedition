// @flow strict
import { h, Fragment } from 'preact';
/*::
import type { Session } from '@astral-atlas/contour';
type Props = {
  sessions: Array<Session>,
};
*/

export const Expedition = ({ sessions }/*: Props*/) => {
  const nextSession = sessions
    .sort((a, b) => a.startTime < b.startTime ? 1 : 0)
    .find(session => session.startTime > Date.now())

  if (!nextSession) {
    return (
      <Fragment>
        <h1>Next Session</h1>
        <p>Doesn't look like a next session has been set.</p>
        <p>Please contact your Dungeon Master to schedule one or,
        alternatively, update this page.</p>
      </Fragment>
    )
  }

  const options = {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
    hour: 'numeric', minute: 'numeric', 
  };
  const formattedDateString = new Intl.DateTimeFormat('en-US', options).format(new Date(nextSession.startTime));
  
  return (
    <div className="sessionPage">
      <h1 className="pageTitle">Next Session</h1>
      <h2 className="sessionTitle"> {nextSession.title} </h2>
      <p className="sessionDescription"><time> {formattedDateString}</time></p>
    </div>
  )
};
