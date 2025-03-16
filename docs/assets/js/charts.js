// Charts initialization
document.addEventListener('DOMContentLoaded', () => {
    // Initial placeholder chart until resources.js fetches real data
    initializePlaceholderChart();
});

function initializePlaceholderChart() {
    const ctx = document.getElementById('categoriesChart').getContext('2d');
    
    // Placeholder data
    const placeholderData = {
        labels: ['Loading data...'],
        datasets: [{
            label: 'Resources',
            data: [0],
            backgroundColor: '#007bff',
            borderWidth: 0
        }]
    };
    
    // Create a placeholder chart
    new Chart(ctx, {
        type: 'bar',
        data: placeholderData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    display: false
                },
                x: {
                    display: false
                }
            }
        }
    });
}

// Network visualization for contributors
document.addEventListener('DOMContentLoaded', () => {
    // Initialize network visualization
    initializeContributorsNetwork();
});

function initializeContributorsNetwork() {
    const containerWidth = document.getElementById('contributors-network').clientWidth;
    const containerHeight = document.getElementById('contributors-network').clientHeight || 400;
    
    // Create SVG container
    const svg = d3.select('#contributors-network')
        .append('svg')
        .attr('width', containerWidth)
        .attr('height', containerHeight);
    
    // Create group for the visualization
    const g = svg.append('g')
        .attr('transform', `translate(${containerWidth / 2}, ${containerHeight / 2})`);
    
    // Fetch contributors
    fetchContributorsData().then(contributorsData => {
        // Create the network visualization
        createNetworkVisualization(g, contributorsData, containerWidth, containerHeight);
    }).catch(error => {
        console.error('Error fetching contributors data:', error);
        // Display a placeholder message
        svg.append('text')
            .attr('x', containerWidth / 2)
            .attr('y', containerHeight / 2)
            .attr('text-anchor', 'middle')
            .style('font-size', '14px')
            .style('fill', '#6c757d')
            .text('Contributors data will be displayed here...');
    });
}

async function fetchContributorsData() {
    // Simulate fetched data with placeholder for now
    // In a production environment, this would fetch real data from GitHub API
    return {
        nodes: [
            { id: 'main', name: 'Repository', type: 'repo' },
            { id: 'contributor1', name: 'Contributor 1', type: 'contributor' },
            { id: 'contributor2', name: 'Contributor 2', type: 'contributor' },
            { id: 'contributor3', name: 'Contributor 3', type: 'contributor' },
            { id: 'contributor4', name: 'Contributor 4', type: 'contributor' },
            { id: 'contributor5', name: 'Contributor 5', type: 'contributor' }
        ],
        links: [
            { source: 'contributor1', target: 'main', value: 5 },
            { source: 'contributor2', target: 'main', value: 3 },
            { source: 'contributor3', target: 'main', value: 2 },
            { source: 'contributor4', target: 'main', value: 1 },
            { source: 'contributor5', target: 'main', value: 1 }
        ]
    };
}

function createNetworkVisualization(g, data, width, height) {
    // Radius based on node type
    const getRadius = d => d.type === 'repo' ? 30 : 15;
    
    // Color based on node type
    const getColor = d => d.type === 'repo' ? '#007bff' : '#6c757d';
    
    // Configure force simulation
    const simulation = d3.forceSimulation(data.nodes)
        .force('link', d3.forceLink(data.links).id(d => d.id).distance(100))
        .force('charge', d3.forceManyBody().strength(-300))
        .force('center', d3.forceCenter(0, 0))
        .on('tick', ticked);
    
    // Create links
    const link = g.append('g')
        .selectAll('line')
        .data(data.links)
        .enter().append('line')
        .attr('stroke', '#dee2e6')
        .attr('stroke-width', d => Math.sqrt(d.value));
    
    // Create nodes
    const node = g.append('g')
        .selectAll('circle')
        .data(data.nodes)
        .enter().append('circle')
        .attr('r', getRadius)
        .attr('fill', getColor)
        .call(d3.drag()
            .on('start', dragstarted)
            .on('drag', dragged)
            .on('end', dragended));
    
    // Add titles for tooltip
    node.append('title')
        .text(d => d.name);
    
    // Update positions on tick
    function ticked() {
        link
            .attr('x1', d => d.source.x)
            .attr('y1', d => d.source.y)
            .attr('x2', d => d.target.x)
            .attr('y2', d => d.target.y);
        
        node
            .attr('cx', d => d.x)
            .attr('cy', d => d.y);
    }
    
    // Drag functions
    function dragstarted(event, d) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
    }
    
    function dragged(event, d) {
        d.fx = event.x;
        d.fy = event.y;
    }
    
    function dragended(event, d) {
        if (!event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
    }
}
