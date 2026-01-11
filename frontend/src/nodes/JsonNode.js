import { BaseNode } from './BaseNode';

export const JsonNode = ({ id }) => (
  <BaseNode id={id} label="JSON Parser" inputs={[{id: 'raw'}]} outputs={[{id: 'obj'}]}>
    <div className="text-[10px] bg-indigo-500/10 p-2 rounded text-indigo-300 text-center border border-indigo-500/20">
      String → Object {}
    </div>
  </BaseNode>
);