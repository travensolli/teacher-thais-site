export const setText = (id, value) => {
  const element = document.getElementById(id);
  if (element) element.textContent = value;
};

export const setHref = (id, value) => {
  const element = document.getElementById(id);
  if (element) element.href = value;
};

export const createElementFromHTML = (html) => {
  const template = document.createElement('template');
  template.innerHTML = html.trim();
  return template.content.firstElementChild;
};
