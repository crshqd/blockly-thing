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
client.gtont = function (name) {
  if (document.getElementById('tname-'+name) == null) return;
  return document.getElementById('tname-'+name).innerText;
}
client.gfont = function (name) {
  if (document.getElementById('tname-'+name) == null) return;
  if (document.getElementById('tname-'+name).style.fontFamily == '"Arial", sans-serif') {
    return "Arial"
  } else if (document.getElementById('tname-'+name).style.fontFamily == '"Comic Sans MS", cursive') {
    return "Comic Sans MS"
  } else if (document.getElementById('tname-'+name).style.fontFamily == 'monospace') {
    return "Monospace"
  } else {
    return "Arial"
  }
}
client.gsont = function (name) {
  if (document.getElementById('tname-'+name) == null) return;
  return document.getElementById('tname-'+name).style.fontSize.replace('pt', '');
}
client.delete = function (name) {
  if (document.getElementById('tname-'+name) == null) return;
  document.getElementById('tname-'+name).remove();
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
}
client.mioni = function (name, image) {
  if (document.getElementById('iname-'+name) == null) return;
  document.getElementById('iname-'+name).src = image;
}
client.mdoni = function (name, desc) {
  if (document.getElementById('iname-'+name) == null) return;
  document.getElementById('iname-'+name).alt = desc;
}
client.msoni = function (name, size) {
  if (document.getElementById('iname-'+name) == null) return;
  document.getElementById('iname-'+name).width = `${size*document.getElementById('iname-'+name).naturalWidth/100}`;
  document.getElementById('iname-'+name).height = `${size*document.getElementById('iname-'+name).naturalHeight/100}`;
}
client.idelete = function (name) {
  if (document.getElementById('iname-'+name) == null) return;
  document.getElementById('iname-'+name).remove();
}
client.startlist = function () {};
client.addcanvas = function (name, width, height) {
  const elem = document.createElement('canvas');
  const br = document.createElement('br');
  elem.id = 'cname-'+name;
  elem.width = width;
  elem.height = height;
  elem.style.border = '1px solid #000';
  document.getElementById('output').appendChild(elem);
  document.getElementById('output').appendChild(br);
}
client.msic = function (name, width, height) {
  if (document.getElementById('cname-'+name) == null) return;
  document.getElementById('cname-'+name).width = width;
  document.getElementById('cname-'+name).height = height;
}
client.cdelete = function (name) {
  if (document.getElementById('cname-'+name) == null) return;
  document.getElementById('cname-'+name).remove();
}
client.sls = function (name, size) {
  if (document.getElementById('cname-'+name) == null) return;
  const ctx = document.getElementById('cname-'+name).getContext('2d');
  ctx.lineWidth = size;
}
client.slc = function (name, color) {
  if (document.getElementById('cname-'+name) == null) return;
  const ctx = document.getElementById('cname-'+name).getContext('2d');
  ctx.strokeStyle = color;
}
client.ls = function (name) {
  if (document.getElementById('cname-'+name) == null) return;
  return document.getElementById('cname-'+name).getContext('2d').lineWidth;
}
client.dl = function (name, x1, y1, x2, y2) {
  if (document.getElementById('cname-'+name) == null) return;
  const ctx = document.getElementById('cname-'+name).getContext('2d');
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}
client.db = function (name, x1, y1, sizex, sizey) {
  if (document.getElementById('cname-'+name) == null) return;
  const ctx = document.getElementById('cname-'+name).getContext('2d');
  ctx.rect(x1, y1, sizex, sizey);
  ctx.stroke();
}
client.dc = function (name, x1, y1, size) {
  if (document.getElementById('cname-'+name) == null) return;
  const ctx = document.getElementById('cname-'+name).getContext('2d');
  ctx.arc(x1, y1, size, 0, 2 * Math.PI);
  ctx.stroke();
}
client.dt = function (name, x1, y1, fs, text) {
  if (document.getElementById('cname-'+name) == null) return;
  const ctx = document.getElementById('cname-'+name).getContext('2d');
  ctx.font = `${fs}pt Arial`;
  ctx.fillText(text, x1, y1);
}
module.exports = client;