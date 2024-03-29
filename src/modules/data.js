// My game: Afg Survivers
// My game id: Z7iKCEhy4GHS8SXWJPqr

import generateScores from './score.js';

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Z7iKCEhy4GHS8SXWJPqr/scores/';

export const fetchData = async () => {
  const response = await fetch(url);
  const json = await response.json();

  const sorted = json.result.sort((a, b) => {
    let ret;
    if (parseInt(a.score, 10) > parseInt(b.score, 10)) {
      ret = -1;
    } else if (parseInt(a.score, 10) < parseInt(b.score, 10)) {
      ret = 1;
    } else {
      ret = 0;
    }
    return ret;
  });

  generateScores(sorted);
};

export const postData = (_name, _score) => {
  fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      user: _name,
      score: _score,
    }),
    headers: {
      'Content-type': 'application/json',
    },
  });
};