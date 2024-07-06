const client = {};
client.addtext = function (font, size, text) {
  const elem = document.createElement('span');
  const br = document.createElement('br');
  elem.style.fontSize = `${size}pt`;
  if (font == "ARIAL") {
    elem.style.fontFamily = '"Arial", sans-serif';
  } else if (font == "COMICSANS") {
    elem.style.fontFamily = '"Comic Sans MS", cursive';
  } else if (font == "MONOSPACE") {
    elem.style.fontFamily = 'monospace';
  } else {
    elem.style.fontFamily = '"Arial", sans-serif';
  }
  elem.innerText = text;
  document.getElementById('output').appendChild(elem);
  document.getElementById('output').appendChild(br);
  document.getElementById('pre').innerText = document.getElementById('output').innerHTML;
};
module.exports = client;