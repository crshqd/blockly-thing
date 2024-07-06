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
  const text = block.getFieldValue('TEXT');

  const code = `client.mtont('${name.replace(
    "'",
    "\\'"
  )}', '${text.replace(
    "'",
    "\\'"
  )}')`
  return code
}

forBlock['modify_font_of_named_text'] = function (block, generator) {
  const name = block.getFieldValue('NAME');
  const font = block.getFieldValue('FONT');

  const code = `client.mfont('${name.replace(
    "'",
    "\\'"
  )}', '${font}')`
  return code
}

forBlock['modify_size_of_named_text'] = function (block, generator) {
  const name = block.getFieldValue('NAME');
  const size = block.getFieldValue('SIZE');

  const code = `client.msont('${name.replace(
    "'",
    "\\'"
  )}', '${size}')`
  return code
}