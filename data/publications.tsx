type Publication = {
  name: string,
  url: string,
}

const Publications : Array<Publication> = [
  {
    name: "Buffers, splits and tabs in Vim",
    url: "https://medium.com/@msapka/buffers-splits-and-tabs-in-vim-5bb3b6dc1c19"

  },
  {
    name: "A month with a disgusting ThinkPad",
    url: "https://medium.com/@msapka/a-month-with-a-disgusting-thinkpad-936e7c675a74"

  },
  {
    name: "Managing dotfiles with GNU Stow",
    url: "https://medium.com/@msapka/managing-dotfiles-with-gnu-stow-72b4e3bb9434"

  },
  {
    name: "Adding dynamic DNS to my home server",
    url: "https://medium.com/@msapka/adding-dynamic-dns-to-my-home-server-d05bf65358cc"
  }
]

export default Publications
