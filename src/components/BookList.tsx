
import { Book } from "@/lib/types";
import BookCard from "./BookCard";
import { motion } from "framer-motion";

interface BookListProps {
  books: Book[];
  emptyMessage?: string;
}

const BookList = ({ books, emptyMessage = "No books found" }: BookListProps) => {
  if (books.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex h-64 items-center justify-center rounded-lg border border-dashed p-8 text-center"
      >
        <p className="text-muted-foreground">{emptyMessage}</p>
      </motion.div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {books.map((book, index) => (
        <motion.div
          key={book.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
            ease: "easeOut"
          }}
        >
          <BookCard book={book} />
        </motion.div>
      ))}
    </div>
  );
};

export default BookList;
