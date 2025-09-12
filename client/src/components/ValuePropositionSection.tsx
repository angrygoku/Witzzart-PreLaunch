interface ValuePropositionSectionProps {
  onLearnMoreClick?: () => void;
}

export default function ValuePropositionSection({ onLearnMoreClick }: ValuePropositionSectionProps) {
  const benefits = [
    {
      title: "Verified Creative Network",
      description: "Connect with authenticated artists, venues, and organizers across India's creative ecosystem."
    },
    {
      title: "Government Trust & Safety",
      description: "Built with backing from Rajasthan State and Central Government for secure, reliable transactions."
    },
    {
      title: "Local-First Approach",
      description: "Empowering homegrown talent and supporting local creative businesses in every region."
    }
  ];

  return (
    <section id="value" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 font-sans" data-testid="text-value-headline">
            Built for India's Creative Future
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-serif" data-testid="text-value-description">
            A marketplace designed from the ground up to serve India's vibrant creative community.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="text-center"
              data-testid={`section-benefit-${index}`}
            >
              {/* Number */}
              <div className="w-12 h-12 mx-auto mb-6 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
                {index + 1}
              </div>
              
              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-black mb-3 font-sans" data-testid={`text-benefit-title-${index}`}>
                {benefit.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 font-serif leading-relaxed" data-testid={`text-benefit-description-${index}`}>
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button 
            onClick={onLearnMoreClick}
            className="text-black hover:text-gray-600 font-medium underline underline-offset-4 font-serif text-lg"
            data-testid="button-value-learn-more"
          >
            See how it works
          </button>
        </div>
      </div>
    </section>
  );
}