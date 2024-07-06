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
client.addimage = function (url, desc, size) {
  const elem = document.createElement('img');
  const br = document.createElement('br');
  elem.src = url;
  elem.alt = desc;
  elem.width = `${size*elem.naturalWidth/100}`;
  elem.height = `${size*elem.naturalHeight/100}`;
  document.getElementById('output').appendChild(elem);
  document.getElementById('output').appendChild(br);
  document.getElementById('pre').innerText = document.getElementById('output').innerHTML;
}
client.addnamedtext = function (font, size, text, name) {
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
  elem.id = 'tname-'+name;
  document.getElementById('output').appendChild(elem);
  document.getElementById('output').appendChild(br);
  document.getElementById('pre').innerText = document.getElementById('output').innerHTML;
};
client.mtont = function (name, text) {
  if (document.getElementById('tname-'+name) == null) return;
  document.getElementById('tname-'+name).innerText = text;
}
client.mfont = function (name, font) {
  if (document.getElementById('tname-'+name) == null) return;
  if (font == "ARIAL") {
    document.getElementById('tname-'+name).style.fontFamily = '"Arial", sans-serif';
  } else if (font == "COMICSANS") {
    document.getElementById('tname-'+name).style.fontFamily = '"Comic Sans MS", cursive';
  } else if (font == "MONOSPACE") {
    document.getElementById('tname-'+name).style.fontFamily = 'monospace';
  } else {
    document.getElementById('tname-'+name).style.fontFamily = '"Arial", sans-serif';
  }
}
client.msont = function (name, size) {
  if (document.getElementById('tname-'+name) == null) return;
  document.getElementById('tname-'+name).style.fontSize = `${size}pt`;
}
client.addnamedimage = function (url, desc, size, name) {
  const elem = document.createElement('img');
  const br = document.createElement('br');
  elem.src = url;
  elem.alt = desc;
  elem.width = `${size*elem.naturalWidth/100}`;
  elem.height = `${size*elem.naturalHeight/100}`;
  elem.id = 'iname-'+name;
  document.getElementById('output').appendChild(elem);
  document.getElementById('output').appendChild(br);
  document.getElementById('pre').innerText = document.getElementById('output').innerHTML;
}
module.exports = client;