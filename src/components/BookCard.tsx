
import { Book } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { DownloadIcon } from "lucide-react";
import { toast } from "@/components/ui/sonner";

interface BookCardProps {
  book: Book;
}

const BookCard = ({ book }: BookCardProps) => {
  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    toast.success(`Started downloading ${book.title}`);
  };

  return (
    <div className="book-card h-full">
      <div className="h-full overflow-hidden rounded-lg border bg-white shadow-sm">
        <div className="relative h-56 overflow-hidden">
          <img 
            src={book.coverImage} 
            alt={book.title} 
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105" 
          />
          <div className="book-overlay">
            <h3 className="text-lg font-medium text-white">{book.title}</h3>
            <p className="text-sm text-white/80">By {book.author}</p>
          </div>
        </div>
        <div className="p-4">
          <div className="mb-2 flex items-center gap-2">
            <span className="rounded bg-brand-50 px-2 py-0.5 text-xs font-medium text-brand-800">
              {book.category}
            </span>
            <span className="rounded bg-accent-50 px-2 py-0.5 text-xs font-medium text-accent-800">
              {book.fileType} • {book.fileSize}
            </span>
          </div>
          <p className="mb-4 text-sm text-muted-foreground line-clamp-2">
            {book.description}
          </p>
          <Button 
            className="w-full" 
            size="sm" 
            onClick={handleDownload}
          >
            <DownloadIcon className="mr-2 h-4 w-4" /> Download
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
