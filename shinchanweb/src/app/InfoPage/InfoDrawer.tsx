import React from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure
} from '@chakra-ui/react'

function InfoDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const firstField = React.useRef()

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
            <h1 className=' text-4xl font-bold'>Character Name</h1>
          </DrawerHeader>
          <img src="https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/1675/1715415371675-i"/>
          <DrawerBody>
            <Button
              color='white'
              bg='orange'
              _hover={{ bg: 'orange.400' }}
              as="a"
              href="https://crayonshinchan.fandom.com/wiki/Crayon_Shin_Chan_Wiki"
              target="_blank"
            >
              Go to Official wiki
            </Button>
            <h3 className=' my-6'>

              Some info
            </h3>
          </DrawerBody>

          <DrawerFooter borderTopWidth='1px'>
            <Button colorScheme='blue' variant='outline' mr={3} onClick={onClose}>
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default InfoDrawer
