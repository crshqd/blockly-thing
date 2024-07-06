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
const entries = [
  {
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
  },
  {
    type: "add_image",
    tooltip: "Adds a image onto the screen.",
    helpUrl: "",
    message0: "Add image %1 %2",
    args0: [
      {
        type: "field_input",
        name: "IMAGE",
        text: "data:image/png;base64,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"
      },
      {
        type: "field_input",
        name: "DESC",
        text: "Sussy"
      }
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 315
  }
];

// Create the block definitions for the JSON-only blocks.
// This does not register their definitions with Blockly.
// This file has no side effects!
export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray(entries);
