import 'blockly/javascript';

export const forBlock = Object.create(null);

forBlock['add_text'] = function (block, generator) {
  const font = block.getFieldValue('FONT');
  const size = block.getFieldValue('SIZE');
  const text = block.getFieldValue('TEXT');
  // Generate the function call for this block.
  const code = `client.addtext('${font}', ${size}, '${text.replace(
    "'",
    "\\'"
  )}')\n`;
  return code;
};
Blockly.JavaScript['add_text'] = forBlock['add_text'];
