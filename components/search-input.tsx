'use client'
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function SearchInput() {
  const searchParams = useSearchParams()
  const pathName = usePathname()
  const {replace} = useRouter()

  function handleChange (e: React.ChangeEvent<HTMLInputElement>) {
    const params = new URLSearchParams(searchParams)
    
    const searchString = e.currentTarget.value;
    
    if (searchString) {
      params.set('search', searchString)
    } else {
      params.delete('search')
    }
    console.log(pathName)
    replace(`${pathName}?${params.toString()}`)
  }

  return (
    <div className="relative">
      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
      onChange={handleChange}
        type="search"
        placeholder="Busque por nome..."
        className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
      />
    </div>
  );
}
