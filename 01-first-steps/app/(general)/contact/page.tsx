
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Page From Ian Martinez",
  keywords: ["Contact Page", "Ian Martinez", "Contact", '...']
}


export default function ContactPage() {
  return (
    <>
      <main className="flex flex-col items-center p-24">
        <span className="text-5xl">
          Contact Page
        </span>
      </main>
    </>
  )
}