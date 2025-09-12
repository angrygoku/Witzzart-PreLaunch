import Navigation from '../Navigation';

export default function NavigationExample() {
  return (
    <div className="h-screen bg-gray-100">
      <Navigation 
        onContactClick={() => console.log('Contact clicked')}
      />
      <div className="pt-20 p-8">
        <h1 className="text-2xl font-bold">Navigation Example</h1>
        <p>The navigation is fixed at the top. Try clicking the menu items!</p>
      </div>
    </div>
  );
}