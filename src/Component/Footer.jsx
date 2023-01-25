import React from 'react';
import {
  Box,
  Button,
  Heading,
  HStack,
  Input,
  Stack,
  VStack,
  Text,
} from '@chakra-ui/react';
import { AiOutlineSend } from 'react-icons/ai';
const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p="16" color={'white'}>
      <Stack direction={['column','row']}>
        <VStack alignItems={"stretch"} w="full" px={'4'}>
          <Heading size="md" textTransform={'uppercase'} textAlign={'center'}>
            Follow us For More
          </Heading>

          <HStack borderBottom={'2px solid white'} py="2">
            <Input
              placeholder="Enter Email Here ...."
              border={'none'}
              borderRadius="none"
              outline={'none'}
              focusBorderColor="none"
            />

            <Button
              p={'0'}
              colorScheme={'purple'}
              variant={'ghost'}
              borderRadius={'0 20px 20px 0 '}
            >
              <AiOutlineSend  size={20}/>
            </Button>
           </HStack>
        </VStack>

        <VStack w={'full'} borderLeft={["none","1px solid white"]} 
        borderRight={["none","1px solid white"]}>
            <Heading textTransform={'uppercase'} textAlign={'center'}>
                Media Hub
            </Heading>
            <Text>
                All Rights Received
            </Text>

        </VStack>

        <VStack w={'full'}>
            <Heading size={'md'} textTransform={'uppercase'}>
                Social Platforms
            </Heading>

            <Button variant={"link"} colorScheme={'white'}>
                <a target={'blank'}  href="https://youtu.be/GzFnLZ2gyBY">Youtube </a>
                
            </Button>
            <Button variant={"link"} colorScheme={'white'}>
                <a  target={'blank'} href="https://youtu.be/GzFnLZ2gyBY">GitHub</a>
                 
            </Button>
            <Button  variant={"link"} colorScheme={'white'}>
                <a  target={'blank'} href="https://youtu.be/GzFnLZ2gyBY">Instagram</a>
                
            </Button>
            
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;