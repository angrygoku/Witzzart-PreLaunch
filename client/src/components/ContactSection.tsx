import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MessageCircle, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface ContactFormData {
  name: string;
  email: string;
  role: string;
  organization: string;
  message: string;
}

interface ContactSectionProps {
  onFormSubmit?: (data: ContactFormData) => void;
  onWhatsAppClick?: () => void;
}

export default function ContactSection({ onFormSubmit, onWhatsAppClick }: ContactSectionProps) {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    role: '',
    organization: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.role || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    onFormSubmit?.(formData);
    
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      role: '',
      organization: '',
      message: ''
    });
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Hi! I am interested in joining the Witzzart waitlist and would like to know more about the platform.');
    const whatsappUrl = `https://wa.me/919675624255?text=${message}`;
    window.open(whatsappUrl, '_blank');
    onWhatsAppClick?.();
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white mb-4 font-sans" data-testid="text-contact-headline">
            Join the Waitlist
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-serif px-4" data-testid="text-contact-description">
            Be among the first to experience the platform built for India's creative community.
          </p>
          
          {/* Subtle Government Support Note */}
          <p className="text-sm text-gray-500 mt-4 font-serif" data-testid="text-government-support">
            Supported by Rajasthan State Government
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="hover-elevate transition-all duration-300" data-testid="card-contact-form">
            <CardHeader>
              <CardTitle className="text-2xl font-sans" data-testid="text-form-title">
                Send us a Message
              </CardTitle>
              <CardDescription className="font-serif" data-testid="text-form-description">
                Artists, venues, and event organizers - we'd love to hear from you!
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    data-testid="input-name"
                  />
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    data-testid="input-email"
                  />
                </div>

                {/* Role Select */}
                <div className="space-y-2">
                  <Label htmlFor="role">Your Role *</Label>
                  <Select value={formData.role} onValueChange={(value) => handleInputChange('role', value)}>
                    <SelectTrigger data-testid="select-role">
                      <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="artist">Artist / Creator</SelectItem>
                      <SelectItem value="venue">Venue Owner</SelectItem>
                      <SelectItem value="organizer">Event Organizer</SelectItem>
                      <SelectItem value="business">Business Owner</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Organization Input */}
                <div className="space-y-2">
                  <Label htmlFor="organization">Organization / Business</Label>
                  <Input
                    id="organization"
                    type="text"
                    placeholder="Your organization or business name"
                    value={formData.organization}
                    onChange={(e) => handleInputChange('organization', e.target.value)}
                    data-testid="input-organization"
                  />
                </div>

                {/* Message Textarea */}
                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your creative work, venue, or how you'd like to use Witzzart..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    data-testid="textarea-message"
                  />
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  className="w-full"
                  data-testid="button-submit-form"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* WhatsApp Contact */}
            <Card className="hover-elevate transition-all duration-300" data-testid="card-whatsapp-contact">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 text-green-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 font-sans" data-testid="text-whatsapp-title">
                      WhatsApp Direct Line
                    </h3>
                    <p className="text-muted-foreground mb-4 font-serif" data-testid="text-whatsapp-description">
                      Get instant responses to your queries and connect directly with our team.
                    </p>
                    <Button 
                      onClick={handleWhatsApp}
                      className="bg-green-600 hover:bg-green-700"
                      data-testid="button-whatsapp-direct"
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Chat on WhatsApp
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Email Contact */}
            <Card className="hover-elevate transition-all duration-300" data-testid="card-email-contact">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 font-sans" data-testid="text-email-title">
                      Email Contact
                    </h3>
                    <p className="text-muted-foreground mb-2 font-serif" data-testid="text-email-description">
                      For detailed inquiries and partnerships
                    </p>
                    <a 
                      href="mailto:govinddixit@witzzart.com" 
                      className="text-primary hover:underline font-medium"
                      data-testid="link-email-address"
                    >
                      govinddixit@witzzart.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Office Location */}
            <Card className="hover-elevate transition-all duration-300" data-testid="card-location">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 text-orange-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 font-sans" data-testid="text-location-title">
                      Headquarters
                    </h3>
                    <p className="text-muted-foreground font-serif" data-testid="text-location-description">
                      Rajasthan, India<br />
                      Serving creators across the nation
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Phone Contact */}
            <Card className="hover-elevate transition-all duration-300" data-testid="card-phone-contact">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 text-purple-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 font-sans" data-testid="text-phone-title">
                      Phone Support
                    </h3>
                    <p className="text-muted-foreground mb-2 font-serif" data-testid="text-phone-description">
                      Available for urgent inquiries
                    </p>
                    <a 
                      href="tel:+919675624255" 
                      className="text-purple-700 hover:underline font-medium"
                      data-testid="link-phone-number"
                    >
                      +91 96756 24255
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}