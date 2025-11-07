import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Target, Eye } from 'lucide-react';

export default function AboutPage() {
  const team = [
    { name: 'John Doe', role: 'CEO & Founder' },
    { name: 'Jane Smith', role: 'Chief Technology Officer' },
    { name: 'Peter Jones', role: 'Head of Legal' },
    { name: 'Mary Johnson', role: 'Head of Real Estate' },
  ];

  return (
    <div className="bg-background text-foreground flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20">
        <section className="py-16 sm:py-24 text-center bg-primary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-6xl font-headline text-primary">
              About Robland
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Pioneering the future of digital sovereignty and global citizenship.
            </p>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-12 text-center">
              <div className="flex flex-col items-center">
                <Eye className="h-12 w-12 text-primary mb-4" />
                <h2 className="text-2xl font-headline text-primary">Our Vision</h2>
                <p className="mt-2 text-muted-foreground">To build a decentralized digital nation that empowers individuals with freedom and opportunity, transcending physical borders.</p>
              </div>
              <div className="flex flex-col items-center">
                <Target className="h-12 w-12 text-primary mb-4" />
                <h2 className="text-2xl font-headline text-primary">Our Mission</h2>
                <p className="mt-2 text-muted-foreground">To provide secure, transparent, and efficient pathways to global citizenship, residency, and asset management through innovative legal and financial solutions.</p>
              </div>
              <div className="flex flex-col items-center">
                <Users className="h-12 w-12 text-primary mb-4" />
                <h2 className="text-2xl font-headline text-primary">Our Team</h2>
                <p className="mt-2 text-muted-foreground">A dedicated group of experts in law, finance, and technology, committed to delivering excellence and integrity in all our services.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 bg-primary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-headline text-primary">
                Meet the Leadership
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                The driving force behind Robland's success.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member) => (
                <Card key={member.name} className="text-center">
                  <CardContent className="p-6">
                    <div className="relative w-24 h-24 rounded-full mx-auto mb-4 bg-muted flex items-center justify-center">
                       <Users className="h-12 w-12 text-muted-foreground" />
                    </div>
                    <h3 className="text-xl font-headline font-semibold text-primary">{member.name}</h3>
                    <p className="text-muted-foreground">{member.role}</p>
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
