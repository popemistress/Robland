import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function AboutSolandSection() {
  const stats = [
    {
      value: '15 +',
      label: 'YEARS OF EXPERIENCE',
    },
    {
      value: '5,000 +',
      label: 'SATISFIED CLIENTS',
    },
    {
      value: '60 +',
      label: 'DIFFERENT COUNTRIES',
    },
  ];

  const aboutImages = [
    PlaceHolderImages.find((img) => img.id === 'business-meeting'),
    PlaceHolderImages.find((img) => img.id === 'business-jet'),
  ];

  const testimonials = [
    {
      name: 'Linda J.',
      image: PlaceHolderImages.find((img) => img.id === 'testimonial-1'),
      text: '"Your detailed knowledge of the Bali property market made all the difference. Your team was there at every step, ensuring a smooth transaction and transition. I now enjoy my retirement among young people in a stunning villa overlooking the sea, thanks to your impeccable service."',
      rating: 5,
    },
    {
      name: 'Jean Paul L.',
      image: PlaceHolderImages.find((img) => img.id === 'testimonial-2'),
      text: '"Vanuatu\'s citizenship program was remarkably straightforward, and the benefits were immediate. We now enjoy a lifestyle that combines security, mobility, and financial freedom."',
      rating: 5,
    },
    {
      name: 'Rajesh K.',
      image: PlaceHolderImages.find((img) => img.id === 'testimonial-3'),
      text: '"The purchase process was streamlined and transparent, and your team\'s support was fantastic. They went above and beyond to ensure everything was perfect. Now, my family and I enjoy our holiday home and the beautiful Bali lifestyle."',
      rating: 5,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#1a1a1a] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Images with stats */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {aboutImages[0] && (
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
                  <Image
                    src={aboutImages[0].imageUrl}
                    alt={aboutImages[0].description}
                    fill
                    className="object-cover"
                    loading="lazy"
                    quality={60}
                    sizes="(max-width: 768px) 50vw, 25vw"
                    data-ai-hint={aboutImages[0].imageHint}
                  />
                </div>
              )}
              {aboutImages[1] && (
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
                  <Image
                    src={aboutImages[1].imageUrl}
                    alt={aboutImages[1].description}
                    fill
                    className="object-cover"
                    loading="lazy"
                    quality={60}
                    sizes="(max-width: 768px) 50vw, 25vw"
                    data-ai-hint={aboutImages[1].imageHint}
                  />
                </div>
              )}
            </div>

            {/* Stats overlays */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-around items-end pb-8 px-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center bg-[#8B7355] rounded-full w-24 h-24 sm:w-32 sm:h-32 text-center shadow-xl"
                >
                  <div className="text-xl sm:text-2xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-xs font-medium text-white uppercase mt-1 px-2">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-headline">
              About <span className="italic font-light">Robland</span>
            </h2>
            <div className="w-16 h-1 bg-[#8B7355]"></div>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Robland stands as your premier partner in navigating the landscape of
              global opportunities. Based in the heart of Dubai, we specialize in
              exclusive investment services—citizenship, residency, elite real estate, and
              company formation—carefully designed to transform your aspirations into
              achievements. Join us to shape a legacy of excellence and access to the
              world's most desirable destinations.
            </p>
            <div className="pt-4">
              <Link href="/about">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-[#1a1a1a] transition-colors"
                >
                  LEARN MORE
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
