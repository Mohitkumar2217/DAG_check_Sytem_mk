import { Handle, Position } from 'reactflow';

export const BaseNode = ({ id, label, children, inputs = [], outputs = [] }) => {
  return (
    <div className="bg-white border-2 border-slate-200 rounded-xl shadow-md hover:border-indigo-500 transition-all min-w-[200px] overflow-hidden">
      {/* Header */}
      <div className="bg-slate-50 border-b border-slate-100 px-3 py-1.5 flex justify-between items-center">
        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{label}</span>
      </div>
      
      {/* Content */}
      <div className="p-4 flex flex-col gap-2">
        {children}
      </div>

      {/* Inputs */}
      {inputs.map((input, idx) => (
        <Handle
          key={`${id}-in-${idx}`}
          type="target"
          position={Position.Left}
          id={`${id}-${input.id}`}
          style={{ top: `${(idx + 1) * (100 / (inputs.length + 1))}%` }}
        />
      ))}

      {/* Outputs */}
      {outputs.map((output, idx) => (
        <Handle
          key={`${id}-out-${idx}`}
          type="source"
          position={Position.Right}
          id={`${id}-${output.id}`}
          style={{ top: `${(idx + 1) * (100 / (outputs.length + 1))}%` }}
        />
      ))}
    </div>
  );
};