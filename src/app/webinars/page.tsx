import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Calendar, Clock } from 'lucide-react';

export default function WebinarsPage() {
  const webinars = [
    {
      title: 'Unlocking Global Mobility: An Introduction to CBI & RBI',
      date: 'September 1, 2024',
      time: '10:00 AM EST',
      description: 'Join our experts for a comprehensive overview of Citizenship and Residency by Investment programs and learn how they can benefit you.',
    },
    {
      title: 'Tax Optimization Strategies for Global Entrepreneurs',
      date: 'September 15, 2024',
      time: '11:00 AM GMT',
      description: 'Discover legal strategies for optimizing your tax liabilities through international company structures and residency.',
    },
    {
      title: 'The European Dream: A Guide to EU Golden Visas',
      date: 'October 1, 2024',
      time: '9:00 AM CET',
      description: 'A deep dive into the Golden Visa programs of Portugal, Spain, and Greece, and how you can gain access to the EU.',
    },
  ];

  return (
    <div className="bg-background text-foreground flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20">
        <section className="py-16 sm:py-24 text-center bg-primary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-6xl font-headline text-primary">
              Webinars
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Join our live events and learn from industry leaders.
            </p>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-headline text-primary">Upcoming Webinars</h2>
            </div>
            <div className="mt-12 space-y-8">
              {webinars.map((webinar, index) => (
                <Card key={index}>
                  <CardContent className="p-6 grid md:grid-cols-3 gap-6 items-center">
                    <div className="md:col-span-2">
                      <CardTitle className="text-primary">{webinar.title}</CardTitle>
                      <p className="mt-4 text-muted-foreground">{webinar.description}</p>
                    </div>
                    <div className="flex flex-col items-start md:items-end space-y-4">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-5 w-5" />
                        <span>{webinar.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="h-5 w-5" />
                        <span>{webinar.time}</span>
                      </div>
                      <Button>Register Now</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
             <div className="text-center mt-16">
              <h3 className="text-2xl font-headline text-primary">Past Webinars</h3>
              <p className="mt-2 text-muted-foreground">Catch up on our previous sessions on demand.</p>
              <Button variant="outline" className="mt-4">Watch Recordings</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
