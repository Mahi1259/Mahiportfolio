<script setup lang="ts">
import { useScrollAnimation } from '../composables/useScrollAnimation'
useScrollAnimation()

const stacks = [
  { label: 'front',  items: 'TypeScript · Vue · Svelte/Kit · Next · React · Tailwind' },
  { label: 'back',   items: 'Python · Node · Django · Laravel · Spring Boot' },
  { label: 'infra',  items: 'PostgreSQL · AWS · Docker · Terraform · a little Kubernetes' },
  { label: 'ai',     items: 'Gemini · OpenAI · LLaMA · FAISS · pgvector · the occasional fine-tune' },
]
</script>

<template>
  <section id="skills" class="wrap">
    <p class="eyebrow fade-in">stack</p>
    <h2 class="serif fade-in">Tools I reach for.</h2>

    <dl class="stacks">
      <template v-for="s in stacks" :key="s.label">
        <dt class="fade-in">{{ s.label }}</dt>
        <dd class="fade-in">{{ s.items }}</dd>
      </template>
    </dl>

    <p class="aside fade-in">
      I've shipped real production code with everything on this list.
      That doesn't mean I know every footgun, so take it as a starting
      point for a conversation.
    </p>
  </section>
</template>

<style scoped>
h2 {
  font-size: clamp(36px, 5vw, 52px);
  letter-spacing: -0.02em;
  margin: 12px 0 48px;
}

.stacks {
  display: grid;
  grid-template-columns: max-content 1fr;
  column-gap: 56px;
}

dt {
  font-family: var(--mono);
  font-size: 11px;
  color: var(--accent);
  padding: 20px 0;
  border-top: 1px solid var(--rule);
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

dd {
  font-size: 16px;
  color: var(--ink);
  padding: 20px 0;
  border-top: 1px solid var(--rule);
}

dt:last-of-type, dd:last-of-type {
  border-bottom: 1px solid var(--rule);
}

.aside {
  margin-top: 40px;
  max-width: 60ch;
  color: var(--ink-dim);
  font-size: 14px;
  line-height: 1.65;
  font-style: italic;
}

@media (max-width: 640px) {
  .stacks { grid-template-columns: 1fr; }
  dd { padding-top: 4px; border-top: none; }
  dt { padding-bottom: 6px; }
  dt:last-of-type { border-bottom: none; }
  dd:last-of-type { border-bottom: 1px solid var(--rule); }
}
</style>
