# PicSearch

<a class="github-button" href="https://github.com/kakhil2004/ai-gallery" target="_blank" rel="noopener">
  <svg class="github-icon" viewBox="0 0 16 16" fill="currentColor" width="20" height="20">
    <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 005.47 7.59c.4.07.55-.17.55-.38 
    0-.19-.01-.82-.01-1.49-2 .37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13
    -.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 
    2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 
    0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.13 0 0 .67-.21 
    2.2.82A7.65 7.65 0 018 4.79c.68 0 1.36.09 2 .26 
    1.53-1.04 2.2-.82 2.2-.82.44 1.11.16 1.93.08 
    2.13.51.56.82 1.27.82 2.15 0 3.07-1.87 
    3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 
    1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 
    0016 8c0-4.42-3.58-8-8-8z"/>
  </svg>
  View on GitHub
</a>

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/Cg14ZrTWqx0" title="PicSearch demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### The Problem

Apple Photos has a search feature, but it is very strict -- you have to get the query exactly right for it to find anything. I wanted to see if I could build something where you just describe what you're looking for in plain sentences and it actually understands you.

That's PicSearch: upload your photos once, then find them by meaning rather than by filename or exact tags.

### How It Works

When you upload an image, GPT-5-nano (vision) generates a 2-3 sentence description and 15 keywords for it. That description is then embedded into a vector using **Sentence Transformers** (`all-MiniLM-L6-v2`) and stored in memory.

When you search, your query gets embedded the same way and compared against every stored image embedding using **cosine similarity**. Results are ranked by relevance score, so the most semantically similar images surface first -- even if none of your exact words appear in the description.

### Stack

- **Backend**: FastAPI (Python)
- **AI Description**: OpenAI GPT-5-nano(vision) -- generates descriptions + keywords per image
- **Semantic Search**: Sentence Transformers (`all-MiniLM-L6-v2`) + NumPy cosine similarity
- **Frontend**: Single-file HTML/CSS/JS -- dark theme, drag-and-drop upload, responsive grid (Made by Claude Code)

### Why Sentence Transformers?

`all-MiniLM-L6-v2` is a lightweight embedding model trained specifically for semantic similarity tasks. It maps sentences into a 384-dimensional vector space where sentences with similar meaning end up close together -- so a query like *"dog at the beach"* will surface an image described as *"a golden retriever running along the shoreline"* even though none of those words match.

### Why can't I demo the app myself?
Servers and OpenAI credits are not free. There are malicious people that could easily attack the site and cause it to create a huge API bill. 


### API

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/` | Serves the UI |
| `GET` | `/search?query=` | Returns images ranked by semantic similarity (empty query returns all) |
| `POST` | `/upload` | Accepts `.jpg`, `.jpeg`, `.png`, `.webp`; analyzes and indexes the image |
