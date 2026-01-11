import { BaseNode } from './BaseNode';

export const PostgresNode = ({ id }) => (
  <BaseNode id={id} label="PostgreSQL" outputs={[{id: 'query'}]}>
    <label className="text-[10px] text-slate-500 font-bold">TABLE SELECT</label>
    <select className="bg-slate-950 border border-slate-800 p-1 rounded text-xs w-full text-slate-300">
      <option>users_table</option>
      <option>orders_table</option>
      <option>analytics_logs</option>
    </select>
  </BaseNode>
);