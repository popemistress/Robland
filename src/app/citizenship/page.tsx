import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, ArrowDown } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function CitizenshipPage() {
  const passportImage = PlaceHolderImages.find((img) => img.id === 'passport');

  const benefits = [
    'Access to exclusive channels and events',
    'Priority access to new features and drops',
    'Ability to vote on governance proposals',
    'Unique digital identity in the metaverse',
    'Discounts on partner products and services',
    'Reputation and social status',
  ];

  const investmentPassports = [
    { id: 'dominica-passport', name: 'Dominica' },
    { id: 'antigua-passport', name: 'Antigua and Barbuda' },
    { id: 'vanuatu-passport', name: 'Vanuatu' },
    { id: 'grenada-passport', name: 'Grenada' },
    { id: 'st-lucia-passport', name: 'Saint Lucia' },
    { id: 'egypt-passport', name: 'Egypt' },
    { id: 'st-kitts-passport', name: 'St. Kitts and Nevis' },
    { id: 'turkey-passport', name: 'Turkey' },
  ];

  const allPrograms = [
    {
      id: 'st-lucia-coat',
      name: 'St. Lucia',
      description:
        "St. Lucia's program allows significant visa-free travel to over 140 destinations, with options starting from a USD 240,000 donation, including real estate development opportunities.",
    },
    {
      id: 'st-kitts-coat',
      name: 'St. Kitts and Nevis',
      description:
        "Offering one of the Caribbean's most powerful passports, St. Kitts and Nevis requires a donation starting at USD 250,000 for its well-established citizenship program.",
    },
    {
      id: 'grenada-coat',
      name: 'Grenada',
      description:
        "Grenada's citizenship program includes eligibility for the US E-2 visa, thanks to its treaty with the USA. This program starts with investments conducive to substantial business opportunities.",
    },
    {
      id: 'antigua-coat',
      name: 'Antigua and Barbuda',
      description:
        'This Caribbean nation offers a highly competitive citizenship program starting at USD 230,000, making it an appealing choice for investors seeking both tranquility and global mobility.',
    },
    {
      id: 'dominica-coat',
      name: 'Dominica',
      description:
        'Dominica presents a compelling citizenship option with investment starting from USD 200,000. The program includes attractive real estate investment opportunities.',
    },
    {
      id: 'vanuatu-coat',
      name: 'Vanuatu',
      description:
        "Gain citizenship through a straightforward investment starting at USD 130,000. Vanuatu's program offers rapid processing and extensive visa-free travel, making it ideal for global access.",
    },
    {
      id: 'egypt-coat',
      name: 'Egypt',
      description:
        'Egypt offers a strategic gateway to Africa, Asia, and the Middle East, with citizenship investment of USD 250,000, catering to global investors seeking a broad geographical connection.',
    },
    {
      id: 'turkey-coat',
      name: 'Turkey',
      description:
        "Türkiye's program an inclusive approach to markets in Europe and Asia, with its dynamic and strategic investment opportunities with citizenship investment of USD 400,000",
    },
  ];

  return (
    <div className="bg-background text-foreground flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20">
        <section className="py-16 sm:py-24 text-center bg-primary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-6xl font-headline text-primary">
              Become a Citizen of Robland
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              The Robland Passport is a dynamic NFT that serves as your proof of citizenship in Robland. It is your key to unlocking the full potential of the digital nation.
            </p>
          </div>
        </section>

        <section className="py-16 sm:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Programs</p>
                        <h2 className="text-4xl md:text-5xl font-headline text-primary mt-2">Citizenship by Investment</h2>
                        <div className="w-16 h-1 bg-primary my-6"></div>
                        <p className="text-muted-foreground">
                            Citizenship by investment programs provide you and your family the chance to gain a second citizenship, which opens up the freedom to travel and live around the world. With more than 30 active programs globally, these opportunities offer more than just a new passport—they enhance your access to international markets, increase your personal security, and significantly improve your quality of life. At Robland, we expertly navigate you through the most trusted and effective citizenship investment options, ensuring a smooth and secure path to your new citizenship.
                        </p>
                        <div className="mt-8 flex items-center gap-4">
                            <Button size="lg">Apply Now</Button>
                            <Button size="lg" variant="outline">
                                See More <ArrowDown className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {investmentPassports.map((passportInfo) => {
                            const image = PlaceHolderImages.find((img) => img.id === passportInfo.id);
                            return image ? (
                                <div key={passportInfo.id} className="relative aspect-[3/4]">
                                    <Image
                                        src={image.imageUrl}
                                        alt={`${passportInfo.name} Passport`}
                                        fill
                                        className="object-cover rounded-md shadow-md"
                                        loading="lazy"
                                        quality={50}
                                        sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
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
            <div className="text-left">
                <h2 className="text-4xl md:text-5xl font-headline text-primary">All programs</h2>
                <div className="w-16 h-1 bg-primary mt-4"></div>
            </div>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
              {allPrograms.map((program) => {
                const image = PlaceHolderImages.find((img) => img.id === program.id);
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
                    <h3 className="text-xl font-headline font-semibold text-primary">{program.name}</h3>
                    <p className="mt-2 text-muted-foreground text-sm">{program.description}</p>
                    <Button variant="link" className="mt-2 px-0 text-primary hover:text-primary/80">EXPLORE NOW</Button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl md:text-4xl font-headline text-primary">The Robland Passport</h2>
                <p className="mt-4 text-muted-foreground">
                  Your Passport is a unique, non-transferable NFT that evolves with you. As you contribute to the Robland ecosystem, your Passport will be upgraded with new stamps, achievements, and capabilities. It is a living record of your journey and contributions as a citizen.
                </p>
                <p className="mt-4 text-muted-foreground">
                  Passports are issued on the Solana blockchain, ensuring that your identity is secure, self-sovereign, and resistant to censorship.
                </p>
              </div>
              <div className="order-1 md:order-2 flex justify-center">
                {passportImage && (
                  <div className="relative w-full max-w-sm aspect-[4/5]">
                    <Image
                      src={passportImage.imageUrl}
                      alt={passportImage.description}
                      fill
                      className="object-cover rounded-lg shadow-xl"
                      loading="lazy"
                      quality={60}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      data-ai-hint={passportImage.imageHint}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 bg-primary/5">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-headline text-primary">How to get a Passport</h2>
                </div>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div>
                        <div className="flex justify-center mb-4">
                            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold">1</div>
                        </div>
                        <h3 className="text-xl font-headline font-semibold">Connect Wallet</h3>
                        <p className="mt-2 text-muted-foreground">Connect your Solana wallet (Phantom, Solflare, etc.) to the Robland dApp.</p>
                    </div>
                    <div>
                        <div className="flex justify-center mb-4">
                            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold">2</div>
                        </div>
                        <h3 className="text-xl font-headline font-semibold">Complete Application</h3>
                        <p className="mt-2 text-muted-foreground">Verify your identity and qualifications through our secure application process.</p>
                    </div>
                    <div>
                        <div className="flex justify-center mb-4">
                            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold">3</div>
                        </div>
                        <h3 className="text-xl font-headline font-semibold">Mint your Passport</h3>
                        <p className="mt-2 text-muted-foreground">Once approved, you will be able to mint your official Robland Passport NFT.</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-16 sm:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-headline text-primary">Passport Benefits</h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                        Citizenship in Robland comes with a host of exclusive benefits and responsibilities.
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
                Claim your Robland Passport and begin your journey in the world's first digital nation.
              </p>
              <div className="mt-8">
                <Button size="lg">Claim Your Passport</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
