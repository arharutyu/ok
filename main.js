// main.js
import './style.css';
import { handleButtonClick } from './button';

document.querySelector('#app').innerHTML = `
  <div>
    <div class="card">
      <button type="button">Click Me!</button>
    </div>
  </div>
`;

// Call the handleButtonClick function
handleButtonClick();
