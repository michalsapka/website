import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <Layout>
      <section>
      <Header text={"Michal Sapka"}/>
      Self-though senior software engineer from Poland.
      </section>

      <section>
      <Header text={"About me"}/>
      <Text>
        I am a self-thoght software engineer working with at <LinkOut text={"Zendesk Cracow"} url={"https://zendesk.com"}/>. Even though I&apos;ve sterted my professional programig life relatively late in life, I&apos;ve been passionate with computers since being 10 years old.  I love the process of creating software. Even though understanding the product is a requisite, I am strongly driven by the technical side. I take pride at what and how I do things. I have biggest experience working with Ruby on Rails and relative datababases, but I am expanding my knowlege around service oriented architecture, no-sql databases and other languages - currently I am trying to get a hang of Golang, MongoDB. I am also trying to get familiar with modern ReactJS ecosystem.
      </Text>
      </section>
      
      <section>
      <Header text={"I enjoy"}/>
      Non-action movies, anime and manga, classic PC games (with huge love for adventure ganre), literature, jazz.
      </section>
      <section>
      <Header text={"Recent publications"}/>
      ...
      </section>

      <section>
      <Header text={"On the web"}/>
         <LinkOut text="Github" url="https://github.com/michalsapka"/>
         <LinkOut text="Medium" url="https://medium.com/@msapka"/>
      </section>
    </Layout>
  )
}

const Header = ({text}) => {
  return(
    <h2>{text}</h2>
  )
}

const LinkOut = ({url, text}) => {
  return <a href={url} target="_blank" rel="noreferrer">{text}</a>
}

const Text = ({children}) => {
  return <div className={
    'indent-0.5',
    'whitespace-pre-line'
  }>
    {children}
  </div>
}

export default Home
