import StoriesSection from '../StoriesSection';

export default function StoriesSectionExample() {
  return (
    <StoriesSection 
      onViewMoreClick={() => console.log('View more stories clicked')}
    />
  );
}