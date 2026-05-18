<script setup lang="ts">
import { useScrollAnimation } from '../composables/useScrollAnimation'
useScrollAnimation()
</script>

<template>
  <section id="contact" class="wrap">
    <p class="eyebrow fade-in">contact</p>
    <h2 class="serif fade-in">Get in touch.</h2>

    <p class="lede fade-in">
      Based in Geneva and open to full-time roles, ideally ones where AI
      is part of the toolkit and not the entire pitch. Happy to grab a
      coffee if you're in town.
    </p>

    <ul class="links">
      <li class="fade-in">
        <span class="k">email</span>
        <a href="mailto:mahidhar1337@gmail.com">mahidhar1337@gmail.com</a>
      </li>
      <li class="fade-in">
        <span class="k">github</span>
        <a href="https://github.com/mahi1259" target="_blank" rel="noopener">github.com/mahi1259 ↗</a>
      </li>
      <li class="fade-in">
        <span class="k">linkedin</span>
        <a href="https://www.linkedin.com/in/mahidhar-reddy-vaka-064b191a1/" target="_blank" rel="noopener">in/mahidhar-reddy-vaka ↗</a>
      </li>
    </ul>
  </section>
</template>

<style scoped>
h2 {
  font-size: clamp(40px, 6vw, 64px);
  letter-spacing: -0.02em;
  line-height: 1.05;
  margin: 12px 0 32px;
}

.lede {
  font-size: 17px;
  line-height: 1.65;
  color: var(--ink-soft);
  max-width: 56ch;
  margin-bottom: 44px;
}

.links { display: flex; flex-direction: column; }

.links li {
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 16px;
  padding: 18px 0;
  border-top: 1px solid var(--rule);
  align-items: baseline;
}

.links li:last-child { border-bottom: 1px solid var(--rule); }

.k {
  font-family: var(--mono);
  font-size: 11px;
  color: var(--ink-soft);
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.links a {
  color: var(--ink);
  border-bottom: 1px solid transparent;
  padding-bottom: 2px;
  transition: color 180ms, border-color 180ms;
  width: fit-content;
}

.links a:hover {
  color: var(--accent);
  border-bottom-color: var(--accent);
}

@media (max-width: 600px) {
  .links li { grid-template-columns: 80px 1fr; }
}
</style>
