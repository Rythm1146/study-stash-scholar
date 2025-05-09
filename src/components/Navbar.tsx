
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, Search } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="border-b bg-white">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-brand-700" />
          <span className="font-serif text-xl font-medium">StudyStash</span>
        </Link>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex">
            <div className="flex items-center gap-6">
              <Link to="/" className="text-sm font-medium">Home</Link>
              <Link to="/browse" className="text-sm font-medium">Browse</Link>
              <Link to="/about" className="text-sm font-medium">About</Link>
            </div>
          </div>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
