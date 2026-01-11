import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  return (
    <BaseNode 
      id={id} 
      label="Input" 
      outputs={[{ id: 'value' }]}
    >
      <div className="flex flex-col gap-2">
        <label className="text-[10px] text-slate-500 font-semibold uppercase">Field Name</label>
        <input 
          type="text" 
          value={currName} 
          onChange={(e) => setCurrName(e.target.value)} 
          className="bg-slate-950 border border-slate-800 rounded p-1 text-xs text-slate-200 outline-none focus:border-indigo-500"
        />
        <label className="text-[10px] text-slate-500 font-semibold uppercase mt-1">Type</label>
        <select 
          value={inputType} 
          onChange={(e) => setInputType(e.target.value)}
          className="bg-slate-950 border border-slate-800 rounded p-1 text-xs text-slate-200 outline-none"
        >
          <option value="Text">Text</option>
          <option value="File">File</option>
        </select>
      </div>
    </BaseNode>
  );
};