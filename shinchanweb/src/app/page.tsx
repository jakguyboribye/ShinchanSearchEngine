import { Input } from '@chakra-ui/react'
import CharacterCard from "./components/CharacterCard";

export default function Home() {
  return (
    <div>
      <Input placeholder='Search' my='15' mx='10' bg='white' w='600px' />
      <CharacterCard />


    </div>
  );
}
