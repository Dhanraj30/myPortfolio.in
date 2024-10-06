import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Others", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
  { name: "Resume", link: "/dhanraj-resume.pdf" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.jpg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development and also love Defi  ",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a Block.Ai AI integrated with Blockchain",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Liquidity-Pool Finder",
    des: "This project is a web3 tool that allows users to find any network pool address and liquidity details on the blockchain. It leverages the Uniswap V3 Pool Factory contract, Solidity, JavaScript, Next.js, Ether.js, and Tailwind CSS to create an intuitive and powerful user interface.",
    img: "/p1.png",
    iconLists: ["/re.svg", "/tail.svg", "/js.svg", "/metamask.svg", "/ethereum.svg"],
    link: "https://liquidity-pool-finder.vercel.app/",
  },
  {
    id: 2,
    title: "Custom-Swap (Defi dApp)",
    des: "It is a decentralized application (dApp) that allows seamless swapping of crypto assets. Whether you want to trade Ethereum (ETH) for tokens, tokens for ETH, or even tokens for other tokens has covered.",
    img: "/p2.png",
    iconLists: ["/next.svg", "/tail.svg", "/js.svg", "/sol.svg", "/ethereum.svg"],
    link: "https://custom-swap-v2.vercel.app/",
  },
  {
    id: 3,
    title: "Staking Platform ",
    des: "Decentralized Staking Platform with an integrated ERC20 token. Users will be able to stake tokens and add liquidity",
    img: "/p3.png",
    iconLists: ["/next.svg", "/tail.svg", "/js.svg", "/sol.svg", "/ethereum.svg"],
    link: "https://staking-platform-kappa.vercel.app/",
  },
  {
    id: 4,
    title: "Payment Dapp",
    des: "Devloped payment Dapp integrated specific erc20 token smart contracts..",
    img: "/p4.png",
    iconLists: ["/next.svg", "/tail.svg", "/js.svg", "/sol.svg", "/ethereum.svg"],
    link: "https://tokenpayment-dapp.vercel.app/",
  },
];

export const testimonials = [
  {
    quote:
      "This project aims to implement a simple blockchain CLI tool in Rust, demonstrating basic functionalities like creating blocks, mining, and rewarding miners. Simulates the proof-of-work (PoW) consensus mechanism",
    name: "Blockchain CLI Tool in Rust",
    title: "Rust programming language and Cargo",
  },
  {
    quote:
      " This Rust project demonstrates how to make an asynchronous HTTP GET request to the GitHub API to fetch the stargazers of a specific repository. It uses the reqwest library for making HTTP requests and serde for deserializing the JSON response..",
    name: "GitHub Stargazers Fetcher",
    title: "Rust programming language and Cargo",
  },
  {
    quote:
      " This project presents an audit report detailing findings from vulnerability assessments conducted using various testing methodologies, including fuzzing and others.The audit focused on identifying security vulnerabilities in the application's codebase and infrastructure. The assessment covered both high-level architecture and implementation details.",
    name: "PasswordStore Audit",
    title: "Smart contract Audit Report",
  },
  {
    quote:
      "- Smart contract: Solidity, Rust. - Blockchain: Ethereum blockchain and its ecosystem. - Languages: Solidity, Rust, JavaScript/TypeScript, C, python, HTML, CSS. - Tools: Hardhat (testing & deployment), Foundary (testing & deployment), Next.js, React, Ether.js. - DevOp: Git/Github, CI/CD.",
    
    name: "Skills and Tools ",
    title: "Knwoledge ",
  },/*
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },*/
];

export const companies = [
  {
    id: 1,
    name: "Metamask",
    img: "/metamask.svg",
    //nameImg: "",
    width: 20,
    height: 20,
  },
  {
    id: 2,
    name: "ethereum",
    img: "/ethereum.svg",
    //nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/next.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "solidity",
    img: "/sol.svg",
    //nameImg: "/dot.png",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    //nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Smart India Hackthon ",
    desc: "Assisted in the development of a decentralized eVault system for legal records using React.js, smart contract, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
    
  },
  {
    id: 2,
    title: "Web3 and AI Hackthon by AWS",
    desc: "Designed and developed AI integrated with blockchain dApp bot using Next.js and smart contracts and ai .",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance Dev Project",
    desc: "Led the dev of a decentralized app for a client, from initial concept to deployment smart contracts.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Smart Contract Auditing on CodeHawks",
    desc: "Audit and maintained smart contracts of protocol.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Dhanraj30/",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/dhanraj_4_/",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/dhanraj-avhad-368795229/",
  },
];
