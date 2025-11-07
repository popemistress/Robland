import Link from 'next/link';
import { Instagram, Facebook, Linkedin, Youtube, Music2 } from 'lucide-react';

const programsLinks = [
  { name: 'Citizenship', href: '/citizenship' },
  { name: 'Residency', href: '/residency' },
  { name: 'Real Estate', href: '/real-estate' },
  { name: 'Set Up Your Company', href: '/set-up-your-company' },
  { name: 'Legal Services', href: '/legal-services' },
];

const companyLinks = [
  { name: 'About us', href: '/about' },
  { name: 'Careers', href: '/careers' },
  { name: 'Become a partner', href: '/become-a-partner' },
];

const mediaLinks = [
  { name: 'News', href: '/news' },
  { name: 'Blog', href: '/blog' },
  { name: 'Videos', href: '/videos' },
  { name: 'Webinars', href: '/webinars' },
];

const helpCenterLinks = [
  { name: 'FAQ', href: '/faq' },
  { name: 'Documents', href: '/documents' },
  { name: 'Contact', href: '/contact' },
];

const socialLinks = [
    { name: 'Instagram', href: '#', icon: Instagram },
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'YouTube', href: '#', icon: Youtube },
    { name: 'TikTok', href: '#', icon: Music2 },
];

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          
          <div className="col-span-1">
            <h3 className="font-headline font-semibold text-foreground">Programs</h3>
            <ul className="mt-4 space-y-2">
              {programsLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-headline font-semibold text-foreground">Company</h3>
            <ul className="mt-4 space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-headline font-semibold text-foreground">Media</h3>
            <ul className="mt-4 space-y-2">
              {mediaLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-headline font-semibold text-foreground">Help center</h3>
            <ul className="mt-4 space-y-2">
              {helpCenterLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t">
            <div className="grid md:grid-cols-2 gap-8 items-start">
                <div>
                    <h2 className="text-4xl font-headline font-bold text-primary mb-4">robland</h2>
                    <p className="text-sm text-muted-foreground max-w-md">
                        Robland became a licensed financial consultancy firm in the United Arab Emirates, authorized under the Emirates Securities and Commodities Authority (SCA) for arrangement and advisory services. It is the only licensed firm in the Citizenship by Investment (CBI) and Residency by Investment (RBI) industry.
                    </p>
                </div>
                <div className="flex flex-col items-start md:items-end">
                     <div className="flex items-center space-x-3 mb-4">
                        {socialLinks.map((social) => (
                        <a
                            key={social.name}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors p-2 border border-muted rounded-full"
                            aria-label={social.name}
                        >
                            <social.icon className="h-4 w-4" />
                        </a>
                        ))}
                    </div>
                    <div className="text-sm text-muted-foreground">
                        <p className="mb-2">Copyrights {new Date().getFullYear()}. All rights reserved</p>
                        <div className="flex space-x-4">
                            <Link href="#" className="hover:text-primary transition-colors">Terms</Link>
                            <Link href="#" className="hover:text-primary transition-colors">Privacy</Link>
                            <Link href="#" className="hover:text-primary transition-colors">Cookies</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </footer>
  );
}
