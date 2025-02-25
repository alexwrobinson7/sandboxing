/**
 * JavaScriptExamples.js
 * 
 * Component that displays JavaScript code examples and demonstrations
 * This page showcases various JavaScript patterns, features, and best practices
 */

import React, { useState } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-javascript';

// Import custom components
import CodeBlock from '../../components/common/CodeBlock';
import CodeEditor from '../../components/common/CodeEditor';
import ExampleRunner from '../../components/common/ExampleRunner';
import TabContainer from '../../components/common/TabContainer';

// Import JavaScript examples
import {
  basicExample,
  es6FeaturesExample,
  asyncExample,
  reactHooksExample,
  algorithmExample,
  designPatternExample
} from '../../data/codeExamples/javascript';

/**
 * JavaScript Examples Component
 */
const JavaScriptExamples = () => {
  const [activeTab, setActiveTab] = useState('basics');
  const [editorCode, setEditorCode] = useState(basicExample.code);
  const [output, setOutput] = useState('');
  const [error, setError] = useState(null);

  /**
   * Run the JavaScript code in the editor
   */
  const runCode = () => {
    setError(null);
    setOutput('');
    
    try {
      // Create a safe environment to execute the code
      const executeCode = new Function(`
        try {
          // Capture console.log output
          const logs = [];
          const originalConsoleLog = console.log;
          console.log = (...args) => {
            logs.push(args.map(arg => 
              typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
            ).join(' '));
            originalConsoleLog(...args);
          };
          
          // Execute the code
          ${editorCode}
          
          // Return captured logs
          return logs.join('\\n');
        } catch (error) {
          throw error;
        }
      `);
      
      const result = executeCode();
      setOutput(result);
    } catch (err) {
      setError(err.message);
      setOutput(`Error: ${err.message}`);
    }
  };

  /**
   * Handle tab change
   * @param {string} tab - Tab identifier
   */
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    
    // Set the code editor content based on selected tab
    switch (tab) {
      case 'basics':
        setEditorCode(basicExample.code);
        break;
      case 'es6':
        setEditorCode(es6FeaturesExample.code);
        break;
      case 'async':
        setEditorCode(asyncExample.code);
        break;
      case 'react':
        setEditorCode(reactHooksExample.code);
        break;
      case 'algorithm':
        setEditorCode(algorithmExample.code);
        break;
      case 'patterns':
        setEditorCode(designPatternExample.code);
        break;
      default:
        setEditorCode(basicExample.code);
    }
    
    // Clear previous output and errors
    setOutput('');
    setError(null);
  };

  // Define tabs
  const tabs = [
    { id: 'basics', label: 'JavaScript Basics' },
    { id: 'es6', label: 'ES6+ Features' },
    { id: 'async', label: 'Async JavaScript' },
    { id: 'react', label: 'React Hooks' },
    { id: 'algorithm', label: 'Algorithms' },
    { id: 'patterns', label: 'Design Patterns' }
  ];

  // Get current example based on active tab
  const getCurrentExample = () => {
    switch (activeTab) {
      case 'basics': return basicExample;
      case 'es6': return es6FeaturesExample;
      case 'async': return asyncExample;
      case 'react': return reactHooksExample;
      case 'algorithm': return algorithmExample;
      case 'patterns': return designPatternExample;
      default: return basicExample;
    }
  };

  const currentExample = getCurrentExample();

  return (
    <div className="language-examples javascript-examples">
      <header className="examples-header">
        <h1>JavaScript Examples</h1>
        <p className="examples-description">
          Explore various JavaScript concepts, from basic syntax to advanced patterns.
          You can run the code examples directly in your browser and see the results.
        </p>
      </header>

      <TabContainer 
        tabs={tabs} 
        activeTab={activeTab} 
        onTabChange={handleTabChange} 
      />

      <div className="example-content">
        <section className="example-description">
          <h2>{currentExample.title}</h2>
          <p>{currentExample.description}</p>
          
          {currentExample.notes && (
            <div className="example-notes">
              <h3>Notes</h3>
              <ul>
                {currentExample.notes.map((note, index) => (
                  <li key={index}>{note}</li>
                ))}
              </ul>
            </div>
          )}
        </section>

        <div className="code-editor-container">
          <CodeEditor
            code={editorCode}
            onChange={setEditorCode}
            language="javascript"
          />
          
          <div className="editor-actions">
            <button 
              onClick={runCode}
              className="btn btn-primary run-code-btn"
            >
              Run Code
            </button>
            
            <button 
              onClick={() => setEditorCode(currentExample.code)}
              className="btn btn-secondary reset-btn"
            >
              Reset Code
            </button>
          </div>
          
          <div className="code-output">
            <h3>Output</h3>
            <pre className={`output-container ${error ? 'error' : ''}`}>
              {output || 'Click "Run Code" to see the output.'}
            </pre>
          </div>
        </div>
      </div>

      <section className="additional-resources">
        <h2>Additional Resources</h2>
        <ul>
          <li>
            <a 
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              MDN Web Docs - JavaScript
            </a>
          </li>
          <li>
            <a 
              href="https://javascript.info/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              JavaScript.info - Modern JavaScript Tutorial
            </a>
          </li>
          <li>
            <a 
              href="https://github.com/getify/You-Dont-Know-JS" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              You Don't Know JS (book series)
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default JavaScriptExamples;
