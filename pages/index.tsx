import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'
import { VStack, Box, Heading, Link, Icon } from '@chakra-ui/react'
import { AiFillGithub,AiFillMediumCircle} from "react-icons/ai";

const Home: NextPage = () => {
  return (
    <Layout>
      <VStack spacing="24px"align="stretch">
      <Box as="section">
      <Heading>Michal Sapka</Heading>
      Self-though senior software engineer from Poland.
      </Box>

      <Box as="section">
      <Heading as="h3">About me</Heading>
        I am a self-thoght software engineer working with at <Link href="https://zendesk.com">Zendesk</Link>. Even though I&apos;ve sterted my professional programig life relatively late in life, I&apos;ve been passionate with computers since being 10 years old.  I love the process of creating software. Even though understanding the product is a requisite, I am strongly driven by the technical side. I take pride at what and how I do things. I have biggest experience working with Ruby on Rails and relative datababases, but I am expanding my knowlege around service oriented architecture, no-sql databases and other languages - currently I am trying to get a hang of Golang, MongoDB. I am also trying to get familiar with modern ReactJS ecosystem.
      </Box>
      
      <Box as="section">
      <Heading as="h3">I enjoy</Heading>
      Non-action movies, anime and manga, classic PC games (with huge love for adventure ganre), literature, jazz.
      </Box>
      <Box as="section">
      <Heading as="h3">Recent publications</Heading>
      ...
      </Box>

      <Box as="section">
      <Heading as="h3">On the web</Heading>
         <Link href="https://github.com/michalsapka" isExternal><Icon as={AiFillGithub}/> Github</Link>
         <Link href="https://medium.com/@msapka" isExternal><Icon as={AiFillMediumCircle}/> Medium</Link>
      </Box>
      </VStack>
    </Layout>
  )
}

export default Home
