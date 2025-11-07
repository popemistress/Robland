import { Zap, GalleryThumbnails, Rocket, Database } from 'lucide-react';
import type { LucideProps } from 'lucide-react';
import type { ForwardRefExoticComponent, RefAttributes } from 'react';

type TechItem = {
  name: string;
  description: string;
  icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
};

const techStack: TechItem[] = [
  {
    name: 'Solana',
    description: 'High-performance blockchain for fast, secure, and scalable applications.',
    icon: Zap,
  },
  {
    name: 'Serum',
    description: 'A decentralized exchange with a fully on-chain order book.',
    icon: Database,
  },
  {
    name: 'Metaplex',
    description: 'The standard for creating and managing NFTs on Solana.',
    icon: GalleryThumbnails,
  },
  {
    name: 'Star Atlas',
    description: 'A next-gen gaming metaverse emerging from the confluence of state of the art blockchain.',
    icon: Rocket,
  },
];

export default function TechnologySection() {
  return (
    <section id="technology" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-headline text-primary">
            The Technology
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Built on the most performant technology to ensure a seamless and decentralized experience for all citizens.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {techStack.map((tech) => (
            <div key={tech.name} className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary/10 rounded-full">
                  <tech.icon className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-headline font-semibold text-foreground">
                {tech.name}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {tech.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
