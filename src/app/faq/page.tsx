import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FaqPage() {
    const faqs = [
    {
      question: "What is Citizenship by Investment (CBI)?",
      answer: "Citizenship by Investment programs allow individuals to obtain a second citizenship and passport by making a significant investment in the economy of a host country. This is typically done through a real estate purchase or a donation to a government fund."
    },
    {
      question: "What is Residency by Investment (RBI)?",
      answer: "Residency by Investment, or 'Golden Visa' programs, grant residency rights to individuals who invest in a host country. This can be a pathway to permanent residency and, in some cases, citizenship."
    },
    {
      question: "What are the benefits of a second passport?",
      answer: "A second passport provides increased global mobility, personal and financial security, tax optimization opportunities, and a better quality of life. It serves as an insurance policy against political and economic instability in your home country."
    },
    {
      question: "How long does the application process take?",
      answer: "The timeline varies by program, but most citizenship applications are processed within 3-6 months. Residency programs can take anywhere from a few weeks to several months."
    },
    {
      question: "Can my family be included in the application?",
      answer: "Yes, most programs allow the main applicant to include their spouse, dependent children, and often dependent parents and grandparents in a single application."
    },
    {
      question: "Do I need to visit the country to apply?",
      answer: "This depends on the program. Some Caribbean CBI programs do not require any visit, while most European Golden Visa programs have minimal residency requirements, such as visiting for a few days per year."
    }
  ];

  return (
    <div className="bg-background text-foreground flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20">
        <section className="py-16 sm:py-24 text-center bg-primary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-6xl font-headline text-primary">
              Frequently Asked Questions
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Find answers to common questions about our services.
            </p>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-headline text-primary">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
