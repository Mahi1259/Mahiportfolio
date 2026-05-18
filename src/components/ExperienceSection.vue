<script setup lang="ts">
import { useScrollAnimation } from '../composables/useScrollAnimation'
useScrollAnimation()

const jobs = [
  {
    when: 'Nov 2025 to now',
    role: 'Full-stack developer',
    place: 'DiploTools',
    city: 'Geneva',
    blurb: "Building PowerTranscript, an AI tool that helps diplomats find what they need across years of UN meeting transcripts. SvelteKit on the frontend, Python and Postgres on the backend, AWS underneath.",
    stack: 'SvelteKit · Python · PostgreSQL · AWS',
  },
  {
    when: 'Nov 2023 to Feb 2024',
    role: 'Full-stack developer',
    place: 'Clira',
    city: 'Stockholm',
    blurb: "Helped a small team ship the customer-facing platform. Next.js on top, Laravel underneath, and the first real attempt at AI features inside the product.",
    stack: 'Next.js · Laravel · OpenAI',
  },
]
</script>

<template>
  <section id="work" class="wrap">
    <p class="eyebrow fade-in">work</p>
    <h2 class="serif fade-in">Places I've been.</h2>

    <ol class="jobs">
      <li v-for="job in jobs" :key="job.place" class="fade-in">
        <div class="meta">
          <span class="when">{{ job.when }}</span>
          <span class="city">{{ job.city }}</span>
        </div>
        <div class="body">
          <h3>
            {{ job.role }} <span class="at">at</span>
            <span class="place">{{ job.place }}</span>
          </h3>
          <p>{{ job.blurb }}</p>
          <p class="stack">{{ job.stack }}</p>
        </div>
      </li>
    </ol>
  </section>
</template>

<style scoped>
h2 {
  font-size: clamp(36px, 5vw, 52px);
  letter-spacing: -0.02em;
  margin: 12px 0 48px;
}

.jobs { display: flex; flex-direction: column; }

.jobs li {
  display: grid;
  grid-template-columns: 160px 1fr;
  gap: 40px;
  padding: 32px 0;
  border-top: 1px solid var(--rule);
}

.jobs li:last-child { border-bottom: 1px solid var(--rule); }

.meta {
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-family: var(--mono);
  font-size: 12px;
}

.when { color: var(--ink-soft); }
.city { color: var(--ink-dim); }

.body h3 {
  font-family: var(--serif);
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 14px;
  letter-spacing: -0.005em;
}

.at { color: var(--ink-soft); font-style: italic; font-size: 0.85em; }
.place { color: var(--accent); }

.body p {
  color: var(--ink-soft);
  font-size: 15px;
  line-height: 1.65;
  margin-bottom: 14px;
}

.body p:last-child { margin-bottom: 0; }

.stack {
  font-family: var(--mono) !important;
  font-size: 12px !important;
  color: var(--ink-dim) !important;
  letter-spacing: 0.01em;
}

@media (max-width: 640px) {
  .jobs li { grid-template-columns: 1fr; gap: 16px; }
}
</style>
