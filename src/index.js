// @flow strict
import { render, h } from 'preact';
import { createCompass } from '@astral-atlas/compass'
import { createHTTPClientFromFetch } from '@lukekaalim/http-client';

import { Expedition } from './components/expedition';

const main = async () => {
  const httpClient = createHTTPClientFromFetch(fetch, Headers);
  const compass = createCompass('http://api.tome.1d9.tech', httpClient);

  const sessionsResult = await compass.session.getSessions();
  if (sessionsResult.type === 'failure')
    return render(<pre>{JSON.stringify(sessionsResult.failure, null, 3)}</pre>, document.body);
  render(<Expedition sessions={sessionsResult.success} />, document.body);
};

main();