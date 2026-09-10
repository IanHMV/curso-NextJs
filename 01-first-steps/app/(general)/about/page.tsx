import type { Metadata } from "next"


export const metadata: Metadata = {
  title: "About",
  description: "SEO Description",
  keywords: ["About Page", "Ian Martinez", "Information", '...']
}

export default function AboutPage() {
  return (

    <main className="flex flex-col items-center p-24">
      <span className="text-5xl">
        About Page
      </span>
    </main>
  )
}