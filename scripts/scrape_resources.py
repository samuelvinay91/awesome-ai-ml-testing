import requests
from bs4 import BeautifulSoup
import markdown
from datetime import datetime

def get_github_trending():
    url = "https://github.com/trending?q=ai+ml+testing"
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')
    
    repos = []
    for article in soup.find_all('article', class_='Box-row'):
        title = article.find('h1').text.strip()
        description = article.find('p', class_='col-9')
        description = description.text.strip() if description else ''
        url = "https://github.com" + article.find('h1').find('a')['href']
        repos.append({
            'title': title,
            'description': description,
            'url': url
        })
    return repos[:5]  # Return top 5 trending repos

def get_arxiv_papers():
    url = "http://export.arxiv.org/api/query?search_query=all:testing+AND+all:(ai+OR+ml)&start=0&max_results=5"
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'xml')
    
    papers = []
    for entry in soup.find_all('entry'):
        title = entry.find('title').text.strip()
        summary = entry.find('summary').text.strip()
        url = entry.find('id').text
        papers.append({
            'title': title,
            'summary': summary,
            'url': url
        })
    return papers

def update_readme(repos, papers):
    with open('../README.md', 'r') as file:
        content = file.read()
    
    # Find the Weekly Updates section
    start_idx = content.find('## 📈 Weekly Updates')
    end_idx = content.find('## 🎮 Interactive Resources')
    
    # Generate new content
    new_content = "## 📈 Weekly Updates\n\n"
    new_content += f"*Last updated: {datetime.utcnow().strftime('%Y-%m-%d %H:%M UTC')}*\n\n"
    
    new_content += "### GitHub Trending Repositories\n"
    for repo in repos:
        new_content += f"- [{repo['title']}]({repo['url']}) - {repo['description']}\n"
    
    new_content += "\n### Recent arXiv Papers\n"
    for paper in papers:
        new_content += f"- [{paper['title']}]({paper['url']})\n"
    
    # Replace the section
    updated_content = content[:start_idx] + new_content + content[end_idx:]
    
    with open('../README.md', 'w') as file:
        file.write(updated_content)

if __name__ == "__main__":
    repos = get_github_trending()
    papers = get_arxiv_papers()
    update_readme(repos, papers)
