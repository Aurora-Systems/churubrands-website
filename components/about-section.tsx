export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-primary text-sm uppercase tracking-[0.2em] mb-2">About Us</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              A Legacy of Quality Poultry Production
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded with a vision to transform Zimbabwe&apos;s poultry industry, Churubrands has grown to become a
                trusted name in end-to-end chicken production. From our state-of-the-art hatchery to our modern
                processing facility, we maintain the highest standards at every stage.
              </p>
              <p>
                Our integrated approach ensures complete traceability and quality control, giving our customers
                confidence in every product that bears the Churubrands name.
              </p>
              <p>
                Located in the fertile farmlands of Glendale, Bindura, we leverage Zimbabwe&apos;s natural advantages
                while implementing global best practices in poultry management.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-8">
              <div>
                <p className="font-serif text-3xl font-bold text-primary">5+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <p className="font-serif text-3xl font-bold text-primary">100K+</p>
                <p className="text-sm text-muted-foreground">Birds Monthly</p>
              </div>
              <div>
                <p className="font-serif text-3xl font-bold text-primary">50+</p>
                <p className="text-sm text-muted-foreground">Partners</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden">
              <img
                src="https://cdn.clipond.com/ChuruBrands/2148302976.jpg"
                alt="Churubrands poultry farm team"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-lg max-w-xs hidden lg:block">
              <p className="font-serif text-lg font-semibold mb-2">
                &quot;Quality is not an act, it&apos;s a habit.&quot;
              </p>
              <p className="text-sm text-primary-foreground/80">— Our Guiding Principle</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
