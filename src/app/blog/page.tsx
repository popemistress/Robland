import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Why a Second Passport is The Ultimate Insurance Policy",
      author: "John Doe",
      date: "July 20, 2024",
      excerpt: "In an uncertain world, diversifying your citizenship is more than a luxury—it's a necessity. We explore the benefits of holding a second passport.",
      image: PlaceHolderImages.find((img) => img.id === 'passport'),
    },
    {
      id: 2,
      title: "Digital Nomad Visas: The 5 Best Countries for Remote Work",
      author: "Jane Smith",
      date: "July 15, 2024",
      excerpt: "Spain, Portugal, or Bali? We break down the best options for digital nomads looking to combine work and travel.",
      image: PlaceHolderImages.find((img) => img.id === 'spain-nomad-coat'),
    },
    {
      id: 3,
      title: "Company Formation in the UAE: A Tax Haven for Entrepreneurs",
      author: "Peter Jones",
      date: "July 10, 2024",
      excerpt: "Learn why the UAE is one of the world's top destinations for business owners looking to optimize their tax strategy.",
      image: PlaceHolderImages.find((img) => img.id === 'uae-company'),
    },
    {
      id: 4,
      title: "The Importance of a Last Will & Testament in Asset Protection",
      author: "Mary Johnson",
      date: "July 5, 2024",
      excerpt: "A foundational element of any wealth preservation strategy. Discover why you need a will, no matter your age or net worth.",
      image: PlaceHolderImages.find((img) => img.id === 'last-will-testament'),
    },
  ];

  return (
    <div className="bg-background text-foreground flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20">
        <section className="py-16 sm:py-24 text-center bg-primary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-6xl font-headline text-primary">
              The Robland Blog
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Insights and analysis from our team of experts.
            </p>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {blogPosts.map((post) => (
                <Card key={post.id} className="group overflow-hidden">
                  {post.image && (
                    <div className="relative aspect-video">
                      <Image
                        src={post.image.imageUrl}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                        quality={50}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        data-ai-hint={post.image.imageHint}
                      />
                    </div>
                  )}
                  <CardContent className="p-6">
                    <p className="text-sm text-muted-foreground">By {post.author} on {post.date}</p>
                    <h2 className="mt-2 text-2xl font-headline text-primary group-hover:underline">{post.title}</h2>
                    <p className="mt-4 text-muted-foreground">{post.excerpt}</p>
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
