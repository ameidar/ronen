import Image from 'next/image'

export default function About() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-light">About Us</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Ronen Meidar Architecture & Interior Design, a full service Architectural studio, located in Israel for
                over 25 years, Developing top-quality private residential, our clients can feel the unparalleled
                experience of enjoying a unique, sustainable, balanced spaces that are also a high value financial real
                estate asset.
              </p>
              <p>
                With a portfolio that includes a range of private commissions that are characterized by their
                innovation, elegance, and attention to details. As a practice, we are wholly interested in the
                realization of contemporary architecture.
              </p>
              <p>
                As a designer, it is the aspire to a simplicity distilled from a core concept, itself a product of both
                brief and site. In order to develop these concepts with an honesty and transparency and through the
                careful arrangement and detailing of materials, this process culminates in the creation of specifically
                detailed structures with a clear relationship to their context.
              </p>
            </div>
          </div>
          <div className="relative w-full max-w-[300px] mx-auto">
            <Image
              src="/ronen.png"
              alt="MEIDAR ARCHITECTS Studio"
              width={300}
              height={300}
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
