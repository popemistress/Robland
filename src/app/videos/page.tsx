import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { PlayCircle } from 'lucide-react';

export default function VideosPage() {
  const videos = [
    {
      id: 1,
      title: 'Welcome to Robland: The Future of Citizenship',
      description: 'An overview of our mission, vision, and the services we provide.',
      image: PlaceHolderImages.find((img) => img.id === 'hero-background'),
    },
    {
      id: 2,
      title: 'A Guide to Citizenship by Investment in the Caribbean',
      description: 'Explore the top CBI programs in the Caribbean, including St. Kitts, Grenada, and St. Lucia.',
      image: PlaceHolderImages.find((img) => img.id === 'st-lucia-passport'),
    },
    {
      id: 3,
      title: 'How to Set Up a Company in Dubai',
      description: 'A step-by-step guide to company formation in one of the world\'s leading business hubs.',
      image: PlaceHolderImages.find((img) => img.id === 'uae-company'),
    },
    {
      id: 4,
      title: 'Client Testimonial: My Journey to a Second Passport',
      description: 'Hear from a Robland client about their experience acquiring a second citizenship.',
      image: PlaceHolderImages.find((img) => img.id === 'vision-image'),
    },
  ];

  return (
    <div className="bg-background text-foreground flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20">
        <section className="py-16 sm:py-24 text-center bg-primary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-6xl font-headline text-primary">
              Videos
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Watch our latest videos and learn more about global citizenship.
            </p>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
              {videos.map((video) => (
                <Card key={video.id} className="overflow-hidden group">
                  <div className="relative aspect-video">
                    {video.image && (
                      <Image
                        src={video.image.imageUrl}
                        alt={video.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                        quality={50}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        data-ai-hint={video.image.imageHint}
                      />
                    )}
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                       <PlayCircle className="h-20 w-20 text-white/80 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-headline font-semibold text-primary">{video.title}</h3>
                    <p className="mt-2 text-muted-foreground text-sm">{video.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
