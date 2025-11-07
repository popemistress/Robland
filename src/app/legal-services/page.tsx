'use client';

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowDown } from 'lucide-react';

export default function LegalServicesPage() {
  const legalServicesHeroImage = PlaceHolderImages.find(
    (img) => img.id === 'legal-services-hero'
  );

  const allServices = [
    {
      id: 'last-will-testament',
      name: 'Last Will & Testament',
      description: 'The Last Will and Testament Program provides comprehensive support to ensure your final wishes are clearly documented and legally binding. We guide you through creating a will that safeguards your assets and provides for your loved ones.',
      image: PlaceHolderImages.find((img) => img.id === 'last-will-testament'),
    },
    {
      id: 'trust-foundation',
      name: 'Trust & Foundation',
      description: "A Trust or Foundation offers a strategic way to manage your assets, protect your wealth, and create a lasting legacy. We provide expert guidance on structuring these entities to align with your long-term financial and philanthropic goals, ensuring your contributions have a lasting impact.",
      image: PlaceHolderImages.find((img) => img.id === 'trust-foundation'),
    },
    {
      id: 'power-of-attorney',
      name: 'Power of Attorney',
      description: "A Power of Attorney is a crucial legal tool that grants a trusted individual the authority to make decisions on your behalf if you become unable to do so. We assist you in establishing this arrangement to ensure your affairs are managed according to your wishes, providing peace of mind for you and your family.",
      image: PlaceHolderImages.find((img) => img.id === 'power-of-attorney'),
    },
    {
      id: 'company-formation-legal',
      name: 'Company Formation',
      description: "Our Company Formation services provide expert guidance to help you establish your business with a solid legal foundation. We navigate the complexities of incorporation, ensuring compliance and setting your company up for success.",
      image: PlaceHolderImages.find((img) => img.id === 'company-formation-legal'),
    },
    {
        id: 'real-estate-conveyancing',
        name: 'Real Estate Conveyancing',
        description: "Our Real Estate Conveyancing services ensure a smooth and secure property transaction. We handle all the legal details, from drafting contracts to transferring ownership, so you can invest with confidence and peace of mind.",
        image: PlaceHolderImages.find((img) => img.id === 'real-estate-conveyancing'),
    },
    {
        id: 'litigation',
        name: 'Litigation',
        description: "Our Litigation services offer expert legal representation to protect your interests in complex disputes. We provide strategic counsel and advocacy to navigate legal challenges and achieve the best possible outcome in or out of court.",
        image: PlaceHolderImages.find((img) => img.id === 'litigation'),
    },
    {
      id: 'civil-disputes',
      name: 'Civil Disputes',
      description: 'Our legal team provides expert representation in civil disputes, helping you navigate conflicts and reach favorable resolutions. We handle a wide range of cases with strategic advocacy and a commitment to protecting your rights.',
      image: PlaceHolderImages.find(img => img.id === 'civil-disputes')
    },
    {
      id: 'criminal-disputes',
      name: 'Criminal Disputes',
      description: 'Facing criminal charges requires a strong defense. Our experienced attorneys are dedicated to protecting your rights and providing a robust defense to achieve the best possible outcome in your case.',
      image: PlaceHolderImages.find(img => img.id === 'criminal-disputes')
    },
    {
      id: 'real-estate-construction',
      name: 'Real Estate and Construction',
      description: 'We offer specialized legal services for real estate and construction projects, from contract negotiations to dispute resolution. Our expertise ensures your investments are protected and your projects proceed smoothly.',
      image: PlaceHolderImages.find(img => img.id === 'real-estate-construction')
    },
    {
      id: 'legal-status-disputes',
      name: 'Legal Status Disputes',
      description: 'Our firm handles disputes related to legal status with precision and care. We provide expert guidance on immigration, residency, and citizenship matters to help you secure your standing.',
      image: PlaceHolderImages.find(img => img.id === 'legal-status-disputes')
    },
    {
      id: 'trade-investment-disputes',
      name: 'Trade and Investment Disputes',
      description: 'We represent clients in international trade and investment disputes, offering strategic advice to navigate complex regulations and protect your cross-border business interests.',
      image: PlaceHolderImages.find(img => img.id === 'trade-investment-disputes')
    },
    {
      id: 'commercial-corporates',
      name: 'Commercial Corporates',
      description: 'Our corporate law services cater to businesses of all sizes, providing expert advice on mergers, acquisitions, and corporate governance. We help you navigate the business landscape with confidence.',
      image: PlaceHolderImages.find(img => img.id === 'commercial-corporates')
    },
    {
      id: 'insurance',
      name: 'Insurance',
      description: 'We offer comprehensive legal support for insurance matters, from policy review to claims disputes. Our team ensures your interests are protected and you receive the coverage you deserve.',
      image: PlaceHolderImages.find(img => img.id === 'insurance')
    },
    {
      id: 'banking-finance',
      name: 'Banking and Finance',
      description: 'Our expertise in banking and finance law allows us to provide strategic counsel on loans, investments, and regulatory compliance. We help you navigate the financial world with confidence and security.',
      image: PlaceHolderImages.find(img => img.id === 'banking-finance')
    },
    {
      id: 'information-technology',
      name: 'Information technology (cybercrimes)',
      description: 'In the digital age, protecting your online assets is crucial. We offer expert legal services for cybercrime and IT-related disputes, safeguarding your digital presence and intellectual property.',
      image: PlaceHolderImages.find(img => img.id === 'information-technology')
    },
    {
      id: 'debts-collection',
      name: 'Debts Collection',
      description: 'Our firm provides efficient and ethical debt collection services. We work to recover outstanding debts while maintaining professional integrity and ensuring compliance with all legal standards.',
      image: PlaceHolderImages.find(img => img.id === 'debts-collection')
    },
    {
      id: 'intellectual-property',
      name: 'Intellectual Property',
      description: 'Protecting your creative and intellectual assets is our priority. We offer comprehensive services for trademarks, copyrights, and patents to ensure your innovations are secure.',
      image: PlaceHolderImages.find(img => img.id === 'intellectual-property')
    },
    {
      id: 'arbitration',
      name: 'Arbitration',
      description: 'We provide expert guidance in arbitration, offering a private and efficient alternative to litigation. Our team works to resolve disputes and achieve favorable outcomes outside the courtroom.',
      image: PlaceHolderImages.find(img => img.id === 'arbitration')
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
                  Legal Services
                </h2>
                <div className="w-16 h-1 bg-primary my-6"></div>
                <p className="text-muted-foreground">
                  At Robland, our team of experienced legal advisors and lawyers offers a full range of services to protect your assets and preserve your wealth. We specialize in crafting personalized solutions that align with your unique needs, ensuring your legacy is secure for generations to come.
                </p>
                <p className="mt-4 text-muted-foreground">
                  With our expertise, you can confidently navigate the complexities of legal and financial planning. Let us help you build a solid foundation for your future, providing peace of mind and lasting security for you and your loved ones.
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <Button size="lg">Send An Inquiry</Button>
                  <Button size="lg" variant="outline">
                    See More <ArrowDown className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              {legalServicesHeroImage && (
                <div className="relative aspect-[4/3]">
                  <Image
                    src={legalServicesHeroImage.imageUrl}
                    alt={legalServicesHeroImage.description}
                    fill
                    className="object-cover rounded-md shadow-md"
                    loading="lazy"
                    quality={60}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    data-ai-hint={legalServicesHeroImage.imageHint}
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
                All services
              </h2>
              <div className="w-16 h-1 bg-primary mt-4"></div>
            </div>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {allServices.map((service) => (
                <Card
                  key={service.id}
                  className="overflow-hidden group transition-shadow hover:shadow-xl flex flex-col"
                >
                  {service.image && (
                      <div className="relative aspect-video">
                        <Image
                          src={service.image.imageUrl}
                          alt={service.description}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                          quality={50}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          data-ai-hint={service.image.imageHint}
                        />
                      </div>
                    )}
                  <CardContent className="p-6 flex flex-col flex-grow">
                    
                    <h3 className="text-xl font-headline font-semibold text-primary">
                      {service.name}
                    </h3>
                    <p className="mt-2 text-muted-foreground text-sm flex-grow">{service.description}</p>
                    <Button
                      variant="link"
                      className="mt-4 px-0 text-primary hover:text-primary/80 self-start"
                    >
                      EXPLORE NOW
                    </Button>
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
