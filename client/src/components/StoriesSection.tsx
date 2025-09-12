import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

interface Story {
  name: string;
  role: string;
  location: string;
  quote: string;
  initial: string;
}

interface StoriesSectionProps {
  onViewMoreClick?: () => void;
}

export default function StoriesSection({ onViewMoreClick }: StoriesSectionProps) {
  // todo: replace with real testimonial data
  const stories: Story[] = [
    {
      name: "Priya Sharma",
      role: "Traditional Artist",
      location: "Jaipur",
      quote: "Witzzart gave me a platform to reach art lovers beyond my local community. My traditional Rajasthani paintings now have buyers from across India.",
      initial: "PS"
    },
    {
      name: "Rohit Mehta", 
      role: "Event Organizer",
      location: "Udaipur",
      quote: "Planning cultural events became so much easier. The platform connects me with talented artists and beautiful venues seamlessly.",
      initial: "RM"
    },
    {
      name: "Anjali Gupta",
      role: "Heritage Venue Owner", 
      location: "Jodhpur",
      quote: "Our heritage property now hosts amazing creative events throughout the year. Witzzart brought us the right collaborators.",
      initial: "AG"
    }
  ];

  return (
    <section id="stories" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 font-sans" data-testid="text-stories-headline">
            Stories from Our Community
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-serif" data-testid="text-stories-description">
            Real creators, real stories, real success.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto mb-12">
          {stories.map((story, index) => (
            <Card 
              key={index}
              className="bg-white border-gray-200 hover-elevate transition-all duration-300"
              data-testid={`card-story-${index}`}
            >
              <CardContent className="p-8">
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-gray-300 mb-4" />
                
                {/* Quote Text */}
                <p className="text-gray-700 mb-6 font-serif leading-relaxed" data-testid={`text-story-quote-${index}`}>
                  "{story.quote}"
                </p>
                
                {/* Author */}
                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12 border border-gray-200">
                    <AvatarFallback className="bg-gray-100 text-gray-600 font-medium">
                      {story.initial}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div>
                    <p className="font-semibold text-black font-sans" data-testid={`text-story-name-${index}`}>
                      {story.name}
                    </p>
                    <p className="text-sm text-gray-600 font-serif" data-testid={`text-story-role-${index}`}>
                      {story.role}, {story.location}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Link */}
        <div className="text-center">
          <button 
            onClick={onViewMoreClick}
            className="text-black hover:text-gray-600 font-medium underline underline-offset-4 font-serif"
            data-testid="button-view-more-stories"
          >
            View more success stories
          </button>
        </div>
      </div>
    </section>
  );
}