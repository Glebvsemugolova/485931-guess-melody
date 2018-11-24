export const render = (template) => {
  const screen = document.createElement(`div`);
  screen.innerHTML = template.trim();
  return screen;
};

const mainElement = document.querySelector(`section.main`);

export const changeScreen = (screen) => {
  mainElement.innerHTML = ``;
  mainElement.appendChild(screen);
};

