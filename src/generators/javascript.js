/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import {Order} from 'blockly/javascript';

// Export all the code generators for our custom blocks,
// but don't register them with Blockly yet.
// This file has no side effects!
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