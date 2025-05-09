
import { useState } from "react";
import { Book, Course, FilterOptions } from "@/lib/types";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";

interface CourseFilterProps {
  courses: Course[];
  onFilterChange: (filters: FilterOptions) => void;
}

const CourseFilter = ({ courses, onFilterChange }: CourseFilterProps) => {
  const [filters, setFilters] = useState<FilterOptions>({
    course: courses[0]?.id || "",
    semester: null,
    category: null,
  });

  const handleCourseChange = (value: string) => {
    const newFilters = {
      ...filters,
      course: value,
      semester: null, // Reset semester when course changes
    };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleSemesterChange = (value: string) => {
    const newFilters = {
      ...filters,
      semester: value === "all" ? null : parseInt(value),
    };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleCategoryChange = (value: string) => {
    const newFilters = {
      ...filters,
      category: value === "all" ? null : value,
    };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const selectedCourse = courses.find((c) => c.id === filters.course);

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-lg font-medium">Filter by Course</h2>
        <Select value={filters.course} onValueChange={handleCourseChange}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a course" />
          </SelectTrigger>
          <SelectContent>
            {courses.map((course) => (
              <SelectItem key={course.id} value={course.id}>
                {course.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {selectedCourse && (
        <div className="space-y-2">
          <h2 className="text-lg font-medium">Filter by Semester</h2>
          <Select 
            value={filters.semester === null ? "all" : filters.semester.toString()} 
            onValueChange={handleSemesterChange}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a semester" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Semesters</SelectItem>
              {selectedCourse.semesters.map((sem) => (
                <SelectItem key={sem} value={sem.toString()}>
                  Semester {sem}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}

      <div className="space-y-2">
        <h2 className="text-lg font-medium">Filter by Category</h2>
        <Tabs defaultValue="all" onValueChange={handleCategoryChange}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="textbook">Textbooks</TabsTrigger>
            <TabsTrigger value="notes">Notes</TabsTrigger>
            <TabsTrigger value="paper">Papers</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
};

export default CourseFilter;
