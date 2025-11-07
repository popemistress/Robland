import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function VisionSection() {
  const visionImage = PlaceHolderImages.find((img) => img.id === 'vision-image');

  return (
    <section id="vision" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-headline text-primary">
              The Vision
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto md:mx-0">
              A digital nation founded by the best of humanity, built on the principles of sovereignty, merit, and open-source collaboration. We are creating a new paradigm for how we live, work, and create together.
            </p>
          </div>
          <div className="flex justify-center">
            {visionImage && (
              <div className="relative w-full max-w-md aspect-w-4 aspect-h-3">
                 <Image
                  src={visionImage.imageUrl}
                  alt={visionImage.description}
                  fill
                  className="object-cover rounded-lg shadow-xl"
                  data-ai-hint={visionImage.imageHint}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
