import PlatformShowcaseSection from '../PlatformShowcaseSection';

export default function PlatformShowcaseSectionExample() {
  return (
    <PlatformShowcaseSection 
      onLearnMoreClick={() => console.log('Platform learn more clicked')}
    />
  );
}