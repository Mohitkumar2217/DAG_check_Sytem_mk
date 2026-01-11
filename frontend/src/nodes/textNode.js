import { useState, useEffect, useRef } from 'react';
import { BaseNode } from './BaseNode';

export const TextNode = ({ id, data }) => {
  const [text, setText] = useState(data?.text || '{{input}}');
  const [variables, setVariables] = useState([]);
  const textAreaRef = useRef(null);

  // Requirement: Detect valid JS variables in {{ variable }}
  useEffect(() => {
    const regex = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;
    const matches = [...text.matchAll(regex)].map(match => match[1]);
    setVariables([...new Set(matches)]); // Use Set to avoid duplicate handles
  }, [text]);

  // Requirement: Adjust height as user enters more text
  const handleTextChange = (e) => {
    setText(e.target.value);
    if (textAreaRef.current) {
      textAreaRef.current.style.height = 'auto'; // Reset height to recalculate
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }
  };

  return (
    <BaseNode 
      id={id} 
      label="Text" 
      // Requirement: Create a new Handle on the left for each variable
      inputs={variables.map(v => ({ id: v }))} 
      outputs={[{ id: 'output' }]}
    >
      <div className="flex flex-col gap-1">
        <label className="text-[10px] text-slate-500 font-semibold uppercase">Content</label>
        <textarea
          ref={textAreaRef}
          value={text}
          onChange={handleTextChange}
          placeholder="Enter text with {{variable}}..."
          className="w-full bg-slate-50 border border-slate-200 rounded p-2 text-xs text-slate-700 outline-none focus:border-indigo-500 transition-all resize-none overflow-hidden"
          style={{ minHeight: '40px' }}
        />
        <p className="text-[9px] text-slate-400 italic">
          Detected variables: {variables.join(', ') || 'None'}
        </p>
      </div>
    </BaseNode>
  );
};