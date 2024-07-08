import {Order} from 'blockly/javascript';

export const forBlock = Object.create(null);

forBlock['add_text'] = function (block, generator) {
  const font = block.getFieldValue('FONT');
  const size = block.getFieldValue('SIZE');
  const text = block.getFieldValue('TEXT');
  
  const code = `client.addtext('${font}', ${size}, '${text.replace(
    "'",
    "\\'"
  )}')\n`;
  return code;
}
forBlock['add_image'] = function (block, generator) {
  const image = block.getFieldValue('IMAGE');
  const desc = block.getFieldValue('DESC');
  const size = block.getFieldValue('SIZE');
  const code = `client.addimage('${image.replace(
    "'",
    "\\'"
  )}', '${desc.replace(
    "'",
    "\\'"
  )}', ${size})\n`;
  return code;
}
forBlock['add_named_text'] = function (block, generator) {
  const font = block.getFieldValue('FONT');
  const size = block.getFieldValue('SIZE');
  const text = block.getFieldValue('TEXT');
  const name = block.getFieldValue('NAME');
  
  const code = `client.addnamedtext('${font}', ${size}, '${text.replace(
    "'",
    "\\'"
  )}', '${name.replace(
    "'",
    "\\'"
  )}')\n`;
  return code;
}
forBlock['modify_text_of_named_text'] = function (block, generator) {
  const name = block.getFieldValue('NAME');
  const text = generator.valueToCode(block, 'TEXT', Order.ATOMIC);

  const code = `client.mtont('${name.replace(
    "'",
    "\\'"
  )}', String(${text != '' ? text : '\'\''}))\n`
  return code
}
forBlock['modify_font_of_named_text'] = function (block, generator) {
  const name = block.getFieldValue('NAME');
  const font = block.getFieldValue('FONT');

  const code = `client.mfont('${name.replace(
    "'",
    "\\'"
  )}', '${font}')\n`
  return code
}
forBlock['modify_size_of_named_text'] = function (block, generator) {
  const name = block.getFieldValue('NAME');
  const size = block.getFieldValue('SIZE');

  const code = `client.msont('${name.replace(
    "'",
    "\\'"
  )}', '${size}')\n`
  return code
}
forBlock['text_of_named_text'] = function (block, generator) {
  const name = block.getFieldValue('NAME');
  if (document.getElementById('tname-'+name) == null) return ['\'\'', Order.NONE];
  const code = `client.gtont('${name}')`;
  return [code, Order.NONE]
}
forBlock['size_of_named_text'] = function (block, generator) {
  const name = block.getFieldValue('NAME');
  if (document.getElementById('tname-'+name) == null) return ['0', Order.NONE];
  const code = `client.gsont('${name}')`;
  return [code, Order.NONE]
}
forBlock['font_of_named_text'] = function (block, generator) {
  const name = block.getFieldValue('NAME');
  if (document.getElementById('tname-'+name) == null) return ['\'\'', Order.NONE];
  const code = `client.gfont('${name}')`;
  return [code, Order.NONE]
}
forBlock['delete_named_text'] = function (block, generator) {
  const name = block.getFieldValue('NAME');
  if (document.getElementById('tname-' + name) == null) return '';
  const code = `client.delete('${name}');\n`;
  return code;
};
forBlock['add_named_image'] = function (block, generator) {
  const name = block.getFieldValue('NAME');
  const image = block.getFieldValue('IMAGE');
  const desc = block.getFieldValue('DESC');
  const size = block.getFieldValue('SIZE');
  const code = `client.addnamedimage('${image.replace(
    "'",
    "\\'"
  )}', '${desc.replace(
    "'",
    "\\'"
  )}', ${size}, '${name.replace(
    "'",
    "\\'"
  )}')\n`;
  return code;
}
forBlock['modify_image_of_named_image'] = function (block, generator) {
  const name = block.getFieldValue('NAME');
  const image = block.getFieldValue('IMAGE');

  const code = `client.mioni('${name.replace(
    "'",
    "\\'"
  )}', '${image.replace(
    "'",
    "\\'"
  )}')\n`
  return code
}
forBlock['modify_desc_of_named_image'] = function (block, generator) {
  const name = block.getFieldValue('NAME');
  const desc = block.getFieldValue('DESC');

  const code = `client.mdoni('${name.replace(
    "'",
    "\\'"
  )}', '${desc.replace(
    "'",
    "\\'"
  )}')\n`
  return code
}
forBlock['modify_size_of_named_image'] = function (block, generator) {
  const name = block.getFieldValue('NAME');
  const size = block.getFieldValue('SIZE');

  const code = `client.msoni('${name.replace(
    "'",
    "\\'"
  )}', ${size})\n`
  return code
}
forBlock['delete_named_image'] = function (block, generator) {
  const name = block.getFieldValue('NAME');
  if (document.getElementById('iname-' + name) == null) return '';
  const code = `client.idelete('${name}');\n`;
  return code;
};
forBlock['on_start'] = function (block, generator) {
  const code2 = generator.statementToCode(block, 'CODE');
  const random = Math.floor(Math.random() * 1000000);
  const code = `function start${random}() {\n${code2}}\nclient.startlist(start${random})\n`;
  return code;
}
forBlock['custom_script'] = function (block, generator) {
  const code2 = block.getFieldValue('CODE');
  const ready = block.getFieldValue('READY');
  if (ready == "FALSE") return '';
  const code = `${code2}\n`;
  return code;
}
forBlock['add_canvas'] = function (block, generator) {
  const name = block.getFieldValue('NAME');
  const width = block.getFieldValue('WIDTH');
  const height = block.getFieldValue('HEIGHT');

  const code = `client.addcanvas('${name.replace(
    "'",
    "\\'"
  )}', ${width}, ${height})\n`;
  return code;
}
forBlock['modify_size_of_canvas'] = function (block, generator) {
  const name = block.getFieldValue('NAME');
  const width = block.getFieldValue('WIDTH');
  const height = block.getFieldValue('HEIGHT');

  const code = `client.msic('${name.replace(
    "'",
    "\\'"
  )}', ${width}, ${height})\n`;
  return code;
}
forBlock['delete_canvas'] = function (block, generator) {
  const name = block.getFieldValue('NAME');
  if (document.getElementById('cname-' + name) == null) return '';
  const code = `client.cdelete('${name}');\n`;
  return code;
};
forBlock['set_line_size'] = function (block, generator) {
  const name = block.getFieldValue('NAME');
  const size = block.getFieldValue('SIZE');

  const code = `client.sls('${name.replace(
    "'",
    "\\'"
  )}', ${size})\n`;
  return code;
}
forBlock['set_line_color'] = function (block, generator) {
  const name = block.getFieldValue('NAME');
  const color = block.getFieldValue('COLOR');

  const code = `client.slc('${name.replace(
    "'",
    "\\'"
  )}', '${color}')\n`;
  return code;
}
forBlock['line_size'] = function (block, generator) {
  const name = block.getFieldValue('NAME');
  if (document.getElementById('cname-'+name) == null) return ['\'\'', Order.NONE];
  const code = `client.ls('${name.replace(
    "'",
    "\\'"
  )}')`;
  return [code, Order.NONE]
}
forBlock['draw_line'] = function (block, generator) {
  const name = block.getFieldValue('NAME');
  const x1 = block.getFieldValue('X1');
  const y1 = block.getFieldValue('Y1');
  const x2 = block.getFieldValue('X2');
  const y2 = block.getFieldValue('Y2');

  const code = `client.dl('${name.replace(
    "'",
    "\\'"
  )}', ${x1}, ${y1}, ${x2}, ${y2})\n`;
  return code;
}