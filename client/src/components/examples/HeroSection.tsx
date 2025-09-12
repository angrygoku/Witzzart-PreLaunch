import HeroSection from '../HeroSection';

export default function HeroSectionExample() {
  return (
    <HeroSection 
      onJoinWaitlistClick={() => console.log('Join waitlist clicked')}
      onLearnMoreClick={() => console.log('Learn More clicked')}
    />
  );
}