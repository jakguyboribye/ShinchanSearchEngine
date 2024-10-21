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
  // const firstField = React.useRef()

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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean luctus nibh sapien, vitae fringilla nisl ornare vitae. In mi erat, maximus eu lacinia dictum, efficitur eget elit. Mauris posuere molestie nisi, sed volutpat purus dictum sed. In elit leo, scelerisque nec mauris sed, eleifend cursus ipsum. Integer et augue varius magna auctor aliquet fermentum condimentum lacus. Sed eget posuere nisi, ut rutrum ex. Quisque eros odio, consequat at finibus ut, fermentum sit amet mauris. Nunc vitae velit nibh. Nam vehicula justo velit, ac dapibus neque lacinia in. Praesent vel elit eget tellus iaculis auctor vel eget diam. Nunc sollicitudin dictum nibh vitae facilisis. Curabitur fringilla massa arcu, a mollis risus sagittis et. Integer nunc magna, eleifend suscipit nisi nec, tristique ullamcorper orci. Maecenas sed arcu quis sapien egestas ullamcorper. Curabitur ultricies mauris nec nibh luctus, non fringilla nulla tempor. Etiam ut sagittis dui, a placerat lacus.

Suspendisse tincidunt molestie orci ut tincidunt. Duis sodales eleifend diam, sit amet vestibulum mauris tempus at. Ut ac fringilla metus. In bibendum lectus urna, ac egestas magna euismod eget. Integer lobortis libero ex, vel tincidunt odio egestas in. Maecenas pharetra dui sit amet orci mollis, quis volutpat orci gravida. Mauris nec dapibus quam, eu auctor neque. Proin accumsan condimentum imperdiet. Ut scelerisque gravida magna. Praesent pharetra sit amet dui in auctor. Proin mauris est, venenatis nec vulputate vel, ultricies quis dolor.

Nulla facilisi. Nullam malesuada sit amet sapien ut vestibulum. Fusce vehicula fringilla tellus, at auctor lorem facilisis sed. Proin viverra feugiat orci vitae bibendum. In at congue enim. Curabitur fringilla urna sed leo sagittis semper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus dui lacus, congue sed lorem eget, luctus dictum risus. Cras mattis est a dolor vestibulum, ut eleifend felis porta. Nunc eu felis nec enim elementum pulvinar in a augue. Proin non augue lorem. Praesent bibendum felis massa, non porta lorem accumsan ac. Donec scelerisque leo mi, vehicula porttitor nunc malesuada vitae. Sed sed tortor molestie, faucibus odio quis, aliquam sapien. Maecenas accumsan lorem quis nulla porta bibendum. Morbi mattis arcu id mi molestie, eu luctus nisl blandit.

Phasellus sapien ipsum, placerat non lectus ut, malesuada tempor massa. Sed quis ipsum vitae nibh commodo semper quis eu eros. Curabitur facilisis erat est, in dignissim magna congue quis. Phasellus mi leo, semper eget cursus sit amet, auctor et lorem. Aenean elementum nisi sit amet lectus gravida faucibus. In id ex pulvinar, varius lacus a, sagittis tortor. Curabitur hendrerit imperdiet magna, vehicula dictum risus rhoncus sagittis. Phasellus semper quam at ligula luctus, laoreet maximus justo tempus. Nunc sed commodo orci, at tincidunt odio. Pellentesque ultrices erat sed nulla mattis, sit amet euismod nibh accumsan. Aenean a massa in libero maximus sollicitudin. Sed ultrices arcu in mauris tincidunt dignissim. Integer varius augue ac condimentum aliquam.

Proin vitae orci ut enim convallis venenatis. Nunc non tincidunt risus, et vestibulum lacus. Cras ullamcorper enim sit amet pretium blandit. Sed ante arcu, blandit in mauris interdum, mollis porttitor leo. Sed id.
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
