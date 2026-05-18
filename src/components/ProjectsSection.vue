<script setup lang="ts">
import { useScrollAnimation } from '../composables/useScrollAnimation'
useScrollAnimation()

type Project = {
  title: string
  year: string
  blurb: string
  stack: string[]
  links?: { label: string; href: string }[]
}

const projects: Project[] = [
  {
    title: 'Evalurez',
    year: '2025',
    blurb: "Resume vs job-description scorer that explains why a candidate matches or doesn't, using Gemini. I built it because every existing tool I tried was either a black box or got the answer wrong.",
    stack: ['Next.js', 'TypeScript', 'Gemini', 'Redux'],
    links: [{ label: 'github', href: '#' }],
  },
  {
    title: 'AI Interview Pro',
    year: '2025',
    blurb: "Mock-interview app that records you, transcribes your answer, and gives feedback. Getting WebRTC working was the part that took the most time.",
    stack: ['Next.js', 'WebRTC', 'Gemini', 'Web Speech'],
    links: [{ label: 'github', href: '#' }],
  },
  {
    title: 'PowerTranscript',
    year: '2025 to now',
    blurb: "Semantic search and summarisation over decades of UN transcripts. This is what I work on at DiploTools.",
    stack: ['SvelteKit', 'Python', 'PostgreSQL', 'AWS'],
    links: [{ label: 'diplotools.com', href: 'https://diplotools.com' }],
  },
  {
    title: 'Swedish Language Quest',
    year: '2023',
    blurb: "My bachelor thesis. A gamified Swedish-learning app built around persuasive-design ideas like commitment, streaks, and gentle social pressure.",
    stack: ['Next.js', 'TypeScript', 'Tailwind', 'Zustand'],
    links: [{ label: 'github', href: '#' }],
  },
  {
    title: 'Multimodal RAG',
    year: '2024',
    blurb: "Q&A system over PDFs, images, and short clips in a single index. I built it to learn FAISS properly.",
    stack: ['Python', 'FAISS', 'LLaMA-3', 'Groq', 'Streamlit'],
    links: [{ label: 'github', href: '#' }],
  },
  {
    title: 'Gmail AI Reply',
    year: '2024',
    blurb: "Chrome extension that drafts a context-aware Gmail reply. Spring Boot on the backend, which I know is an odd choice.",
    stack: ['Chrome ext.', 'Spring Boot', 'Gemini'],
    links: [{ label: 'github', href: '#' }],
  },
]
</script>

<template>
  <section id="projects" class="wrap">
    <p class="eyebrow fade-in">projects</p>
    <h2 class="serif fade-in">Things I've built (and learned from).</h2>

    <div class="list">
      <article v-for="p in projects" :key="p.title" class="row fade-in">
        <header>
          <h3 class="serif">{{ p.title }}</h3>
          <span class="year">{{ p.year }}</span>
        </header>
        <p>{{ p.blurb }}</p>
        <footer>
          <ul class="stack">
            <li v-for="t in p.stack" :key="t">{{ t }}</li>
          </ul>
          <ul v-if="p.links" class="links">
            <li v-for="l in p.links" :key="l.href">
              <a :href="l.href" target="_blank" rel="noopener">{{ l.label }} ↗</a>
            </li>
          </ul>
        </footer>
      </article>
    </div>
  </section>
</template>

<style scoped>
h2 {
  font-size: clamp(36px, 5vw, 52px);
  letter-spacing: -0.02em;
  margin: 12px 0 48px;
}

.list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border-top: 1px solid var(--rule);
}

.row {
  padding: 28px 24px;
  border-bottom: 1px solid var(--rule);
  transition: background-color 220ms;
}

.row:nth-child(odd) { border-right: 1px solid var(--rule); }

.row:hover {
  background: color-mix(in oklab, var(--accent) 5%, transparent);
}

.row header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 12px;
  gap: 16px;
}

.row h3 {
  font-size: 22px;
  font-weight: 400;
  letter-spacing: -0.005em;
}

.year {
  font-family: var(--mono);
  font-size: 11px;
  color: var(--ink-dim);
  white-space: nowrap;
}

.row p {
  color: var(--ink-soft);
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 18px;
}

.row footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}

.stack {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  font-family: var(--mono);
  font-size: 11px;
  color: var(--ink-dim);
  letter-spacing: 0.01em;
}

.stack li::after { content: ' ·'; margin-left: 4px; color: var(--rule); }
.stack li:last-child::after { content: ''; }

.links {
  display: flex;
  gap: 14px;
  font-family: var(--mono);
  font-size: 11px;
}

.links a {
  color: var(--accent);
  border-bottom: 1px solid transparent;
  padding-bottom: 1px;
  transition: border-color 180ms;
}

.links a:hover { border-bottom-color: var(--accent); }

@media (max-width: 720px) {
  .list { grid-template-columns: 1fr; }
  .row:nth-child(odd) { border-right: none; }
  .row { padding: 24px 0; }
}
</style>
