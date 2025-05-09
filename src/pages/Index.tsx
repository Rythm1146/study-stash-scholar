
import Hero from "@/components/Hero";
import { courses, books } from "@/lib/data";
import BookList from "@/components/BookList";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

const Index = () => {
  // Get latest 8 books
  const latestBooks = [...books]
    .sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime())
    .slice(0, 8);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <section className="container py-12 px-4 md:px-6">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-3xl font-serif font-medium">Latest Materials</h2>
            <Button variant="outline" asChild>
              <Link to="/browse">
                View All <BookOpen className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <BookList books={latestBooks} />
        </section>
        <section className="bg-muted py-12">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-serif font-medium">Find Materials by Course</h2>
              <p className="mb-8 text-muted-foreground">
                Browse our comprehensive collection of academic resources categorized by course and semester.
              </p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
                {courses.map((course) => (
                  <Link
                    key={course.id}
                    to={`/browse?course=${course.id}`}
                    className="flex flex-col items-center justify-center rounded-lg border bg-white p-6 shadow-sm transition-colors hover:bg-brand-50"
                  >
                    <h3 className="text-lg font-medium">{course.name}</h3>
                    <p className="text-sm text-muted-foreground">{course.code}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="container py-12 px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-serif font-medium">How It Works</h2>
              <ol className="space-y-4">
                <li className="flex gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-100 text-brand-900">
                    1
                  </div>
                  <div>
                    <h3 className="font-medium">Select Your Course</h3>
                    <p className="text-muted-foreground">
                      Choose your course from our comprehensive list.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-100 text-brand-900">
                    2
                  </div>
                  <div>
                    <h3 className="font-medium">Filter by Semester</h3>
                    <p className="text-muted-foreground">
                      Narrow down materials by selecting your current semester.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-100 text-brand-900">
                    3
                  </div>
                  <div>
                    <h3 className="font-medium">Access Materials</h3>
                    <p className="text-muted-foreground">
                      Download individual books or entire semester packages.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
            <div>
              <h2 className="mb-4 text-3xl font-serif font-medium">Benefits</h2>
              <ul className="grid gap-4 sm:grid-cols-2">
                <li className="rounded-lg border bg-white p-4">
                  <h3 className="font-medium">Comprehensive Collection</h3>
                  <p className="text-sm text-muted-foreground">
                    Access to all course materials in one place.
                  </p>
                </li>
                <li className="rounded-lg border bg-white p-4">
                  <h3 className="font-medium">Semester Packages</h3>
                  <p className="text-sm text-muted-foreground">
                    Download all materials for a semester with one click.
                  </p>
                </li>
                <li className="rounded-lg border bg-white p-4">
                  <h3 className="font-medium">Smart Recommendations</h3>
                  <p className="text-sm text-muted-foreground">
                    Receive personalized book suggestions for your courses.
                  </p>
                </li>
                <li className="rounded-lg border bg-white p-4">
                  <h3 className="font-medium">Offline Access</h3>
                  <p className="text-sm text-muted-foreground">
                    Download and access materials anytime, anywhere.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-white py-6">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-brand-700" />
              <span className="font-serif font-medium">StudyStash</span>
            </div>
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

export default Index;
