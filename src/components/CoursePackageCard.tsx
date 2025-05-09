
import { Book } from "@/lib/types";
import { DownloadIcon, FileIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";

interface CoursePackageProps {
  id: string;
  name: string;
  bookCount: number;
  totalSize: string;
  books: Book[];
}

const CoursePackageCard = ({
  id,
  name,
  bookCount,
  totalSize,
  books,
}: CoursePackageProps) => {
  const handleDownloadPackage = () => {
    toast.success(`Started downloading package: ${name}`);
  };

  return (
    <div className="overflow-hidden rounded-lg border bg-white shadow-sm">
      <div className="p-6">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-medium">{name}</h3>
        </div>
        <div className="mb-4 flex items-center gap-4 text-sm">
          <div className="flex items-center gap-1">
            <FileIcon className="h-4 w-4 text-muted-foreground" />
            <span>{bookCount} books</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-muted-foreground">Total size:</span>
            <span>{totalSize}</span>
          </div>
        </div>
        <div className="space-y-3">
          {books.slice(0, 3).map((book) => (
            <div key={book.id} className="flex items-center gap-3">
              <div className="h-10 w-10 overflow-hidden rounded">
                <img
                  src={book.coverImage}
                  alt={book.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex-1 truncate">
                <p className="truncate text-sm font-medium">{book.title}</p>
                <p className="text-xs text-muted-foreground">{book.fileType}</p>
              </div>
            </div>
          ))}
          {books.length > 3 && (
            <p className="text-center text-xs text-muted-foreground">
              +{books.length - 3} more books
            </p>
          )}
        </div>
        <Button 
          className="mt-4 w-full" 
          onClick={handleDownloadPackage}
        >
          <DownloadIcon className="mr-2 h-4 w-4" /> Download Package
        </Button>
      </div>
    </div>
  );
};

export default CoursePackageCard;
