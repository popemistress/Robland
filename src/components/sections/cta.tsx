import { Button } from '@/components/ui/button';

export default function CtaSection() {
  return (
    <section id="cta" className="py-16 sm:py-24 bg-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-headline text-primary">
            Become a Citizen of Robland
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Join a nation of creators, thinkers, and builders. Claim your citizenship and start shaping the future today.
          </p>
          <div className="mt-8">
            <Button size="lg">Join The Nation</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
