export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div
      onDragStart={(event) => onDragStart(event, type)}
      draggable
      className="cursor-grab select-none px-4 py-2 bg-white border border-slate-200 rounded-lg shadow-sm 
                 hover:border-indigo-500 hover:shadow-md transition-all active:scale-95 
                 flex items-center justify-center min-w-[90px] text-slate-700 text-xs font-medium"
    >
      {label}
    </div>
  );
};