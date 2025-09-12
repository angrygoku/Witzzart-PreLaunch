import Footer from '../Footer';

export default function FooterExample() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="h-screen flex items-center justify-center">
        <p className="text-xl">Scroll down to see the footer!</p>
      </div>
      <Footer 
        onWhatsAppClick={() => console.log('WhatsApp clicked')}
      />
    </div>
  );
}