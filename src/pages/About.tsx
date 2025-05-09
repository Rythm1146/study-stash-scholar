
import Navbar from "@/components/Navbar";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="container px-4 py-12 md:px-6 md:py-16">
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <h1 className="text-4xl font-serif font-bold">About StudyStash</h1>
            <p className="text-lg text-muted-foreground">
              Your one-stop platform for academic materials, organized by course and semester.
            </p>
          </div>
        </section>

        <section className="container px-4 py-12 md:px-6">
          <div className="mx-auto max-w-3xl space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-serif font-medium">Our Mission</h2>
              <p>
                StudyStash was created with a simple goal: to make academic resources more
                accessible and organized for students. We understand the challenges of finding the
                right study materials for your courses, especially when they're scattered across
                various platforms and websites.
              </p>
              <p>
                Our platform consolidates textbooks, lecture notes, research papers, and other
                academic resources into a single, easy-to-navigate library. By organizing everything
                by course and semester, we help you quickly find exactly what you need for your
                studies.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-serif font-medium">Key Features</h2>
              <ul className="list-inside list-disc space-y-2">
                <li>
                  <span className="font-medium">Course-Based Filtering:</span> Find materials
                  specific to your courses and semesters.
                </li>
                <li>
                  <span className="font-medium">Package Downloads:</span> Download entire sets of
                  materials for a course or semester in one click.
                </li>
                <li>
                  <span className="font-medium">Smart Recommendations:</span> Get personalized
                  suggestions for supplementary reading and study materials.
                </li>
                <li>
                  <span className="font-medium">Cross-Platform Compatibility:</span> Access your
                  materials on any device, online or offline.
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-serif font-medium">How to Use StudyStash</h2>
              <ol className="list-inside list-decimal space-y-4">
                <li>
                  <span className="font-medium">Browse by Course:</span> Start by selecting your
                  course from our comprehensive list.
                </li>
                <li>
                  <span className="font-medium">Filter by Semester:</span> Narrow down the materials
                  to those relevant for your current semester.
                </li>
                <li>
                  <span className="font-medium">Download Individual Materials:</span> Find and
                  download specific textbooks, notes, or papers.
                </li>
                <li>
                  <span className="font-medium">Get Semester Packages:</span> Download all materials
                  for a semester in one convenient package.
                </li>
                <li>
                  <span className="font-medium">Check Recommendations:</span> Explore our
                  recommended materials to enhance your learning.
                </li>
              </ol>
            </div>
          </div>
        </section>

        <section className="bg-muted py-12">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-serif font-medium">Ready to Get Started?</h2>
              <p className="mb-8 text-muted-foreground">
                Browse our collection of academic resources and find the materials you need for your
                courses.
              </p>
              <Button size="lg" asChild>
                <Link to="/browse">Start Browsing</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-white py-6">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} StudyStash. All rights reserved.
            </p>
            <nav className="flex gap-4">
              <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">
                Home
              </Link>
              <Link to="/browse" className="text-sm text-muted-foreground hover:text-foreground">
                Browse
              </Link>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground">
                About
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
