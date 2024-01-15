// button.js

export function handleButtonClick() {
  const button = document.querySelector('button');
  const card = document.querySelector('.card');

  button.addEventListener('click', () => {
    button.style.display = 'none';

    const h1 = document.createElement('h1');
    h1.textContent = 'Lulz';

    const image = document.createElement('img');
    image.src = '/ok.jpg'; 
    image.alt = 'Ok Image';

    card.appendChild(h1);
    card.appendChild(image);
  });
}
