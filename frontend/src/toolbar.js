import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 p-4 shadow-sm flex items-center justify-between">
            <div className="flex flex-col">
                <h2 className="text-[10px] font-black text-indigo-600 uppercase tracking-widest leading-none">Node Library</h2>
                <p className="text-[11px] text-slate-400 font-medium">Drag to build</p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
                {/* Logical Groups to showcase abstraction */}
                <div className="flex gap-2 p-1 bg-slate-100 rounded-lg border border-slate-200">
                    <DraggableNode type='customInput' label='Input' />
                    <DraggableNode type='customOutput' label='Output' />
                    <DraggableNode type='text' label='Text' />
                    <DraggableNode type='llm' label='LLM' />
                </div>
                <div className="flex gap-2 p-1 bg-slate-100 rounded-lg border border-slate-200">
                    <DraggableNode type='slack' label='Slack' />
                    <DraggableNode type='postgres' label='Database' />
                    <DraggableNode type='condition' label='Logic' />
                    <DraggableNode type='note' label='Memo' />
                    <DraggableNode type='json' label='JSON' />
                </div>
            </div>
        </nav>
    );
};