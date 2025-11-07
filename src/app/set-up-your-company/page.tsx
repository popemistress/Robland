'use client';

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowDown } from 'lucide-react';

export default function SetUpCompanyPage() {
  const setUpCompanyImage = PlaceHolderImages.find(
    (img) => img.id === 'company-setup-hero'
  );

  const allCountries = [
    {
      id: 'uae-company',
      name: 'UAE',
      image: PlaceHolderImages.find((img) => img.id === 'uae-company'),
    },
    {
      id: 'usa-company',
      name: 'USA',
      image: PlaceHolderImages.find((img) => img.id === 'usa-company'),
    },
    {
      id: 'uk-company',
      name: 'UK',
      image: PlaceHolderImages.find((img) => img.id === 'uk-company'),
    },
    {
      id: 'singapore-company',
      name: 'Singapore',
      image: PlaceHolderImages.find((img) => img.id === 'singapore-company'),
    },
    {
      id: 'hong-kong-company',
      name: 'Hong Kong',
      image: PlaceHolderImages.find((img) => img.id === 'hong-kong-company'),
    },
  ];

  return (
    <div className="bg-background text-foreground flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20">
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  Services
                </p>
                <h2 className="text-4xl md:text-5xl font-headline text-primary mt-2">
                  Set Up Your Company
                </h2>
                <div className="w-16 h-1 bg-primary my-6"></div>
                <p className="text-muted-foreground">
                  At Robland, we provide comprehensive business setup and company formation services in the UAE and other leading global jurisdictions. Our expert consultants guide you through every step of the process, ensuring a smooth and efficient setup for your new venture. We tailor our services to your specific business needs, offering a premier, hassle-free experience.
                </p>
                <p className="mt-4 text-muted-foreground">
                  With Robland, you gain access to a network of strategic partnerships and resources that facilitate your entry into new markets. Let us help you establish your company and navigate the complexities of international business, allowing you to focus on growth and success.
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <Button size="lg">Send An Inquiry</Button>
                  <Button size="lg" variant="outline">
                    See More <ArrowDown className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              {setUpCompanyImage && (
                <div className="relative aspect-[4/3]">
                  <Image
                    src={setUpCompanyImage.imageUrl}
                    alt={setUpCompanyImage.description}
                    fill
                    className="object-cover rounded-md shadow-md"
                    loading="lazy"
                    quality={60}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    data-ai-hint={setUpCompanyImage.imageHint}
                  />
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 bg-primary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-left">
              <h2 className="text-4xl md:text-5xl font-headline text-primary">
                All countries
              </h2>
              <div className="w-16 h-1 bg-primary mt-4"></div>
            </div>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {allCountries.map((country) => (
                <Card
                  key={country.id}
                  className="overflow-hidden group transition-shadow hover:shadow-xl"
                >
                  <CardContent className="p-0">
                    {country.image && (
                      <div className="relative aspect-video">
                        <Image
                          src={country.image.imageUrl}
                          alt={`View of ${country.name}`}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                          quality={50}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          data-ai-hint={country.image.imageHint}
                        />
                      </div>
                    )}
                  </CardContent>
                  <div className="p-6">
                    <h3 className="text-xl font-headline font-semibold text-primary">
                      {country.name}
                    </h3>
                    <Button
                      variant="link"
                      className="mt-2 px-0 text-primary hover:text-primary/80"
                    >
                      EXPLORE NOW
                    </Button>
                  </div>
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
