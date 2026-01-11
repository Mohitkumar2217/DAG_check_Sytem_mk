import { BaseNode } from './BaseNode';

export const NoteNode = ({ id }) => (
  <BaseNode id={id} label="Sticky Note">
    <textarea 
      className="bg-yellow-900/10 border border-yellow-700/30 p-2 rounded text-xs text-yellow-200 w-full outline-none" 
      placeholder="Type a memo..." 
    />
  </BaseNode>
);