import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Text,
  Image, // Import Image from Chakra UI for better image handling
} from '@chakra-ui/react';

interface InfoDrawerProps {
  name: string;       // Character name
  biography: string;  // Character biography
  wikiLink: string;   // URL to the character's wiki page
  imageLink: string;  // URL for the character's image
}

const InfoDrawer: React.FC<InfoDrawerProps> = ({ name, biography, wikiLink, imageLink }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button colorScheme='teal' onClick={onOpen}>
        Info
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        size='lg'
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth='1px'>
            <h1 className='text-4xl font-bold'>{name}</h1> {/* Use the name prop */}
          </DrawerHeader>
          <DrawerBody>
            <Image 
              src={imageLink} // Use the image link prop
              alt={name}      // Set alt attribute for accessibility
              borderRadius='md' // Optional: Add some border radius
              mb={4}          // Add margin below the image
            />
            <Button
              color='white'
              bg='orange'
              _hover={{ bg: 'orange.400' }}
              as="a"
              href={wikiLink} // Use the wiki link prop
              target="_blank"
            >
              Go to Official Wiki
            </Button>
            <Text my='6'>{biography}</Text> {/* Display the biography prop */}
          </DrawerBody>
          <DrawerFooter borderTopWidth='1px'>
            <Button colorScheme='blue' variant='outline' mr={3} onClick={onClose}>
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default InfoDrawer;
