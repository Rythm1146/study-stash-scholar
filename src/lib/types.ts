
export interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  coverImage: string;
  fileSize: string;
  fileType: string;
  downloadUrl: string;
  publishedDate: string;
  course: string;
  semester: number;
  tags: string[];
  category: 'textbook' | 'notes' | 'paper' | 'reference';
  isRecommended?: boolean;
}

export interface Course {
  id: string;
  name: string;
  code: string;
  description?: string;
  semesters: number[];
}

export interface FilterOptions {
  course: string;
  semester: number | null;
  category: string | null;
}
