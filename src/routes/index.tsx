import { createFileRoute } from '@tanstack/react-router'
import { Hero } from '#/components/hero'
import { Contact } from '#/components/contact'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <main>
      <Hero />
      <Contact />
    </main>
  )
}
