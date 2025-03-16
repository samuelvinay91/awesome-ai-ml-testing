document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Fetch the README file content
        const response = await fetch('https://raw.githubusercontent.com/samuelvinay91/awesome-ai-ml-testing/main/README.md');
        if (!response.ok) {
            throw new Error('Failed to fetch README content');
        }
        
        const readmeContent = await response.text();
        
        // Parse the README content to extract resource sections and items
        const resourceCategories = parseResourcesFromReadme(readmeContent);
        
        // Populate the resources grid
        populateResourcesGrid(resourceCategories);
        
        // Set up search and filtering functionality
        setupResourceFilter(resourceCategories);
        
        // Create the categories chart
        createCategoriesChart(resourceCategories);
        
    } catch (error) {
        console.error('Error loading resources:', error);
        document.getElementById('resources-grid').innerHTML = `
            <div class="error-message">
                <p><i class="fas fa-exclamation-triangle"></i> Failed to load resources. Please try again later.</p>
            </div>
        `;
    }
});

function parseResourcesFromReadme(readmeContent) {
    // Extract sections using regex to find headings
    const sections = readmeContent.split(/^## /gm).slice(1); // Skip the intro part
    
    const resourceCategories = {};
    
    sections.forEach(section => {
        // Get the section title from the first line
        const titleMatch = section.match(/(.+?)[\r\n]/);
        
        if (titleMatch) {
            const title = titleMatch[1].trim();
            
            // Skip non-resource sections like "Contributing" and "License"
            if (title.includes('Contributing') || title.includes('License') || 
                title.includes('Contents')) {
                return;
            }
            
            // Determine category key based on section title
            let categoryKey = title.toLowerCase().replace(/[^\w\s-]/g, '')
                                .replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');
            
            // Map section titles to simpler category keys
            if (categoryKey.includes('llm') || categoryKey.includes('chatbot')) categoryKey = 'llm';
            else if (categoryKey.includes('data-validation')) categoryKey = 'data';
            else if (categoryKey.includes('fairness') || categoryKey.includes('ethics')) categoryKey = 'fairness';
            else if (categoryKey.includes('adversarial')) categoryKey = 'adversarial';
            else if (categoryKey.includes('monitoring')) categoryKey = 'monitoring';
            else if (categoryKey.includes('cicd') || categoryKey.includes('ci-cd')) categoryKey = 'cicd';
            else if (categoryKey.includes('multi-modal')) categoryKey = 'multimodal';
            else if (categoryKey.includes('regulatory')) categoryKey = 'regulatory';
            else if (categoryKey.includes('generative')) categoryKey = 'generative';
            else if (categoryKey.includes('hardware')) categoryKey = 'hardware';
            else if (categoryKey.includes('safety')) categoryKey = 'safety';
            else if (categoryKey.includes('benchmark')) categoryKey = 'benchmarks';
            else if (categoryKey.includes('books') || categoryKey.includes('papers')) categoryKey = 'books';
            else if (categoryKey.includes('courses') || categoryKey.includes('tutorials')) categoryKey = 'courses';
            else if (categoryKey.includes('blogs') || categoryKey.includes('newsletters')) categoryKey = 'blogs';
            else if (categoryKey.includes('communities') || categoryKey.includes('conferences')) categoryKey = 'communities';
            else if (categoryKey.includes('case-studies')) categoryKey = 'case-studies';
            else if (categoryKey.includes('general')) categoryKey = 'general';
            else categoryKey = 'other';
            
            // Extract resources (list items) from section
            const resources = [];
            // Find all list items in this section (those that start with "- [")
            const listItemRegex = /- \[(.+?)\]\((.+?)\) - (.+?)(?:[\r\n]|$)/g;
            let listMatch;
            
            while ((listMatch = listItemRegex.exec(section)) !== null) {
                resources.push({
                    name: listMatch[1],
                    link: listMatch[2],
                    description: listMatch[3],
                    category: categoryKey
                });
            }
            
            // Choose appropriate icon based on category
            let icon = 'fa-cube'; // default
            
            if (categoryKey === 'general') icon = 'fa-check-double';
            else if (categoryKey === 'llm') icon = 'fa-robot';
            else if (categoryKey === 'data') icon = 'fa-database';
            else if (categoryKey === 'fairness') icon = 'fa-balance-scale';
            else if (categoryKey === 'adversarial') icon = 'fa-shield-alt';
            else if (categoryKey === 'monitoring') icon = 'fa-chart-line';
            else if (categoryKey === 'cicd') icon = 'fa-code-branch';
            else if (categoryKey === 'multimodal') icon = 'fa-images';
            else if (categoryKey === 'regulatory') icon = 'fa-gavel';
            else if (categoryKey === 'generative') icon = 'fa-magic';
            else if (categoryKey === 'hardware') icon = 'fa-microchip';
            else if (categoryKey === 'safety') icon = 'fa-hard-hat';
            else if (categoryKey === 'benchmarks') icon = 'fa-tachometer-alt';
            else if (categoryKey === 'books') icon = 'fa-book';
            else if (categoryKey === 'courses') icon = 'fa-graduation-cap';
            else if (categoryKey === 'blogs') icon = 'fa-rss';
            else if (categoryKey === 'communities') icon = 'fa-users';
            else if (categoryKey === 'case-studies') icon = 'fa-file-alt';
            
            // Add icon to each resource
            resources.forEach(resource => resource.icon = icon);
            
            // Add to resource categories
            resourceCategories[categoryKey] = {
                title: title.replace(/^🛠️ |^📊 |^⚖️ |^🛡️ |^📡 |^🔄 |^🎭 |^📜 |^🎨 |^💻 |^🛡️ |^📂 |^📚 |^🎓 |^📰 |^👥 |^📋 /g, ''),
                resources: resources
            };
        }
    });
    
    return resourceCategories;
}

function populateResourcesGrid(resourceCategories) {
    const resourcesGrid = document.getElementById('resources-grid');
    resourcesGrid.innerHTML = '';
    
    // Flatten all resources into a single array
    const allResources = [];
    Object.values(resourceCategories).forEach(category => {
        allResources.push(...category.resources);
    });
    
    // Sort by name
    allResources.sort((a, b) => a.name.localeCompare(b.name));
    
    // Display resources
    allResources.forEach(resource => {
        const card = createResourceCard(resource);
        resourcesGrid.appendChild(card);
    });
}

function createResourceCard(resource) {
    const card = document.createElement('div');
    card.className = 'resource-card';
    card.dataset.category = resource.category;
    
    card.innerHTML = `
        <div class="resource-card-header">
            <div class="resource-icon">
                <i class="fas ${resource.icon}"></i>
            </div>
            <div class="resource-title">
                <h3>${resource.name}</h3>
                <div class="resource-category">${getCategoryDisplayName(resource.category)}</div>
            </div>
        </div>
        <div class="resource-description">
            ${resource.description}
        </div>
        <a href="${resource.link}" class="resource-link" target="_blank">
            View Resource <i class="fas fa-external-link-alt"></i>
        </a>
    `;
    
    return card;
}

function getCategoryDisplayName(categoryKey) {
    const categoryNames = {
        'general': 'General ML Testing',
        'llm': 'LLM & Chatbot Testing',
        'data': 'Data Validation & Quality',
        'fairness': 'Fairness & Ethics',
        'adversarial': 'Adversarial Testing',
        'monitoring': 'Monitoring & Observability',
        'cicd': 'CI/CD for ML',
        'multimodal': 'Multi-modal Testing',
        'regulatory': 'Regulatory Compliance',
        'generative': 'Generative AI Evaluation',
        'hardware': 'Hardware-aware ML Testing',
        'safety': 'AI Safety Testing',
        'benchmarks': 'Benchmarks & Datasets',
        'books': 'Books & Papers',
        'courses': 'Courses & Tutorials',
        'blogs': 'Blogs & Newsletters',
        'communities': 'Communities & Conferences',
        'case-studies': 'Case Studies',
        'other': 'Other Resources'
    };
    
    return categoryNames[categoryKey] || categoryKey;
}

function setupResourceFilter(resourceCategories) {
    const searchInput = document.getElementById('resource-search');
    const categoryFilter = document.getElementById('category-filter');
    
    // Search functionality
    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedCategory = categoryFilter.value;
        
        filterResources(searchTerm, selectedCategory);
    });
    
    // Category filter functionality
    categoryFilter.addEventListener('change', () => {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedCategory = categoryFilter.value;
        
        filterResources(searchTerm, selectedCategory);
    });
}

function filterResources(searchTerm, categoryFilter) {
    const resourceCards = document.querySelectorAll('.resource-card');
    
    resourceCards.forEach(card => {
        const title = card.querySelector('.resource-title h3').textContent.toLowerCase();
        const description = card.querySelector('.resource-description').textContent.toLowerCase();
        const category = card.dataset.category;
        
        const matchesSearch = title.includes(searchTerm) || description.includes(searchTerm);
        const matchesCategory = categoryFilter === 'all' || category === categoryFilter;
        
        if (matchesSearch && matchesCategory) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

function createCategoriesChart(resourceCategories) {
    const ctx = document.getElementById('categoriesChart').getContext('2d');
    
    // Count resources by category
    const categoryCounts = {};
    Object.entries(resourceCategories).forEach(([key, category]) => {
        categoryCounts[category.title] = category.resources.length;
    });
    
    // Sort categories by count (descending)
    const sortedCategories = Object.entries(categoryCounts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10); // Show top 10 categories
    
    const labels = sortedCategories.map(item => item[0]);
    const data = sortedCategories.map(item => item[1]);
    
    // Color palette
    const colors = [
        '#007bff', '#6610f2', '#6f42c1', '#e83e8c', '#dc3545',
        '#fd7e14', '#ffc107', '#28a745', '#20c997', '#17a2b8'
    ];
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Number of Resources',
                data: data,
                backgroundColor: colors,
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `Resources: ${context.raw}`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        precision: 0
                    }
                }
            }
        }
    });
}
