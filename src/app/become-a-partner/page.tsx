import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Handshake, Building, Globe } from 'lucide-react';

export default function BecomeAPartnerPage() {
  return (
    <div className="bg-background text-foreground flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20">
        <section className="py-16 sm:py-24 text-center bg-primary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-6xl font-headline text-primary">
              Partner with Robland
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Collaborate with us to expand our global reach and create new opportunities.
            </p>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-headline text-primary">Partnership Programs</h2>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="p-6">
                  <Handshake className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-headline font-semibold text-primary">Agent & Referral Partners</h3>
                  <p className="mt-2 text-muted-foreground">Introduce your clients to Robland’s services and earn competitive commissions.</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Building className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-headline font-semibold text-primary">Real Estate Developers</h3>
                  <p className="mt-2 text-muted-foreground">List your properties with us and gain access to a global network of investors.</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-headline font-semibold text-primary">Country Partners</h3>
                  <p className="mt-2 text-muted-foreground">Represent Robland in your region and manage a portfolio of clients and partners.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 bg-primary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-headline text-primary">
                Become a Partner
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Fill out the form below to start the conversation.
              </p>
            </div>
            <form className="mt-12 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input id="company" placeholder="Your Company Name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Tell us about yourself and why you want to partner with us." />
              </div>
              <div className="text-center">
                <Button size="lg" type="submit">Submit Inquiry</Button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
