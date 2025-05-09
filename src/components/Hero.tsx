
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-brand-50 py-16 md:py-24">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 md:grid-cols-2 md:gap-10">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Your Course Materials
                <span className="block text-brand-600">All in One Place</span>
              </h1>
              <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl">
                Access textbooks, notes, and study materials for all your courses.
                Filter by course and semester to find exactly what you need.
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row">
              <Button asChild size="lg">
                <Link to="/browse">
                  <BookOpen className="mr-2 h-5 w-5" /> Browse Books
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative grid grid-cols-2 gap-4 md:gap-8">
              <div className="space-y-4 md:space-y-8">
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img
                    alt="Textbook"
                    className="aspect-[4/3] h-auto w-full object-cover"
                    src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&auto=format&fit=crop&q=80"
                  />
                </div>
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img
                    alt="Study notes"
                    className="aspect-[4/3] h-auto w-full object-cover"
                    src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&auto=format&fit=crop&q=80"
                  />
                </div>
              </div>
              <div className="mt-8 space-y-4 md:space-y-8">
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img
                    alt="Student studying"
                    className="aspect-[4/3] h-auto w-full object-cover"
                    src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&auto=format&fit=crop&q=80"
                  />
                </div>
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img
                    alt="Library"
                    className="aspect-[4/3] h-auto w-full object-cover"
                    src="https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?w=800&auto=format&fit=crop&q=80"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
