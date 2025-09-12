import TrustSection from '../TrustSection';

export default function TrustSectionExample() {
  return (
    <TrustSection 
      onLearnMoreClick={() => console.log('Learn more about trust clicked')}
    />
  );
}