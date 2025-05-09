
import { Book } from "@/lib/types";
import BookCard from "./BookCard";

interface BookListProps {
  books: Book[];
  emptyMessage?: string;
}

const BookList = ({ books, emptyMessage = "No books found" }: BookListProps) => {
  if (books.length === 0) {
    return (
      <div className="flex h-64 items-center justify-center rounded-lg border border-dashed p-8 text-center">
        <p className="text-muted-foreground">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
