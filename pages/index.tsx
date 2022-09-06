import type { NextPage } from 'next'
import Layout from '../components/layout'
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
import Head from 'next/head'
import { AiFillGithub,AiFillMediumCircle} from "react-icons/ai";
import Publications from "../data/publications"
import { NextSeo } from 'next-seo'
import generateRssFeed from "../lib/feed"

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
      <NextSeo
        title="Michał Sapka - Homepage"
        description="Hello and welcome to my homepage"
        />
      <VStack spacing="24px"align="stretch">
        <Box as="section">
          <Stack width="100%" direction={["column", "column", "row"]}>
            <Box flex="1">
              <Heading variant="main-title">Michał Sapka</Heading>
              <Text variant="main-title">Self-though Senior Software Engineer working at Zendesk.</Text>
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
            Michał is a self-thought software engineer working at <Link href="https://zendesk.com" isExternal>Zendesk</Link>. Even though he has started his professional programming life relatively late in life, he has been passionate about computers since he was ten. He loves the process of creating software. Even though he consider caring about the product a requisite, the technical side strongly drives him. He takes pride in what and how he do things. He has most extensive experience working with Ruby on Rails and relative databases. Still, he is expanding my knowledge around service-oriented architecture, no-SQL databases, and other languages - currently, he is trying to get the hang of Golang and MongoDB. He is also trying to get familiar with the modern ReactJS ecosystem.
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
                       <Link href={value.url} isExternal>{value.title}</Link>
                     </Box>

            })}
          </VStack>
            
            <Stack width="100%" direction={['column', 'column', 'row', 'row']}>
            <Box flex="1" mt="2" mb="2" textAlign={['left', 'left', 'center', 'center']}>
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

export const getStaticProps = async (context : any) => {
  await generateRssFeed();
  return { props: {} };
};

export default Home
