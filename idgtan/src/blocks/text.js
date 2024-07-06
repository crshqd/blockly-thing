// block_definition.js

import * as Blockly from 'blockly/core';

const registerBlocks = () => {
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
  ];

  Blockly.defineBlocksWithJsonArray(entries);
};

export { registerBlocks };
