"use client"
import React from 'react';
import { Card, CardBody, CardFooter, Stack, Heading, Divider } from '@chakra-ui/react';
import InfoDrawer from '../InfoPage/InfoDrawer';

// Define an interface for the component props
interface CharacterCardProps {
  imageLink: string; // URL for the character image
  name: string;      // Name of the character
  wikiLink: string;  // URL for the character's wiki page
  biography: string;  // Short biography of the character
}

const CharacterCard: React.FC<CharacterCardProps> = ({ imageLink, name, wikiLink, biography }) => {
  return (
    <div>
      <Card maxW='sm' shadow="lg" m='10' width='200px' height='300px'>
        <CardBody>
          <img
            src={imageLink}
            alt={name}
            className="h-20"
            style={{ objectFit: 'cover' }}
            onError={(e) => {
              e.currentTarget.src = 'path/to/placeholder-image.png'; // Fallback image
            }}
          />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>{name}</Heading> 
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <InfoDrawer
            name={name}        
            biography={biography} 
            wikiLink={wikiLink}  
            imageLink={imageLink} 
          />
        </CardFooter>
      </Card>
    </div>
  );
}

export default CharacterCard;
