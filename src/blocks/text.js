/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Blockly from 'blockly/core';

// Create a custom block called 'add_text' that adds
// text to the output div on the sample app.
// This is just an example and you should replace this with your
// own custom blocks.
const addText = {
  type: 'add_text',
  message0: 'Add text %1 %2 %3',
  args0: [
    {
      type: 'field_dropdown',
      name: 'FONT',
      options: [
        ['Arial', 'ARIAL'],
        ['Comic Sans MS', 'COMICSANS'],
        ['Monospace', 'MONOSPACE'],
      ],
    },
    {
      type: 'field_number',
      name: 'SIZE',
      value: 16,
    },
    {
      type: 'field_input',
      name: 'TEXT',
      text: 'Hello World',
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 315,
  tooltip: '',
  helpUrl: '',
};

// Create the block definitions for the JSON-only blocks.
// This does not register their definitions with Blockly.
// This file has no side effects!
export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray([
  addText,
]);
