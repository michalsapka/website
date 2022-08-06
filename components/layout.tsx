import TopNav from '../components/topnav.tsx'

export default function Layout({ children }) {
  return (
    <>
      <TopNav/>
      <main className="mx-auto max-w-screen-lg px-3 py-6">
        {children}
      </main>
    </>
  )
}
