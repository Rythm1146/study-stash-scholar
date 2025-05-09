
import { Book, Course } from "./types";

export const courses: Course[] = [
  {
    id: "cs",
    name: "Computer Science",
    code: "CS",
    description: "Computer Science and Engineering",
    semesters: [1, 2, 3, 4, 5, 6, 7, 8],
  },
  {
    id: "ee",
    name: "Electrical Engineering",
    code: "EE",
    description: "Electrical and Electronics Engineering",
    semesters: [1, 2, 3, 4, 5, 6, 7, 8],
  },
  {
    id: "me",
    name: "Mechanical Engineering",
    code: "ME",
    description: "Mechanical Engineering",
    semesters: [1, 2, 3, 4, 5, 6, 7, 8],
  },
  {
    id: "ce",
    name: "Civil Engineering",
    code: "CE",
    description: "Civil Engineering",
    semesters: [1, 2, 3, 4, 5, 6, 7, 8],
  }
];

export const books: Book[] = [
  {
    id: "1",
    title: "Introduction to Computing",
    author: "John Smith",
    description: "A comprehensive introduction to computing principles and practices.",
    coverImage: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3",
    fileSize: "12.5 MB",
    fileType: "PDF",
    downloadUrl: "#",
    publishedDate: "2022-01-15",
    course: "cs",
    semester: 1,
    tags: ["programming", "computing", "basics"],
    category: "textbook",
  },
  {
    id: "2",
    title: "Data Structures and Algorithms",
    author: "Jane Doe",
    description: "Learn about essential data structures and algorithms for efficient programming.",
    coverImage: "https://images.unsplash.com/photo-1569728723358-d1a317aa7fba?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3",
    fileSize: "8.3 MB",
    fileType: "PDF",
    downloadUrl: "#",
    publishedDate: "2021-11-20",
    course: "cs",
    semester: 2,
    tags: ["algorithms", "data structures", "programming"],
    category: "textbook",
  },
  {
    id: "3",
    title: "Database Systems",
    author: "Michael Johnson",
    description: "Comprehensive guide to database design, implementation, and management.",
    coverImage: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=2021&auto=format&fit=crop&ixlib=rb-4.0.3",
    fileSize: "10.2 MB",
    fileType: "PDF",
    downloadUrl: "#",
    publishedDate: "2022-03-05",
    course: "cs",
    semester: 3,
    tags: ["database", "SQL", "data management"],
    category: "textbook",
  },
  {
    id: "4",
    title: "Machine Learning Fundamentals",
    author: "Sarah Williams",
    description: "Introduction to machine learning concepts and practical applications.",
    coverImage: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3",
    fileSize: "15.7 MB",
    fileType: "PDF",
    downloadUrl: "#",
    publishedDate: "2022-06-18",
    course: "cs",
    semester: 4,
    tags: ["machine learning", "AI", "data science"],
    category: "textbook",
  },
  {
    id: "5",
    title: "Electric Circuits Analysis",
    author: "Robert Chen",
    description: "Comprehensive guide to analyzing and designing electric circuits.",
    coverImage: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    fileSize: "9.8 MB",
    fileType: "PDF",
    downloadUrl: "#",
    publishedDate: "2021-09-30",
    course: "ee",
    semester: 1,
    tags: ["circuits", "electrical", "analysis"],
    category: "textbook",
  },
  {
    id: "6",
    title: "Signals and Systems",
    author: "David Park",
    description: "Explore the fundamentals of signals and systems in electrical engineering.",
    coverImage: "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3",
    fileSize: "11.3 MB",
    fileType: "PDF",
    downloadUrl: "#",
    publishedDate: "2022-02-12",
    course: "ee",
    semester: 2,
    tags: ["signals", "systems", "processing"],
    category: "textbook",
  },
  {
    id: "7",
    title: "Engineering Mechanics",
    author: "Thomas Wilson",
    description: "Introduction to statics and dynamics in mechanical engineering.",
    coverImage: "https://images.unsplash.com/photo-1623018035782-b269248df916?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    fileSize: "10.1 MB",
    fileType: "PDF",
    downloadUrl: "#",
    publishedDate: "2021-10-05",
    course: "me",
    semester: 1,
    tags: ["mechanics", "statics", "dynamics"],
    category: "textbook",
  },
  {
    id: "8",
    title: "Thermodynamics",
    author: "Amanda Brown",
    description: "Principles and applications of thermodynamics in engineering systems.",
    coverImage: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=2098&auto=format&fit=crop&ixlib=rb-4.0.3",
    fileSize: "12.8 MB",
    fileType: "PDF",
    downloadUrl: "#",
    publishedDate: "2022-04-15",
    course: "me",
    semester: 2,
    tags: ["thermodynamics", "energy", "heat transfer"],
    category: "textbook",
  },
  {
    id: "9",
    title: "Advanced Calculus Notes",
    author: "Prof. Maria Garcia",
    description: "Comprehensive lecture notes on advanced calculus topics.",
    coverImage: "https://images.unsplash.com/photo-1550399105-c4db5fb85c18?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3",
    fileSize: "5.2 MB",
    fileType: "PDF",
    downloadUrl: "#",
    publishedDate: "2022-03-10",
    course: "cs",
    semester: 2,
    tags: ["calculus", "mathematics", "notes"],
    category: "notes",
    isRecommended: true,
  },
  {
    id: "10",
    title: "Introduction to Algorithms",
    author: "Thomas H. Cormen",
    description: "The essential textbook on computer algorithms.",
    coverImage: "https://images.unsplash.com/photo-1523289333742-be1143f6b766?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    fileSize: "18.5 MB",
    fileType: "PDF",
    downloadUrl: "#",
    publishedDate: "2021-12-04",
    course: "cs",
    semester: 3,
    tags: ["algorithms", "programming", "computer science"],
    category: "textbook",
    isRecommended: true,
  },
  {
    id: "11",
    title: "Concrete and Structures",
    author: "Emily Johnson",
    description: "Analysis and design of concrete structures in civil engineering.",
    coverImage: "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    fileSize: "14.3 MB",
    fileType: "PDF",
    downloadUrl: "#",
    publishedDate: "2022-01-28",
    course: "ce",
    semester: 4,
    tags: ["concrete", "structures", "civil engineering"],
    category: "textbook",
  },
  {
    id: "12",
    title: "Environmental Engineering",
    author: "Kevin Martinez",
    description: "Principles and practices of environmental engineering.",
    coverImage: "https://images.unsplash.com/photo-1511108690759-009324a90311?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3",
    fileSize: "12.6 MB",
    fileType: "PDF",
    downloadUrl: "#",
    publishedDate: "2022-05-20",
    course: "ce",
    semester: 5,
    tags: ["environmental", "sustainability", "engineering"],
    category: "textbook",
  },
  {
    id: "13",
    title: "Computer Networks",
    author: "Daniel White",
    description: "A comprehensive guide to computer networks and protocols.",
    coverImage: "https://images.unsplash.com/photo-1515879128292-8db19c02fde0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
    fileSize: "16.2 MB",
    fileType: "PDF",
    downloadUrl: "#",
    publishedDate: "2022-02-08",
    course: "cs",
    semester: 5,
    tags: ["networks", "protocols", "communication"],
    category: "textbook",
    isRecommended: true,
  },
  {
    id: "14",
    title: "Power Electronics",
    author: "Jennifer Lee",
    description: "Theory and applications of power electronics in electrical systems.",
    coverImage: "https://images.unsplash.com/photo-1546514355-7fdc90ccbd03?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
    fileSize: "13.8 MB",
    fileType: "PDF",
    downloadUrl: "#",
    publishedDate: "2022-04-02",
    course: "ee",
    semester: 4,
    tags: ["power electronics", "converters", "electrical"],
    category: "textbook",
  },
];

export const getBooksByCourse = (courseId: string, semesterId: number | null = null) => {
  return books.filter(
    (book) => book.course === courseId && (semesterId === null || book.semester === semesterId)
  );
};

export const getRecommendedBooks = (courseId: string, semesterId: number | null = null) => {
  return books.filter(
    (book) => 
      book.course === courseId && 
      (semesterId === null || book.semester === semesterId) && 
      book.isRecommended === true
  );
};

export const getCoursePackages = (courseId: string, semesterId: number | null = null) => {
  const filteredBooks = getBooksByCourse(courseId, semesterId);
  
  // Group books by semester
  const semesterGroups = filteredBooks.reduce((groups: Record<number, Book[]>, book) => {
    const sem = book.semester;
    if (!groups[sem]) {
      groups[sem] = [];
    }
    groups[sem].push(book);
    return groups;
  }, {});
  
  // Create packages for each semester
  return Object.entries(semesterGroups).map(([semester, books]) => ({
    id: `${courseId}-sem${semester}`,
    name: `${courses.find(c => c.id === courseId)?.name} - Semester ${semester}`,
    bookCount: books.length,
    totalSize: calculateTotalSize(books),
    books: books,
  }));
};

const calculateTotalSize = (books: Book[]): string => {
  const totalMB = books.reduce((sum, book) => {
    const size = parseFloat(book.fileSize.replace(' MB', ''));
    return sum + size;
  }, 0);
  
  return totalMB.toFixed(1) + ' MB';
};
