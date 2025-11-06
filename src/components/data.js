import GitHub from "./icons/GitHub.astro"
import React from "./icons/React.astro"
import Astro from "./icons/Astroicon.astro"
import Bash from "./icons/Bash.astro"
import Blockchain from "./icons/Blockchain.astro"
import Cloudflare from "./icons/Cloudflare.astro"
import Css from "./icons/Cssicon.astro"
import Docker from "./icons/Docker.astro"
import Express from "./icons/Express.astro"
import Firebase from "./icons/Firebase.astro"
import Git from "./icons/Git.astro"
import GithubActions from "./icons/GithubActions.astro"
import Html from "./icons/Html.astro"
import Linux from "./icons/Linux.astro"
import Mysql from "./icons/Mysql.astro"
import Nodejs from "./icons/Nodejs.astro"
import Puppeteer from "./icons/Puppeteer.astro"
import Python from "./icons/Python.astro"
import Tailwind from "./icons/Tailwind.astro"

export const TAGS = {
  REACT: {
    name: "React",
    class: "bg-black text-white",
    icon: React,
  },
  ASTRO: {
    name: "Astro",
    class: "bg-[#ff5d01] text-white",
    icon: Astro,
  },
  TAILWIND: {
    name: "Tailwind CSS",
    class: "bg-[#003159] text-white",
    icon: Tailwind,
  },
  BASH: {
    name: "Bash",
    class: "bg-[#4eaa25] text-white",
    icon: Bash,
  },
  BLOCKCHAIN: {
    name: "Blockchain",
    class: "bg-[#f7931a] text-white",
    icon: Blockchain,
  },
  CLOUDFLARE: {
    name: "Cloudflare",
    class: "bg-[#f38020] text-white",
    icon: Cloudflare,
  },
  CSS: {
    name: "CSS",
    class: "bg-[#1572b6] text-white",
    icon: Css,
  },
  DOCKER: {
    name: "Docker",
    class: "bg-[#2496ed] text-white",
    icon: Docker,
  },
  EXPRESS: {
    name: "Express.js",
    class: "bg-[#000000] text-white",
    icon: Express,
  },
  FIREBASE: {
    name: "Firebase",
    class: "bg-[#ffca28] text-black",
    icon: Firebase,
  },
  GIT: {
    name: "Git",
    class: "bg-[#f05032] text-white",
    icon: Git,
  },
  GITHUB: {
    name: "GitHub",
    class: "bg-[#181717] text-white",
    icon: GitHub,
  },
  GITHUB_ACTIONS: {
    name: "GitHub Actions",
    class: "bg-[#2088ff] text-white",
    icon: GithubActions,
  },
  HTML: {
    name: "HTML",
    class: "bg-[#e34f26] text-white",
    icon: Html,
  },
  LINUX: {
    name: "Linux",
    class: "bg-[#fcc624] text-black",
    icon: Linux,
  },
  MYSQL: {
    name: "MySQL",
    class: "bg-[#4479a1] text-white",
    icon: Mysql,
  },
  NODEJS: {
    name: "Node.js",
    class: "bg-[#339933] text-white",
    icon: Nodejs,
  },
  PUPPETEER: {
    name: "Puppeteer",
    class: "bg-[#40b5a4] text-white",
    icon: Puppeteer,
  },
  PYTHON: {
    name: "Python",
    class: "bg-[#3776ab] text-white",
    icon: Python,
  },
}

export const PROJECTS = [
  {
    title: "Spotify - Reproductor de música",
    description:
      "Permite filtrar y escuchar entre tus playlists, artistas y canciones favoritas. Creada con React y API de Spotify. Login con Oauth2",
    github: "https://github.com/Eri9523/spotify",
    image: "/projects/spotify.png",
    alt: "Captura de pantalla del reproductor de música de Spotify mostrando playlists y controles de reproducción",
    tags: [TAGS.REACT, TAGS.CSS, TAGS.GIT],
  },
  {
    title: "axie.es - Live Leaderboard",
    description:
      "Plataforma que muestra en tiempo real el ranking de distintos modos de juego de Axie Infinity. Creada con Astro, Nodejs, Express APIs, Cloudflare, Servidor Linux y Github Actions entre otros...",
    link: "https://axie.es",
    image: "/projects/axiees.png",
    alt: "Pantalla principal de axie.es mostrando leaderboard en tiempo real de Axie Infinity",
    tags: [TAGS.ASTRO, TAGS.NODEJS, TAGS.EXPRESS, TAGS.DOCKER, TAGS.BLOCKCHAIN, TAGS.GIT, TAGS.GITHUB_ACTIONS, TAGS.CSS, TAGS.LINUX, TAGS.CLOUDFLARE, TAGS.MYSQL, TAGS.PUPPETEER],
  },
  {
    title: "Kaeru - Sorteos NFT",
    description:
      "Plataforma de sorteos NFT con reparto de premios automático en Blockchain Ethereum (Ronin), notificaciones en discord y escritura de información automatizada en google sheets.",
    link: "https://roninkaeru.com",
    image: "/projects/kaeru.png",
    alt: "Interfaz de Kaeru mostrando sorteos NFT activos con premios en blockchain",
    tags: [TAGS.REACT, TAGS.PYTHON, TAGS.FIREBASE, TAGS.BLOCKCHAIN, TAGS.LINUX, TAGS.GIT, TAGS.DOCKER],
  },
  {
    title: "Comunidad Web3 Autogestionada",
    description:
      "Aplicación de Discord con más de 2000 usuarios que permite la gestión automatizada gratuita del modelo <reclutador-jugador> en el juego Axie Infinity. Permite seguimiento en tiempo real de los jugadores e interactua con múltiples APIs otorgando distintas funcionalidades, OpenAI api, y ejecución de transacciones Blockchain entre otras...",
    image: "/projects/discord.png",
    alt: "Bot de Discord mostrando comandos y gestión automatizada para comunidad Web3",
    tags: [TAGS.PYTHON, TAGS.BLOCKCHAIN, TAGS.LINUX, TAGS.GIT, TAGS.DOCKER, TAGS.BASH, TAGS.MYSQL],
  },
  {
    title: "Bots de Marketplace",
    description:
      "Múltiples Proyectos backend en python que detectan y realiza transacciones en tiempo real comprando y vendiendo NFTs con el fin de obtener un beneficio económico de forma pasiva en blockchain Ronin.",
    image: "/projects/marketplace.png",
    alt: "Dashboard de bots de marketplace mostrando transacciones NFT automatizadas en tiempo real",
    tags: [TAGS.PYTHON, TAGS.BLOCKCHAIN, TAGS.LINUX, TAGS.GIT, TAGS.DOCKER, TAGS.BASH, TAGS.MYSQL],
  },
]
