export default function TopNav() {
  return(
    <>
      <header className="flex flex-row mx-auto max-w-screen-lg px-3 py-6">
        <div className="basis-1/4">
          Michal Sapka
        </div>
        <nav className="basis-3/4 flex flex-row">
          <a clasName="basis-1/2" href="publications">Publications</a>
          <a clasName="basis-1/2" rel="noreferrer" href="https://github.com/michalsapka/michal-sapka-pl" target="_blank">
            Code
          </a>
        </nav>
      </header>
    </>
  )
}
