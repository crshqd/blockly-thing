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
    tooltip: "",
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
    "tooltip": "",
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
  },
  {
    "type": "modify_text_of_named_text",
    "tooltip": "",
    "helpUrl": "",
    "message0": "Modify text of named text %1 %2",
    "args0": [
      {
        "type": "field_input",
        "name": "NAME",
        "text": "name"
      },
      {
        "type": "input_value",
        "name": "TEXT"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 315
  },
  {
    "type": "modify_font_of_named_text",
    "tooltip": "",
    "helpUrl": "",
    "message0": "Modify font of named text %1 %2",
    "args0": [
      {
        "type": "field_input",
        "name": "NAME",
        "text": "name"
      },
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
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 315
  },
  {
    "type": "modify_size_of_named_text",
    "tooltip": "",
    "helpUrl": "",
    "message0": "Modify size of named text %1 %2",
    "args0": [
      {
        "type": "field_input",
        "name": "NAME",
        "text": "name"
      },
      {
        "type": "field_number",
        "name": "SIZE",
        "value": 16
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 315
  },
  {
    "type": "text_of_named_text",
    "tooltip": "",
    "helpUrl": "",
    "message0": "Text of named text %1",
    "args0": [
      {
        "type": "field_input",
        "name": "NAME",
        "text": "name"
      }
    ],
    "output": "String",
    "colour": 315
  },
  {
    "type": "size_of_named_text",
    "tooltip": "",
    "helpUrl": "",
    "message0": "Size of named text %1",
    "args0": [
      {
        "type": "field_input",
        "name": "NAME",
        "text": "name"
      }
    ],
    "output": "Number",
    "colour": 315
  },
  {
    "type": "font_of_named_text",
    "tooltip": "",
    "helpUrl": "",
    "message0": "Font of named text %1",
    "args0": [
      {
        "type": "field_input",
        "name": "NAME",
        "text": "name"
      }
    ],
    "output": "String",
    "colour": 315
  }, 
  {
    "type": "delete_named_text",
    "tooltip": "",
    "helpUrl": "",
    "message0": "Delete named text %1",
    "args0": [
      {
        "type": "field_input",
        "name": "NAME",
        "text": "name"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 315
  },
  {
    "type": "add_named_image",
    "tooltip": "",
    "helpUrl": "",
    "message0": "Add named image %1 %2 %3 %4 % size",
    "args0": [
      {
        "type": "field_input",
        "name": "NAME",
        "text": "name"
      },
      {
        "type": "field_input",
        "name": "IMAGE",
        "text": "https://www.icegif.com/wp-content/uploads/2023/09/icegif-140.gif"
      },
      {
        "type": "field_input",
        "name": "DESC",
        "text": "Sussy"
      },
      {
        "type": "field_number",
        "name": "SIZE",
        "value": 100,
        "min": 0,
        "max": 100
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 315
  },
  {
    "type": "modify_image_of_named_image",
    "tooltip": "",
    "helpUrl": "",
    "message0": "Modify image of named image %1 %2",
    "args0": [
      {
        "type": "field_input",
        "name": "NAME",
        "text": "name"
      },
      {
        "type": "field_input",
        "name": "IMAGE",
        "text": "https://www.icegif.com/wp-content/uploads/2023/09/icegif-140.gif"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 315
  },
  {
    "type": "modify_desc_of_named_image",
    "tooltip": "",
    "helpUrl": "",
    "message0": "Modify description of named image %1 %2",
    "args0": [
      {
        "type": "field_input",
        "name": "NAME",
        "text": "name"
      },
      {
        "type": "field_input",
        "name": "DESC",
        "text": "Sussy"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 315
  },
  {
    "type": "modify_size_of_named_image",
    "tooltip": "",
    "helpUrl": "",
    "message0": "Modify size of named image %1 %2",
    "args0": [
      {
        "type": "field_input",
        "name": "NAME",
        "text": "name"
      },
      {
        "type": "field_number",
        "name": "SIZE",
        "value": 80,
        "min": 0,
        "max": 100
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 315
  }, 
  {
    "type": "delete_named_image",
    "tooltip": "",
    "helpUrl": "",
    "message0": "Delete named image %1",
    "args0": [
      {
        "type": "field_input",
        "name": "NAME",
        "text": "name"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 315
  },
];

export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray(entries);
