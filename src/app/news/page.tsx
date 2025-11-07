import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function NewsPage() {
  const newsArticles = [
    {
      id: 1,
      title: "Robland Announces New Partnership with the UAE Government",
      date: "August 15, 2024",
      excerpt: "Robland is proud to announce a landmark partnership that will streamline the process for obtaining residency in the United Arab Emirates.",
      image: PlaceHolderImages.find((img) => img.id === 'uae-property'),
    },
    {
      id: 2,
      title: "The Rise of Digital Nations: A New Era of Citizenship",
      date: "August 10, 2024",
      excerpt: "An in-depth look at how digital nations like Robland are changing the concept of citizenship in the 21st century.",
      image: PlaceHolderImages.find((img) => img.id === 'vision-image'),
    },
    {
      id: 3,
      title: "Navigating the Portugal Golden Visa: A 2024 Guide",
      date: "August 5, 2024",
      excerpt: "Our experts break down the latest changes to the Portugal Golden Visa program and what they mean for investors.",
      image: PlaceHolderImages.find((img) => img.id === 'portugal-coat'),
    },
     {
      id: 4,
      title: "Investing in Bali: A Guide to Luxury Real Estate",
      date: "July 28, 2024",
      excerpt: "Discover the opportunities available in Bali's thriving real estate market and how Robland can help you secure your dream property.",
      image: PlaceHolderImages.find(img => img.id === 'bali-property'),
    },
  ];

  return (
    <div className="bg-background text-foreground flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20">
        <section className="py-16 sm:py-24 text-center bg-primary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-6xl font-headline text-primary">
              Robland News
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              The latest updates and announcements from the world of Robland.
            </p>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {newsArticles.map((article) => (
                <Card key={article.id} className="group overflow-hidden">
                  {article.image && (
                    <div className="relative aspect-video">
                      <Image
                        src={article.image.imageUrl}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                        quality={50}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        data-ai-hint={article.image.imageHint}
                      />
                    </div>
                  )}
                  <CardContent className="p-6">
                    <p className="text-sm text-muted-foreground">{article.date}</p>
                    <h2 className="mt-2 text-2xl font-headline text-primary group-hover:underline">{article.title}</h2>
                    <p className="mt-4 text-muted-foreground">{article.excerpt}</p>
                    <Button variant="link" className="mt-4 px-0">Read More</Button>
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
