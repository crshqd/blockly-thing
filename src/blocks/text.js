import * as Blockly from 'blockly/core';

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
    message0: "Add image %1 %2 %3% size",
    args0: [
      {
        type: "field_input",
        name: "IMAGE",
        text: "https://www.icegif.com/wp-content/uploads/2023/09/icegif-140.gif"
      },
      {
        type: "field_input",
        name: "DESC",
        text: "Sussy"
      },
      {
        type: "field_number",
        name: "SIZE",
        value: 80,
        min: 0,
        max: 100
      }
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 315
  },
  {
    "type": "add_named_text",
    "tooltip": "Adds a named text onto the page.",
    "helpUrl": "",
    "message0": "Add named text %1 %2 %3 %4",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "FONT",
        "options": [
          [
            "Arial",
            "ARIAL"
          ],
          [
            "Comic Sans MS",
            "COMICSANS"
          ],
          [
            "Monospace",
            "MONOSPACE"
          ]
        ]
      },
      {
        "type": "field_number",
        "name": "SIZE",
        "value": 16
      },
      {
        "type": "field_input",
        "name": "NAME",
        "text": "name"
      },
      {
        "type": "field_input",
        "name": "TEXT",
        "text": "Hello World"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 315
  }
];

export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray(entries);
