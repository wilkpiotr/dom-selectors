window.highlight = (element) => {
  element.style.background = 'black';
  element.style.color = 'white';
}

window.h = window.highlight;

window.toggleClass = (element, className) => {
  if (element.classList.contains(className)) {
    element.classList.remove(className);
  } else {
    element.classList.add(className);
  }
};

window.setPlayersStyle = () => {
  const players = document.querySelectorAll('li[data-type="player"]');
  const playersArr = Array.from(players);
  playersArr.forEach((el) => {
    el.style.background = 'green';
    el.style.color = 'white';
  });
}

window.setAliensStyle = () => {
  const aliens = document.querySelectorAll('li[data-type="alien"]');
  const aliensArr = Array.from(aliens);
  aliensArr.forEach((el) => {
    el.style.background = 'orange';
    el.style.color = 'red';
  });
}

window.setAllStyle = () => {
  window.setPlayersStyle();
  window.setAliensStyle();
}

window.setWantedBgColor = (type, background) => {
  const elements = document.querySelectorAll(`li[data-type='${type}']`);
  // const elements = document.querySelectorAll('li[data-type="' + type +'"]');
  const elementsArr = Array.from(elements);
  elementsArr.forEach((el) => {
el.style.background = background;
  });
}

window.pandominium = () => {
  window.setWantedBgColor('player', 'brown');
  window.setWantedBgColor('alien', 'black');
  window.setWantedBgColor('predator', 'green')
  window.setWantedBgColor('other', 'red')
}

cloneHeader = () => {
  const body = document.querySelector('body');
  const h1 = document.querySelector('h1');
  const hOne = h1.cloneNode(true);
  const hTwo = h1.cloneNode(true);
  const hThree = h1.cloneNode(true);
  const hFour = h1.cloneNode(true);
  body.insertBefore(hOne, h1)
  body.insertBefore(hTwo, h1)
  body.insertBefore(hThree, h1)
  body.insertBefore(hFour, h1)
}