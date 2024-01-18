function changeMode(size, weight, transform, background, color) {
  return function () {
    document.body.style.fontSize = size;
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
  };
}

function main() {
  const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
  const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
  const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

  const newParagraph = document.createElement('p');
  newParagraph.textContent = 'Welcome Holberton !';
  document.body.appendChild(newParagraph);

  const spookyButton = document.createElement('button');
  spookyButton.textContent = 'Spooky';
  const darkButton = document.createElement('button');
  darkButton.textContent = 'Dark mode';
  const screamButton = document.createElement('button');
  screamButton.textContent = 'Scream';
  document.body.appendChild(spookyButton);
  document.body.appendChild(darkButton);
  document.body.appendChild(screamButton);

  spookyButton.addEventListener('click', () => {
    spooky();
  });
  darkButton.addEventListener('click', () => {
    darkMode();
  });
  screamButton.addEventListener('click', () => {
    screamMode();
  });
}
main();
