'use client';

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, ArrowDown } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function ResidencyPage() {
  const residencyImage = PlaceHolderImages.find(
    (img) => img.id === 'residency-merch'
  );

  const benefits = [
    'Access to the Robland Discord community',
    'Early access to select new features',
    'Unique role in the Discord server',
    'Discounts on future merchandise drops',
  ];

  const allPrograms = [
    {
      id: 'portugal-coat',
      name: 'Portugal Golden Visa',
      description:
        "The Portugal Golden Visa Program offers a gateway to visa-free movement within Europe's Schengen Area along with the rights to live, work, and study in Portugal.",
    },
    {
      id: 'spain-coat',
      name: 'Spain Golden Visa',
      description:
        'The Spain Golden Visa Program provides a route to visa-free access across Europe\'s Schengen Area, along with the opportunity to live, work, and study in Spain.',
    },
    {
      id: 'greece-coat',
      name: 'Greece Golden Visa',
      description:
        'The Greece Golden Visa Program allows for residency through a minimum real estate investment of EUR 250,000, with residence permits typically issued within 120 days.',
    },
    {
      id: 'italy-coat',
      name: 'Italian Residence Permit',
      description:
        "The Italian Residence Permit (Residenza Elettiva) offers a unique opportunity for financially independent individuals to live, travel, and enjoy Italy's rich culture and lifestyle while gaining visa-free access to the Schengen Area.",
    },
    {
      id: 'cyprus-coat',
      name: 'Cyprus Permanent Residency',
      description:
        'The Cyprus Permanent Residency Program offers an ideal pathway for individuals interested in international real estate investments and securing a prime residential location.',
    },
    {
      id: 'malta-coat',
      name: 'Malta Permanent Residency',
      description:
        "The Malta Permanent Residence Program provides the freedom to travel within Europe's Schengen Area and offers security within the EU's social and legal systems.",
    },
    {
      id: 'france-coat',
      name: 'France Start-Up Visa',
      description:
        'France offers multiple residence programs tailored for investors, entrepreneurs, and talents, providing access to the entire EU market and a pathway to citizenship.',
    },
    {
      id: 'spain-nomad-coat',
      name: 'Spain Digital Nomad Visa',
      description:
        'The Spain Digital Nomad Visa offers remote professionals the chance to live and work legally in Spain, travel freely across the Schengen Area, and include family members starting from €13,500.',
    },
  ];

  const residencyByInvestmentImages = [
    'residency-big-ben',
    'residency-ibiza',
    'residency-malta-cathedral',
    'residency-palm-trees',
    'residency-white-cliffs',
    'residency-budapest',
    'residency-toronto',
    'residency-santorini',
    'residency-barcelona',
    'residency-new-york',
    'residency-valletta',
    'residency-london-eye',
  ];

  return (
    <div className="bg-background text-foreground flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20">
        <section className="py-16 sm:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Programs</p>
                        <h2 className="text-4xl md:text-5xl font-headline text-primary mt-2">Residency by investment</h2>
                        <div className="w-16 h-1 bg-primary my-6"></div>
                        <p className="text-muted-foreground">
                            Residence by investment programs, also known as golden visa programs, enable high-net-worth individuals to extend their lifestyles and business interests internationally. These programs offer the right to live, work, study, and access healthcare in new countries. Having the flexibility to establish residence in key global locations is an essential part of wealth and lifestyle management for our clients. At Robland, we specialize in guiding you through the world's leading residence by investment programs, known for their excellent business environments, high quality of life, and opportunities for eventual citizenship.
                        </p>
                        <div className="mt-8 flex items-center gap-4">
                            <Button size="lg">Apply Now</Button>
                            <Button size="lg" variant="outline">
                                See More <ArrowDown className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                        {residencyByInvestmentImages.map((imageId) => {
                            const image = PlaceHolderImages.find((img) => img.id === imageId);
                            return image ? (
                                <div key={imageId} className="relative aspect-[3/4]">
                                    <Image
                                        src={image.imageUrl}
                                        alt={image.description}
                                        fill
                                        className="object-cover rounded-md shadow-md"
                                        loading="lazy"
                                        quality={50}
                                        sizes="(max-width: 640px) 33vw, (max-width: 768px) 25vw, 20vw"
                                        data-ai-hint={image.imageHint}
                                    />
                                </div>
                            ) : null;
                        })}
                    </div>
                </div>
            </div>
        </section>

        <section className="py-16 sm:py-24 bg-primary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-headline text-primary">
                  Residency by Merch
                </h2>
                <p className="mt-4 text-muted-foreground">
                  The easiest way to become a resident is by purchasing
                  official Robland merchandise. Each item comes with a unique
                  code that can be used to claim your residency status. This
                  proves your skin-in-the-game and grants you initial access to
                  the community.
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <Button size="lg">Shop Now</Button>
                </div>
              </div>
              <div className="flex justify-center">
                {residencyImage && (
                  <div className="relative w-full max-w-md aspect-square">
                    <Image
                      src={residencyImage.imageUrl}
                      alt={residencyImage.description}
                      fill
                      className="object-cover rounded-lg shadow-xl"
                      loading="lazy"
                      quality={60}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      data-ai-hint={residencyImage.imageHint}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-left">
              <h2 className="text-4xl md:text-5xl font-headline text-primary">
                All programs
              </h2>
              <div className="w-16 h-1 bg-primary mt-4"></div>
            </div>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
              {allPrograms.map((program) => {
                const image = PlaceHolderImages.find(
                  (img) => img.id === program.id
                );
                return (
                  <div key={program.id}>
                    {image && (
                      <div className="relative h-24 mb-4">
                        <Image
                          src={image.imageUrl}
                          alt={`${program.name} coat of arms`}
                          fill
                          className="object-contain"
                          loading="lazy"
                          quality={50}
                          sizes="(max-width: 768px) 50vw, 25vw"
                          data-ai-hint={image.imageHint}
                        />
                      </div>
                    )}
                    <h3 className="text-xl font-headline font-semibold text-primary">
                      {program.name}
                    </h3>
                    <p className="mt-2 text-muted-foreground text-sm">
                      {program.description}
                    </p>
                    <Button
                      variant="link"
                      className="mt-2 px-0 text-primary hover:text-primary/80"
                    >
                      EXPLORE NOW
                    </Button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 bg-primary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-headline text-primary">
                How to get Residency
              </h2>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="flex justify-center mb-4">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold">
                    1
                  </div>
                </div>
                <h3 className="text-xl font-headline font-semibold">
                  Purchase Merch
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Buy any item from the official Robland store to receive a
                  residency claim code.
                </p>
              </div>
              <div>
                <div className="flex justify-center mb-4">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold">
                    2
                  </div>
                </div>
                <h3 className="text-xl font-headline font-semibold">
                  Connect Wallet
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Connect your Solana wallet to the Robland dApp to verify your
                  purchase.
                </p>
              </div>
              <div>
                <div className="flex justify-center mb-4">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold">
                    3
                  </div>
                </div>
                <h3 className="text-xl font-headline font-semibold">
                  Claim Residency
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Enter your claim code to mint your residency token and join
                  the community.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-headline text-primary">
                Residency Benefits
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                As a resident, you'll get early access to the Robland ecosystem
                and community.
              </p>
            </div>
            <div className="mt-12 max-w-3xl mx-auto">
              <Card>
                <CardContent className="p-6">
                  <ul className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1 mr-3" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 bg-primary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-headline text-primary">
                Ready to Join?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Get your official Robland merchandise and start your journey as
                a resident today.
              </p>
              <div className="mt-8">
                <Button size="lg">Visit The Store</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
