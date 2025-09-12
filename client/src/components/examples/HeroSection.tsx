import HeroSection from '../HeroSection';

export default function HeroSectionExample() {
  return (
    <HeroSection 
      onWhatsAppClick={() => console.log('WhatsApp clicked')}
      onLearnMoreClick={() => console.log('Learn More clicked')}
    />
  );
}