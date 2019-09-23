// @flow strict
import { render, h } from 'preact';
import { createCompass } from '@astral-atlas/compass'
import { createHTTPClientFromFetch } from '@lukekaalim/http-client';

const main = async () => {
  const httpClient = createHTTPClientFromFetch(fetch, Headers);
  const compass = createCompass('http://api.tome.1d9.tech', httpClient);

  const sessions = await compass.session.getSessions();
  const sessionsContent = JSON.stringify(sessions, null, 3) || '';
  render(<pre>{sessionsContent}</pre>, document.body);
};

main();