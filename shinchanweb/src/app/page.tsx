"use client";
import { useState } from 'react';
import { Input, Box, Text, Select } from '@chakra-ui/react';
import CharacterCard from './components/CharacterCard';

interface Character {
  imageLink: string;
  name: string;
  wikiLink: string;
  biography: string;
}

// Define the interface for the Elasticsearch hit structure
interface ESCharacterHit {
  _source: {
    Name: string;          // Use correct casing for the keys
    Biography: string;
    'Wiki Link': string;
    'Image Link': string;
  };
}

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<Character[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchOption, setSearchOption] = useState('oneWord'); // Default option

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchOption(event.target.value);
  };

  const sendSearchRequest = async () => {
    if (!searchTerm) return;

    setLoading(true);

    try {
      const response = await fetch('http://localhost:3001/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: searchTerm, option: searchOption }), // Send selected option
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      const characters: Character[] = data.map((hit: ESCharacterHit) => ({
        imageLink: `http://localhost:3001/proxy/image?url=${encodeURIComponent(hit._source['Image Link'])}` || '',
        name: hit._source['Name'] || '',
        wikiLink: hit._source['Wiki Link'] || '',
        biography: hit._source['Biography'] || '',
      }));

      setResults(characters);
    } catch (error) {
      console.error('Error fetching data:', error);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box>
      <Box className='flex' alignItems="center" p="4">
        <img className="ml-6 h-16" src='/logo.png' alt="Logo" />
        
        <Select 
          placeholder='Select search option' 
          my="15" 
          mx="2"
          onChange={handleOptionChange} 
          width="200px"
        >
          <option value="oneWord">One Word Query</option>
          <option value="multipleWords">Multiple Word Query</option>
          <option value="partialMatch">Partial Match</option>
          <option value="ranking">Ranking</option>
        </Select>

        <Input
          placeholder='Search'
          my="15"
          mx="2"
          bg="white"
          width="600px"
          value={searchTerm}
          onChange={handleInputChange}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              sendSearchRequest();
            }
          }}
        />
      </Box>

      {loading ? (
        <Box display="flex" justifyContent="center" alignItems="center" height="80vh">
          <img src="/dance.gif" alt="Dancing" style={{ width: '100px', height: '100px' }} />
        </Box>
      ) : (
        <Box className="flex flex-wrap justify-start mx-10">
          {results.length > 0 ? (
            results.map((character, index) => (
              <CharacterCard
                key={index}
                imageLink={character.imageLink}
                name={character.name}
                wikiLink={character.wikiLink}
                biography={character.biography}
              />
            ))
          ) : (
            <Text>No results found. Try a different search term.</Text>
          )}
        </Box>
      )}
    </Box>
  );
}
