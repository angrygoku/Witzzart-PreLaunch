import ContactSection from '../ContactSection';

export default function ContactSectionExample() {
  return (
    <ContactSection 
      onFormSubmit={(data) => console.log('Form submitted:', data)}
      onWhatsAppClick={() => console.log('WhatsApp clicked')}
    />
  );
}