import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Briefcase, MapPin, BrainCircuit } from 'lucide-react';

export default function CareersPage() {
  const openPositions = [
    { title: 'Senior Blockchain Developer', location: 'Remote', department: 'Engineering' },
    { title: 'Legal Counsel - Immigration Law', location: 'Dubai, UAE', department: 'Legal' },
    { title: 'Investment Advisor', location: 'London, UK', department: 'Finance' },
    { title: 'Marketing Manager', location: 'Remote', department: 'Marketing' },
  ];

  return (
    <div className="bg-background text-foreground flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20">
        <section className="py-16 sm:py-24 text-center bg-primary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-6xl font-headline text-primary">
              Careers at Robland
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Join our mission to build the future of digital nations.
            </p>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-headline text-primary">
                Open Positions
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                We're looking for passionate individuals to join our global team.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              {openPositions.map((position, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-primary">{position.title}</CardTitle>
                    <CardDescription className="flex items-center gap-4 pt-2">
                      <span className="flex items-center gap-2"><Briefcase className="h-4 w-4" /> {position.department}</span>
                      <span className="flex items-center gap-2"><MapPin className="h-4 w-4" /> {position.location}</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button>Apply Now</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-16 sm:py-24 bg-primary/5">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-headline text-primary">Why Join Us?</h2>
                </div>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div>
                        <div className="flex justify-center mb-4">
                            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary text-primary-foreground">
                                <BrainCircuit className="h-8 w-8" />
                            </div>
                        </div>
                        <h3 className="text-xl font-headline font-semibold">Innovate</h3>
                        <p className="mt-2 text-muted-foreground">Work on cutting-edge technology that is shaping the future of global interaction.</p>
                    </div>
                    <div>
                        <div className="flex justify-center mb-4">
                            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary text-primary-foreground">
                                <Users className="h-8 w-8" />
                            </div>
                        </div>
                        <h3 className="text-xl font-headline font-semibold">Collaborate</h3>
                        <p className="mt-2 text-muted-foreground">Join a diverse, global team of thinkers and builders passionate about our shared vision.</p>
                    </div>
                    <div>
                        <div className="flex justify-center mb-4">
                            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary text-primary-foreground">
                                <TrendingUp className="h-8 w-8" />
                            </div>
                        </div>
                        <h3 className="text-xl font-headline font-semibold">Grow</h3>
                        <p className="mt-2 text-muted-foreground">We invest in our people. Grow your skills and career with us.</p>
                    </div>
                </div>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
import { Users, TrendingUp } from 'lucide-react';
