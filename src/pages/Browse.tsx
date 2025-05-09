
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Book, FilterOptions } from "@/lib/types";
import { courses, getBooksByCourse, getCoursePackages, getRecommendedBooks } from "@/lib/data";
import Navbar from "@/components/Navbar";
import CourseFilter from "@/components/CourseFilter";
import BookList from "@/components/BookList";
import CoursePackageCard from "@/components/CoursePackageCard";
import RecommendedBooks from "@/components/RecommendedBooks";

const Browse = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState<FilterOptions>({
    course: searchParams.get("course") || courses[0]?.id || "",
    semester: searchParams.get("semester") ? parseInt(searchParams.get("semester") as string) : null,
    category: searchParams.get("category") || null,
  });
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);
  const [recommendedBooks, setRecommendedBooks] = useState<Book[]>([]);
  const [packages, setPackages] = useState<any[]>([]);

  useEffect(() => {
    // Update search params when filters change
    const params = new URLSearchParams();
    params.set("course", filters.course);
    if (filters.semester) params.set("semester", filters.semester.toString());
    if (filters.category) params.set("category", filters.category);
    setSearchParams(params);

    // Get books based on filters
    let books = getBooksByCourse(filters.course, filters.semester);
    
    // Apply category filter if it exists
    if (filters.category) {
      books = books.filter(book => book.category === filters.category);
    }
    
    setFilteredBooks(books);
    
    // Get recommended books
    const recommended = getRecommendedBooks(filters.course, filters.semester);
    setRecommendedBooks(recommended);
    
    // Get course packages
    const coursePackages = getCoursePackages(filters.course, filters.semester);
    setPackages(coursePackages);
  }, [filters, setSearchParams]);

  const handleFilterChange = (newFilters: FilterOptions) => {
    setFilters(newFilters);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="container px-4 py-8 md:px-6">
        <h1 className="mb-6 text-3xl font-serif font-medium">Browse Study Materials</h1>
        <div className="grid gap-8 md:grid-cols-[250px_1fr]">
          <aside className="md:border-r md:pr-6">
            <CourseFilter courses={courses} onFilterChange={handleFilterChange} />
          </aside>
          <main className="space-y-8">
            {packages.length > 0 && (
              <div className="space-y-4">
                <h2 className="text-2xl font-serif font-medium">Course Packages</h2>
                <div className="grid gap-6 sm:grid-cols-2">
                  {packages.map((pkg) => (
                    <CoursePackageCard
                      key={pkg.id}
                      id={pkg.id}
                      name={pkg.name}
                      bookCount={pkg.bookCount}
                      totalSize={pkg.totalSize}
                      books={pkg.books}
                    />
                  ))}
                </div>
              </div>
            )}

            <RecommendedBooks books={recommendedBooks} />

            <div className="space-y-4">
              <h2 className="text-2xl font-serif font-medium">All Materials</h2>
              <BookList
                books={filteredBooks}
                emptyMessage="No materials found for the selected filters"
              />
            </div>
          </main>
        </div>
      </div>
      <footer className="mt-auto border-t bg-white py-6">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} StudyStash. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Browse;
