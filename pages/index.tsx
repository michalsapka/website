import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'
import { 
  VStack, 
  HStack,
  Box, 
  Heading, 
  Link, 
  Icon,
  Text,
  Image as CImage,
  Stack,
  Button,
} from '@chakra-ui/react'
import { AiFillGithub,AiFillMediumCircle} from "react-icons/ai";
import Publications from "../data/publications"

type BioEntryType = {
  date: string,
  description: string
}

const BioEntry = ({date, description} : BioEntryType) => {
  return <HStack spacing="6" alignItems="start">
      <Box fontWeight='bolder'>{date}</Box>
      <Box>{description}</Box>
  </HStack>
}

const Home: NextPage = () => {
  return (
    <Layout>
      <VStack spacing="24px"align="stretch">
        <Box as="section">
          <Stack width="100%" direction={["column", "column", "row"]}>
            <Box flex="1">
              <Heading variant="main-title">Michal Sapka</Heading>
              <Text variant="main-title">Self-though senior software engineer from Poland.</Text>
            </Box>
            <Box textAlign="center">
              <CImage
                display="inline-block"
                src="images/michal.png"
                width="80px"
                borderRadius="full"
                />
            </Box>
          </Stack>
        </Box>

      <Box as="section">
      <Heading variant="section-title" as="h3">About me</Heading>
          <Text>
            I am a self-thought software engineer working at <Link href="https://zendesk.com" isExternal>Zendesk</Link>. Even though I started my professional programming life relatively late in life, I&apos;ve been passionate about computers since I was ten. I love the process of creating software. Even though I consider caring about the product a requisite, the technical side strongly drives me. I take pride in what and how I do things. I have most extensive experience working with Ruby on Rails and relative databases. Still, I am expanding my knowledge around service-oriented architecture, no-SQL databases, and other languages - currently, I am trying to get the hang of Golang and MongoDB. I am also trying to get familiar with the modern ReactJS ecosystem.
        </Text>
      </Box>
      
      <Box as="section">
      <Heading variant="section-title" as="h3">Bio</Heading>
          <BioEntry date="1985" description="Born"/>
          <BioEntry date="2009" description="Gratuated The Silesian University of Technology with M.Eng. title in Automation and Robotics"/>
          <BioEntry date="2016" description="Joined Zendesk"/>

      </Box>

     <Box as="section">
      <Heading variant="section-title" as="h3">Recent publications</Heading>
          <VStack spacing="1" alignItems="start">
            {Publications.map((value, key) => {
              return <Box key={key}>
                       <Link href={value.url} isExternal>{value.name}</Link>
                     </Box>

            })}
          </VStack>
            
            <Stack width="100%" direction={['column', 'column', 'row', 'row']}>
            <Box flex="1" textAlign={['left', 'left', 'center', 'center']}>
              <Link href="https://mailchi.mp/85b0caa8a1c1/michalsapkapl" isExternal>
                <Button>Subscribe to my newsletter</Button>
              </Link>
            </Box>
            </Stack>
      </Box>

        <Box as="section">
          <Heading variant="section-title" as="h3">On the web</Heading>
          <VStack spacing="1" alignItems="start">
            <Box>
              <Link href="https://github.com/michalsapka" isExternal><Icon as={AiFillGithub}/> Github</Link>
            </Box>
            <Box>
              <Link href="https://medium.com/@msapka" isExternal><Icon as={AiFillMediumCircle}/> Medium</Link>
            </Box>
          </VStack>

        </Box>
      </VStack>
    </Layout>
  )
}

export default Home
