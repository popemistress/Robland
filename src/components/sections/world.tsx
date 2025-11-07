import Globe from '@/components/globe';

export default function WorldSection() {
  return (
    <section id="world" className="relative py-16 sm:py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-headline text-primary">
          The World
        </h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          An ever-expanding world, built by its citizens. Explore our digital realm, discover new territories, and contribute to its growth.
        </p>
      </div>
      <div className="relative h-[500px] md:h-[600px] w-full mt-8">
        <Globe />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/0 to-background pointer-events-none"></div>
         <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background to-transparent pointer-events-none"></div>
      </div>
    </section>
  );
}
