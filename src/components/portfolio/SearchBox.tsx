
import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useSearchParams } from 'react-router-dom';

interface SearchBoxProps {
  placeholder?: string;
}

const SearchBox = ({ placeholder = "Search projects..." }: SearchBoxProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  
  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Update URL when search query changes, with debounce effect
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const newParams = new URLSearchParams(searchParams.toString());
      
      if (searchQuery) {
        newParams.set('search', searchQuery);
        // Reset to page 1 when searching
        newParams.set('page', '1');
      } else {
        newParams.delete('search');
      }
      
      setSearchParams(newParams);
    }, 300); // 300ms debounce
    
    return () => clearTimeout(timeoutId);
  }, [searchQuery, searchParams, setSearchParams]);

  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
        <Search className="h-4 w-4 text-gray-500" />
      </div>
      <Input
        type="text"
        placeholder={placeholder}
        value={searchQuery}
        onChange={handleSearchChange}
        className="pl-9 w-full"
        aria-label="Search projects"
      />
    </div>
  );
};

export default SearchBox;
