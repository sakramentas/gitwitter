import { normaliseTwitterResponse } from '../normaliseTwitterResponse';
import mockData from './mock-data';

describe('normaliseTwitterResponse', () => {
  it('should normalise the response with relevant data', () => {
    const normalisedRes = normaliseTwitterResponse(mockData);
    const expectedNormalisedRes = [
      {
        id: 1117390028601266200,
        text:
          'RT @node_developer: Reactive programming in Node.js with RxJS\n\n☞ https://t.co/ogRh0naTcw\n\n#nodejs #javascript https://t.co/Z8QtYa8S2H',
        user: { userName: undefined, nickName: undefined, followers: undefined },
        createdAt: 'Sun Apr 14 11:31:57 +0000 2019',
      },
      {
        id: 1117389955570065400,
        text:
          'RT @nodejs_npmm: Reactive programming in Node.js with RxJS\n\n☞ https://t.co/DXrwNLgypm\n\n#nodejs #javascript https://t.co/uXL0o0RWpG',
        user: { userName: undefined, nickName: undefined, followers: undefined },
        createdAt: 'Sun Apr 14 11:31:40 +0000 2019',
      },
      {
        id: 1117389337073737700,
        text:
          'Reactive programming in Node.js with RxJS\n\n☞ https://t.co/ogRh0naTcw\n\n#nodejs #javascript https://t.co/Z8QtYa8S2H',
        user: { userName: undefined, nickName: undefined, followers: undefined },
        createdAt: 'Sun Apr 14 11:29:12 +0000 2019',
      },
      {
        id: 1117388923280470000,
        text:
          'Reactive programming in Node.js with RxJS\n\n☞ https://t.co/DXrwNLgypm\n\n#nodejs #javascript https://t.co/uXL0o0RWpG',
        user: { userName: undefined, nickName: undefined, followers: undefined },
        createdAt: 'Sun Apr 14 11:27:34 +0000 2019',
      },
    ];

    expect(normalisedRes).toEqual(expectedNormalisedRes);
  });
});
