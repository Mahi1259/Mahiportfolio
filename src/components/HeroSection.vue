<script setup lang="ts">
import { useScrollAnimation } from '../composables/useScrollAnimation'
useScrollAnimation()
</script>

<template>
  <section id="hero" class="hero wrap">
    <p class="eyebrow fade-in">hi.</p>

    <h1 class="name serif fade-in">
      Mahidhar Reddy<br />
      <span class="accent">Vaka.</span>
    </h1>

    <p class="lede fade-in">
      Full-stack software developer with strong expertise in
      JavaScript/TypeScript, React, and Next.js. Experienced in building
      scalable web applications and integrating AI technologies.
    </p>

    <p class="lede fade-in">
      Leverages cloud infrastructure with AWS, Docker containerization,
      and CI/CD pipelines to ensure robust deployment and seamless
      scalability. Passionate about creating innovative solutions that
      combine modern web development with emerging technologies to
      deliver impactful results.
    </p>

    <div class="cta fade-in">
      <a href="#projects" class="link">things I've built →</a>
      <a href="mailto:mahidhar1337@gmail.com" class="link muted">or just email me</a>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding-top: 120px;
  padding-bottom: 120px;
}

.name {
  font-size: clamp(56px, 9vw, 104px);
  line-height: 0.96;
  letter-spacing: -0.03em;
  margin: 18px 0 36px;
  font-weight: 400;
}

.accent {
  color: var(--accent);
  font-style: italic;
  font-variation-settings: 'opsz' 144, 'SOFT' 100;
}

.lede {
  font-size: 18px;
  line-height: 1.65;
  max-width: 56ch;
  color: var(--ink);
  margin-bottom: 18px;
}

.lede a {
  color: var(--accent);
  border-bottom: 1px solid color-mix(in oklab, var(--accent) 40%, transparent);
  transition: border-color 180ms;
}

.lede a:hover { border-bottom-color: var(--accent); }

.cta {
  margin-top: 40px;
  display: flex;
  gap: 28px;
  flex-wrap: wrap;
  font-size: 15px;
}

.link {
  border-bottom: 1px solid var(--rule);
  padding-bottom: 4px;
  transition: border-color 200ms, color 200ms;
}

.link:hover { border-bottom-color: var(--accent); color: var(--accent); }
.link.muted { color: var(--ink-soft); }

@media (max-width: 640px) {
  .hero { padding-top: 72px; padding-bottom: 72px; }
}
</style>
