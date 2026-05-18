<script setup lang="ts">
import { useScrollAnimation } from '../composables/useScrollAnimation'
useScrollAnimation()

const wins = [
  { name: 'Gender Equality Award',     where: 'Hackathon Piaget, Geneva' },
  { name: 'Cybersecurity Hackathon',   where: 'Outpost24' },
  { name: 'Microsoft MTA in Python',   where: 'certification' },
  { name: 'JEE qualified',             where: '2019, India' },
]
</script>

<template>
  <section id="awards" class="wrap">
    <p class="eyebrow fade-in">odds &amp; ends</p>
    <h2 class="serif fade-in">A few things I'm quietly proud of.</h2>

    <ul class="wins">
      <li v-for="w in wins" :key="w.name" class="fade-in">
        <span class="n">{{ w.name }}</span>
        <span class="w">{{ w.where }}</span>
      </li>
    </ul>
  </section>
</template>

<style scoped>
h2 {
  font-size: clamp(36px, 5vw, 52px);
  letter-spacing: -0.02em;
  margin: 12px 0 48px;
}

.wins { border-top: 1px solid var(--rule); }

.wins li {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 24px;
  padding: 18px 0;
  border-bottom: 1px solid var(--rule);
  align-items: baseline;
}

.n { color: var(--ink); font-size: 16px; }
.w { color: var(--ink-soft); font-size: 13px; font-family: var(--mono); }

@media (max-width: 600px) {
  .wins li { grid-template-columns: 1fr; gap: 4px; }
}
</style>
