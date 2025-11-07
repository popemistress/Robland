import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import ImageEnhancer from '@/components/image-enhancer';
import { Badge } from '@/components/ui/badge';

const communityArticles = [
  {
    id: 1,
    title: 'The Sovereign Individual',
    tags: ['Philosophy', 'Future'],
    image: PlaceHolderImages.find((img) => img.id === 'community-1'),
  },
  {
    id: 2,
    title: 'Building Worlds with AI',
    tags: ['Art', 'Technology'],
    image: PlaceHolderImages.find((img) => img.id === 'community-2'),
  },
  {
    id: 3,
    title: 'The Open-Source Citadel',
    tags: ['Development', 'Collaboration'],
    image: PlaceHolderImages.find((img) => img.id === 'community-3'),
  },
];

const stats = [
    { value: '10,000+', label: 'Citizens' },
    { value: '50+', label: 'Countries' },
    { value: '1', label: 'Common Goal' },
];

export default function CommunitySection() {
  return (
    <section id="community" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-headline text-primary">
            The Community
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            A global community of sovereigns, artists, and builders united by a shared vision for the future.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl lg:text-5xl font-bold text-primary">{stat.value}</p>
              <p className="mt-2 text-sm font-medium text-muted-foreground uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {communityArticles.map((article) => (
            <Card key={article.id} className="overflow-hidden group transition-shadow hover:shadow-xl">
              <CardContent className="p-0">
                {article.image && (
                  <div className="aspect-w-3 aspect-h-2">
                    <ImageEnhancer
                      src={article.image.imageUrl}
                      alt={article.image.description}
                      imageHint={article.image.imageHint}
                      width={600}
                      height={400}
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {article.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                  <h3 className="text-xl font-headline font-semibold text-foreground group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
