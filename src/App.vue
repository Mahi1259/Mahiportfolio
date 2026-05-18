<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const stuck = ref(false)

function onScroll() {
  stuck.value = window.scrollY > 24
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header :class="{ stuck }">
    <div class="wrap bar">
      <a href="#top" class="mark">mrv</a>
      <nav>
        <a href="#about">about</a>
        <a href="#work">work</a>
        <a href="#projects">projects</a>
        <a href="#contact">contact</a>
      </nav>
    </div>
  </header>

  <main id="top">
    <router-view />
  </main>

  <footer>
    <div class="wrap foot">
      <span>Mahidhar Reddy Vaka</span>
      <span>Geneva, CH</span>
    </div>
  </footer>
</template>

<style scoped>
header {
  position: sticky;
  top: 0;
  z-index: 50;
  transition: border-color 200ms ease, background-color 200ms ease;
  border-bottom: 1px solid transparent;
}

header.stuck {
  background: color-mix(in oklab, var(--bg) 88%, transparent);
  backdrop-filter: saturate(140%) blur(10px);
  -webkit-backdrop-filter: saturate(140%) blur(10px);
  border-bottom-color: var(--rule);
}

.bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 56px;
}

.mark {
  font-family: var(--mono);
  font-size: 13px;
  letter-spacing: 0.04em;
  color: var(--ink);
}

.mark::after {
  content: ' ▌';
  color: var(--accent);
  margin-left: 2px;
}

nav {
  display: flex;
  gap: 22px;
  font-size: 14px;
  color: var(--ink-soft);
}

nav a {
  padding: 4px 0;
  border-bottom: 1px solid transparent;
  transition: color 180ms, border-color 180ms;
}

nav a:hover {
  color: var(--ink);
  border-bottom-color: var(--accent);
}

footer {
  border-top: 1px solid var(--rule);
  padding: 32px 0;
  color: var(--ink-dim);
  font-size: 13px;
  margin-top: 80px;
}

.foot {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
  font-family: var(--mono);
  font-size: 12px;
}

@media (max-width: 600px) {
  nav { gap: 14px; font-size: 13px; }
  .foot { font-size: 11px; }
}
</style>
