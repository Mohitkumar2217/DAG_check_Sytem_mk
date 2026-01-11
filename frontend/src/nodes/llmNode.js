import { BaseNode } from './BaseNode';

export const LLMNode = ({ id }) => {
  return (
    <BaseNode 
      id={id} 
      label="LLM (GPT-4)" 
      inputs={[{ id: 'system' }, { id: 'prompt' }]} 
      outputs={[{ id: 'response' }]}
    >
      <div className="py-2">
        <p className="text-xs text-slate-400 leading-relaxed">
          Generates a response based on the system instructions and user prompt.
        </p>
      </div>
    </BaseNode>
  );
};