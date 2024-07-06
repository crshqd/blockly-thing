import * as Blockly from 'blockly/core';
import { registerBlocks } from './block_definition';
import { registerGenerators } from './block_generator';
import { toolbox } from './toolbox'; // Assuming you have a separate toolbox file
import './index.css';
import * as client from './client';
import { javascriptGenerator } from 'blockly/javascript';

const codeDiv = document.getElementById('generatedCode').firstChild;
const outputDiv = document.getElementById('output');
const blocklyDiv = document.getElementById('blocklyDiv');

// Initialize Blockly
Blockly.inject(blocklyDiv, { toolbox });

// Register blocks and generators after Blockly is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  registerBlocks();
  registerGenerators();

  const ws = Blockly.getMainWorkspace();

  const runCode = () => {
    const code = javascriptGenerator.workspaceToCode(ws);
    codeDiv.innerText = code;
    outputDiv.innerHTML = '';
    const clientEval = new Function('client', code);
    clientEval(client);
  };

  ws.addChangeListener((e) => {
    if (e.isUiEvent || e.type == Blockly.Events.FINISHED_LOADING || ws.isDragging()) {
      return;
    }
    runCode();
  });

  runCode(); // Run code initially
});
