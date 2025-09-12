import CapabilitiesSection from '../CapabilitiesSection';

export default function CapabilitiesSectionExample() {
  return (
    <CapabilitiesSection 
      onGetStartedClick={(capability) => console.log('Get started clicked for:', capability)}
    />
  );
}