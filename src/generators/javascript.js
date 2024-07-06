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