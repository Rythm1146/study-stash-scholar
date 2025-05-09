
import { Book } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { DownloadIcon } from "lucide-react";
import { toast } from "@/components/ui/sonner";

interface RecommendedBooksProps {
  books: Book[];
}

const RecommendedBooks = ({ books }: RecommendedBooksProps) => {
  const handleDownload = (book: Book) => {
    toast.success(`Started downloading ${book.title}`);
  };

  if (books.length === 0) {
    return null;
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-serif font-medium">Recommended Books</h2>
      <div className="space-y-4">
        {books.map((book) => (
          <div
            key={book.id}
            className="flex flex-col gap-4 rounded-lg border bg-white p-4 sm:flex-row"
          >
            <div className="h-32 w-24 flex-shrink-0 overflow-hidden rounded-md">
              <img
                src={book.coverImage}
                alt={book.title}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col">
              <h3 className="font-medium">{book.title}</h3>
              <p className="text-sm text-muted-foreground">By {book.author}</p>
              <p className="mt-2 text-sm line-clamp-2">{book.description}</p>
              <div className="mt-auto flex items-center gap-4 pt-2">
                <span className="text-xs text-muted-foreground">
                  {book.fileType} • {book.fileSize}
                </span>
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={() => handleDownload(book)}
                >
                  <DownloadIcon className="mr-1 h-3 w-3" /> Download
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedBooks;
