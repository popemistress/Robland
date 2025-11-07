import Image from 'next/image';
import { Star } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function TestimonialsSection() {
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
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">
            TESTIMONIALS
          </p>
          <h2 className="text-3xl md:text-4xl font-headline text-foreground">
            Our satisfied clients
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-4"
            >
              {/* Client Image */}
              {testimonial.image && (
                <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-[#8B7355]">
                  <Image
                    src={testimonial.image.imageUrl}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    loading="lazy"
                    quality={60}
                    sizes="96px"
                    data-ai-hint={testimonial.image.imageHint}
                  />
                </div>
              )}

              {/* Star Rating */}
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[#8B7355] text-[#8B7355]"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {testimonial.text} — {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
