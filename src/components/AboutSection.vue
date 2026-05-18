<script setup lang="ts">
import { useScrollAnimation } from '../composables/useScrollAnimation'
useScrollAnimation()

const schools: [string, string, string][] = [
  ['since 2024', 'M.Sc. Computer Science', 'University of Geneva'],
  ['2022-23',    'Exchange semester',       'Blekinge Inst. of Technology'],
  ['2019-22',    'B.Sc. Computer Science',  'Sri Venkateswara University'],
]
</script>

<template>
  <section id="about" class="wrap">
    <p class="eyebrow fade-in">about</p>
    <h2 class="serif fade-in">A short version.</h2>

    <div class="grid">
      <div class="prose">
        <p class="fade-in">
          I grew up in India, did my bachelor's there, spent a year on
          exchange in southern Sweden, and ended up in Geneva for the
          master's.
        </p>
        <p class="fade-in">
          Most of my last few years has been TypeScript on top, usually
          React or Next, sometimes Svelte. Python or Node underneath.
          AWS and Docker once it's time to ship, with a CI pipeline that
          mostly stays out of the way.
        </p>
        <p class="fade-in">
          The work I gravitate toward sits at the boring but important
          end of AI products. Retrieval that doesn't fall over on a long
          PDF. Evals you can trust. The wiring underneath the demo. I
          care more about whether a non-engineer can use the thing than
          whether it tops a benchmark.
        </p>
      </div>

      <ul class="schools fade-in">
        <li v-for="[when, what, where] in schools" :key="what">
          <span class="when">{{ when }}</span>
          <span class="what">{{ what }}</span>
          <span class="where">{{ where }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
h2 {
  font-size: clamp(36px, 5vw, 52px);
  letter-spacing: -0.02em;
  line-height: 1.05;
  margin: 12px 0 48px;
}

.grid {
  display: grid;
  grid-template-columns: 1.35fr 1fr;
  gap: 64px;
  align-items: start;
}

.prose p {
  font-size: 17px;
  line-height: 1.7;
  color: var(--ink);
  margin-bottom: 18px;
}

.prose p:last-child { margin-bottom: 0; }

.schools li {
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 16px;
  row-gap: 2px;
  padding: 14px 0;
  border-bottom: 1px solid var(--rule);
  font-size: 14px;
}

.schools li:first-child { border-top: 1px solid var(--rule); }

.when {
  grid-row: span 2;
  font-family: var(--mono);
  font-size: 11px;
  color: var(--ink-soft);
  white-space: nowrap;
  padding-top: 3px;
  letter-spacing: 0.02em;
}

.what { color: var(--ink); }
.where { color: var(--ink-soft); font-size: 13px; }

@media (max-width: 720px) {
  .grid { grid-template-columns: 1fr; gap: 40px; }
}
</style>
