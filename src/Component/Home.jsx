import { Box ,Image,Heading,Container, Stack,Text} from '@chakra-ui/react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import React from 'react'
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';


const headingOptions = {
    pos: "absolute",
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    textTransform: 'uppercase',
    p: '4',
    size: '4xl',
};

const Home = () => {
  return (
    <Box>
        <MyCarousel/>
        
        <Container maxW={'container.xl'} minH={'100vh'} p="16">
            <Heading 
             textTransform={'uppercase'}
             py="2"
             w={"fit-content"}
             borderBottom={'2px solid'}
             m="auto">
                Services
            </Heading>

            <Stack
                h="full"
                p={'4'}
                alignItems={'center'}
                direction={['column','row']}            
            >
                <Image src={img5} h={['40','400']}  filter={"hue-rotate(-130deg)"}  />

                <Text letterSpacing={"widest"} lineHeight={"190%"} p={["4","16"]} textAlign={'center'} fontFamily={"cursive"}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dignissimos perferendis iure dolorum eum unde vitae magni, amet inventore recusandae ipsa repudiandae dolorem enim in! Aliquid reprehenderit quidem eos dignissimos.Lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis tenetur iure inventore ab harum voluptate pariatur, corporis magni facilis ex sit suscipit! Unde cupiditate nesciunt laboriosam harum dolorem quos deserunt! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum quod, pariatur, quis qui laborum excepturi ipsum consequuntur rem et nemo doloribus eveniet incidunt dignissimos repellat. Illum at aut aliquid tenetur?
                </Text>

            </Stack>   
        </Container>
    </Box>
  )
};

const MyCarousel =() =>(
    <Carousel 
      autoPlay
      infiniteLoop 
      interval={1000}
      showStatus={false}
      showThumbs={false}
      showArrows={false}>
      
     <Box w="full" h={'100vh'}>
       <Image src={img1} h="full" w={'full'} objectFit={'cover'} />
       <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
         Watch The Future
       </Heading>
      </Box>
     <Box w="full" h={'100vh'}>
       <Image src={img2} h="full" w={'full'} objectFit={'cover'} />
       <Heading bgColor={'whiteAlpha.800'} color={'black'} {...headingOptions}>
         Future is Gaming
       </Heading>
      </Box>
     <Box w="full" h={'100vh'}>
       <Image src={img3} h="full" w={'full'} objectFit={'cover'} />
       <Heading bgColor={'whiteAlpha.800'} color={'black'} {...headingOptions}>
         Gaming on Console
       </Heading>
      </Box>
     <Box w="full" h={'100vh'}>
       <Image src={img4} h="full" w={'full'} objectFit={'cover'} />
       <Heading bgColor={'whiteAlpha.800'} color={'black'} {...headingOptions}>
         Night Life is Good
       </Heading>
      </Box>

    </Carousel>
)

export default Home
