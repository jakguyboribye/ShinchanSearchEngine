import { Input } from '@chakra-ui/react'
import CharacterCard from "./components/CharacterCard";

export default function Home() {
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
