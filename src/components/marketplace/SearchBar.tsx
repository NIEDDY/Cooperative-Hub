import React from 'react'
import { Input } from '../ui/input'
import { Search } from 'lucide-react'

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, placeholder }) => {
  return (
    <div className="relative flex-1">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
      <Input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder || 'Search...'}
        className="pl-10 border-[#a8d5b2] bg-white/70 backdrop-blur-md focus:ring-2 focus:ring-[#43a047] transition-all duration-300 rounded-xl"
      />
    </div>
  )
}

export default SearchBar
