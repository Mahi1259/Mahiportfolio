import { onMounted, onUnmounted } from 'vue'

export function useScrollAnimation() {
  let io: IntersectionObserver | null = null

  onMounted(() => {
    io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('show')
            io?.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )

    document.querySelectorAll('.fade-in').forEach((el) => io!.observe(el))
  })

  onUnmounted(() => io?.disconnect())
}
