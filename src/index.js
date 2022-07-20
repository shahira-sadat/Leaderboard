import './style.css';
import data from './modules/data.js';
import generateScores from './modules/score.js';

// Generate scores
generateScores(data);

// Add a score
const container = document.querySelector('.form');
const inputName = document.querySelector('#input-name');
const inputScore = document.querySelector('#input-score');

container.onsubmit = (e) => {
  e.preventDefault();

  const name = inputName.value;
  const score = inputScore.value;
  data.push({ name, score });
  generateScores(data);
  inputName.value='';
  inputScore.value = '';
  
};

const refresh = document.querySelector('.refresh');
      refresh.addEventListener('click', () => {
        document.location.reload();
    });
