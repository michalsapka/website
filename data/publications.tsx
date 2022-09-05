type Publication = {
  title: string,
  url: string,
  summary: string,
  publishedAt: string,
}

const Publications : Array<Publication> = [
  {
    title: "Buffers, splits and tabs in Vim",
    url: "https://medium.com/@msapka/buffers-splits-and-tabs-in-vim-5bb3b6dc1c19",
    summary: "",
    publishedAt: "Aug 18, 2022"

  },
  {
    title: "A month with a disgusting ThinkPad",
    url: "https://medium.com/@msapka/a-month-with-a-disgusting-thinkpad-936e7c675a74",
    summary: "",
    publishedAt: "Aug 8, 2022",

  },
  {
    title: "Managing dotfiles with GNU Stow",
    url: "https://medium.com/@msapka/managing-dotfiles-with-gnu-stow-72b4e3bb9434",
    summary: "",
    publishedAt: "Aug 5, 2022",

  },
  {
    title: "Adding dynamic DNS to my home server",
    url: "https://medium.com/@msapka/adding-dynamic-dns-to-my-home-server-d05bf65358cc",
    summary: "",
    publishedAt: "Aug 4, 2022",
  }
]

export default Publications
