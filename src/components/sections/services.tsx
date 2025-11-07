import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function ServicesSection() {
  const services = [
    {
      id: 'citizenship',
      title: 'Citizenship by Investment',
      description: 'Secure a second passport, your travel freedom and business opportunities worldwide with personalized guidance every step of the way.',
      image: PlaceHolderImages.find((img) => img.id === 'passport'),
      link: '/citizenship',
    },
    {
      id: 'residency',
      title: 'Residency by Investment',
      description: 'Obtain residency in premier destinations offering enhanced lifestyle, education, and financial benefits through a streamlined process.',
      image: PlaceHolderImages.find((img) => img.id === 'dominica-passport'),
      link: '/residency',
    },
    {
      id: 'real-estate',
      title: 'Real Estate Investment',
      description: "Invest in luxury properties in the world's most desirable locations, ensuring significant returns and a high quality of life.",
      image: PlaceHolderImages.find((img) => img.id === 'international-real-estate'),
      link: '/real-estate',
    },
    {
      id: 'company',
      title: 'Company Set Up',
      description: 'Launch your business in advantageous jurisdictions with our expert support in ensuring legal compliance, tax benefits, and operational success.',
      image: PlaceHolderImages.find((img) => img.id === 'company-setup-hero'),
      link: '/set-up-your-company',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">
            OUR SERVICES
          </p>
          <h2 className="text-4xl md:text-5xl font-headline text-primary">
            What we offer
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <Link
              key={service.id}
              href={service.link}
              className="group bg-background rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              {service.image && (
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image.imageUrl}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                    quality={60}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    data-ai-hint={service.image.imageHint}
                  />
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-headline font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-4">
                  {service.description}
                </p>
                <span className="text-sm font-medium text-primary hover:underline">
                  EXPLORE NOW
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
