import { BaseNode } from './BaseNode';

export const ConditionNode = ({ id }) => (
  <BaseNode id={id} label="Condition" inputs={[{id: 'val'}]} outputs={[{id: 'true'}, {id: 'false'}]}>
    <div className="font-mono text-center text-indigo-400 py-2 border border-indigo-500/20 bg-indigo-500/5 rounded">
      IF / ELSE
    </div>
  </BaseNode>
);