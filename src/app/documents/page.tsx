import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { DownloadCloud, FileText } from 'lucide-react';

export default function DocumentsPage() {
  const documents = [
    {
      title: 'Robland Citizenship by Investment Guide',
      description: 'A comprehensive guide to all our CBI programs, requirements, and benefits.',
      fileType: 'PDF',
      size: '2.5 MB',
    },
    {
      title: 'St. Kitts & Nevis Program Brochure',
      description: 'Detailed information about the St. Kitts & Nevis Citizenship by Investment program.',
      fileType: 'PDF',
      size: '1.2 MB',
    },
    {
      title: 'Portugal Golden Visa Application Forms',
      description: 'All the necessary forms to begin your application for the Portugal Golden Visa.',
      fileType: 'ZIP',
      size: '5.8 MB',
    },
    {
      title: 'Preliminary Application Form',
      description: 'Start your journey with Robland by filling out our initial application form.',
      fileType: 'DOCX',
      size: '300 KB',
    },
  ];

  return (
    <div className="bg-background text-foreground flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20">
        <section className="py-16 sm:py-24 text-center bg-primary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-6xl font-headline text-primary">
              Documents
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Download essential guides, brochures, and application forms.
            </p>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="space-y-8">
              {documents.map((doc, index) => (
                <Card key={index} className="flex flex-col md:flex-row items-center">
                  <CardContent className="p-6 flex-grow flex items-center gap-6">
                    <FileText className="h-10 w-10 text-primary flex-shrink-0" />
                    <div className="flex-grow">
                      <h3 className="text-xl font-headline font-semibold text-primary">{doc.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{doc.description}</p>
                    </div>
                  </CardContent>
                  <div className="p-6 pt-0 md:pt-6 md:pl-0 flex items-center gap-6">
                     <p className="text-sm text-muted-foreground whitespace-nowrap">{doc.fileType} - {doc.size}</p>
                     <Button variant="outline">
                        <DownloadCloud className="mr-2 h-4 w-4" />
                        Download
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
