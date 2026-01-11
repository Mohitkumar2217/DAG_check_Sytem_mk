import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  return (
    <BaseNode 
      id={id} 
      label="Output" 
      inputs={[{ id: 'value' }]}
    >
      <div className="flex flex-col gap-2">
        <label className="text-[10px] text-slate-500 font-semibold uppercase">Output Name</label>
        <input 
          type="text" 
          value={currName} 
          onChange={(e) => setCurrName(e.target.value)} 
          className="bg-slate-950 border border-slate-800 rounded p-1 text-xs text-slate-200 outline-none focus:border-indigo-500"
        />
        <label className="text-[10px] text-slate-500 font-semibold uppercase mt-1">Type</label>
        <select 
          value={outputType} 
          onChange={(e) => setOutputType(e.target.value)}
          className="bg-slate-950 border border-slate-800 rounded p-1 text-xs text-slate-200 outline-none"
        >
          <option value="Text">Text</option>
          <option value="Image">Image</option>
        </select>
      </div>
    </BaseNode>
  );
};