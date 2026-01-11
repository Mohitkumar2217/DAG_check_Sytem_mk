# backend/main.py
from fastapi import FastAPI, Body
from fastapi.middleware.cors import CORSMiddleware
import collections

app = FastAPI()

# Enable CORS so your frontend can communicate with the backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_methods=["*"],
    allow_headers=["*"],
)

def is_dag(nodes, edges):
    # Create adjacency list and track in-degrees
    adj = collections.defaultdict(list)
    in_degree = {node['id']: 0 for node in nodes}
    
    for edge in edges:
        source, target = edge['source'], edge['target']
        adj[source].append(target)
        in_degree[target] = in_degree.get(target, 0) + 1

    # Kahn's Algorithm: Find nodes with 0 in-degree
    queue = collections.deque([n for n in in_degree if in_degree[n] == 0])
    visited_count = 0

    while queue:
        u = queue.popleft()
        visited_count += 1
        for v in adj[u]:
            in_degree[v] -= 1
            if in_degree[v] == 0:
                queue.append(v)

    # If all nodes are visited, it is a DAG
    return visited_count == len(nodes)

@app.post('/pipelines/parse')
async def parse_pipeline(pipeline: dict = Body(...)):
    nodes = pipeline.get('nodes', [])
    edges = pipeline.get('edges', [])
    
    # Requirement: Return num_nodes, num_edges, and is_dag
    return {
        "num_nodes": len(nodes),
        "num_edges": len(edges),
        "is_dag": is_dag(nodes, edges)
    }