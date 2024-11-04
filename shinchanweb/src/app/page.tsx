<<<<<<< Updated upstream
import { Input } from '@chakra-ui/react'
import CharacterCard from "./components/CharacterCard";
=======
"use client"
import { useState } from 'react';
import { Input, Spinner, Box, Text } from '@chakra-ui/react';
import CharacterCard from './components/CharacterCard';

// Define the Character interface
interface Character {
  imageLink: string;
  name: string;
  wikiLink: string;
  biography: string;
}
>>>>>>> Stashed changes

// Define the interface for the Elasticsearch hit structure
interface ESCharacterHit {
  _source: {
    name: string;
    biography: string;
    wikiLink: string;
    imageLink: string;
  };
}

export default function Home() {
<<<<<<< Updated upstream
=======
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<Character[]>([]);
  const [loading, setLoading] = useState(false);

  // Input change handler
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  // Search function to make the API request
  const sendSearchRequest = async () => {
    if (!searchTerm) return;

    setLoading(true);

    try {
      const response = await fetch('http://localhost:3001/search', { // Hardcoded API URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: searchTerm }), // Send search term
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      // Transform Elasticsearch response to match Character interface
      const characters: Character[] = data.map((hit: ESCharacterHit) => ({
        imageLink: hit._source.imageLink || '',  // Ensure data structure matches
        name: hit._source.name || '',
        wikiLink: hit._source.wikiLink || '',
        biography: hit._source.biography || '',
      }));

      setResults(characters);
    } catch (error) {
      console.error('Error fetching data:', error);
      setResults([]); // Clear results on error
    } finally {
      setLoading(false); // Stop loading state
    }
  };

>>>>>>> Stashed changes
  return (
    <div>
      <div className='flex'>
      <h1 className=' mt-6 ml-6'>logo</h1>
      <Input placeholder='Search' my='15' mx='10' bg='white' w='600px' />
      </div>
      
      
      <div className='flex flex-wrap justify-start mx-10'>
      <CharacterCard />
      <CharacterCard />
      <CharacterCard />
      <CharacterCard />
      <CharacterCard />
      <CharacterCard />
      <CharacterCard />
      <CharacterCard />
      <CharacterCard />
      <CharacterCard />
      <CharacterCard />
      <CharacterCard />
      <CharacterCard />
      <CharacterCard />
      <CharacterCard />
      <CharacterCard />
      <CharacterCard />
      <CharacterCard />
      <CharacterCard />
      <CharacterCard />
      </div>



    </div>
  );
}
