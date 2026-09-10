import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pricing",
  description: "Pricing Page From Ian Martinez",
  keywords: ["Pricing Page", "Ian Martinez", "Pricing", '...']
}

export default function PricingPage() {
  return (
    <>
      <main className="flex flex-col items-center p-24">
        <span className="text-5xl">
          Pricing Page
        </span>
      </main>
    </>
  )
}