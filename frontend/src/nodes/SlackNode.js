import { BaseNode } from './BaseNode';

export const SlackNode = ({ id }) => (
  <BaseNode id={id} label="Slack" inputs={[{id: 'msg'}]}>
    <div className="text-xs text-slate-400 italic">Sends message to channel</div>
    <input className="bg-slate-950 border border-slate-800 p-1 rounded text-xs w-full mt-2" placeholder="#general" />
  </BaseNode>
);