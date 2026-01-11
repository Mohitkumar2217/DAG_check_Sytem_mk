// frontend/src/submit.js
import { useStore } from './store'; // Adjust path based on your file structure

export const SubmitButton = () => {
    const nodes = useStore((state) => state.nodes);
    const edges = useStore((state) => state.edges);

    const handleSubmit = async () => {
        try {
            const response = await fetch('http://localhost:8000/pipelines/parse', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nodes, edges }), // Send nodes and edges
            });

            if (!response.ok) throw new Error('Backend error');

            const data = await response.ok ? await response.json() : null;

            // Requirement: Alert displaying values in a user-friendly manner
            if (data) {
                alert(
                    `Pipeline Analysis Results:\n\n` +
                    `• Total Nodes: ${data.num_nodes}\n` +
                    `• Total Edges: ${data.num_edges}\n` +
                    `• Valid DAG: ${data.is_dag ? "Yes ✅" : "No (Cycle Detected) ❌"}`
                );
            }
        } catch (error) {
            console.error('Submission failed:', error);
            alert('Failed to connect to the backend server.');
        }
    };

    return (
        <div className="flex items-center justify-center p-4">
            <button
                type="button"
                onClick={handleSubmit}
                className="bg-indigo-600 text-white px-6 py-2 rounded-full font-bold hover:bg-indigo-700 transition-colors"
            >
                Submit Pipeline
            </button>
        </div>
    );
};