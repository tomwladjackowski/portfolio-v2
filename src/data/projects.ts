import { ProjectType } from "../utils/types"
import dragAndDrop from "../assets/projects/drag-and-drop.png"
import feeCalculator from "../assets/projects/fee-calculator.png"
import eCommerce from "../assets/projects/e-commerce.png"
import gymTypescript from "../assets/projects/gym-typescript.png"

export const projectsData: ProjectType[] = [
  {
    name: "Kanban drag and drop board",
    description: "Kanban task board with drag and drop features. Made with React and Typscript, utilizing motion-framer library for animations.",
    liveLink: "https://drag-and-drop-henna.vercel.app/",
    gitHubLink: "https://github.com/tomwladjackowski/drag-and-drop",
    images: {
      desktop: dragAndDrop,
      mobile: ""
    },
    tags: ["Typescript", "React", "framer-motion"]
  },
  {
    name: "Delivery fee calculator",
    description: "This app was created as an assignment for an application to a Wolt internship program. It is a robust and well tested form, written with focus on best practices, which calculates the delivery fee based on 4 inputs, each with special logic. It was created with Typescript + React and tested with Vitest and react-testing-library.",
    gitHubLink: "https://github.com/tomwladjackowski/feeCalculator",
    images: {
      desktop: feeCalculator,
      mobile: ""
    },
    tags: ["Typescript", "React", "Vitest", "react-testing-library"]
  },
  {
    name: 'E-commerce sneaker store website',
    description: 'Sneaker store e-commerce website made with NextJS and React, with a simple Stripe payment integration. Prisma was used as an ORM with a SQLite database. Product page design was taken from a frontendmentor.com challenge.',
    liveLink: "",
    gitHubLink:"https://github.com/tomwladjackowski/ecommerce",
    images: {
      desktop: eCommerce,
      mobile: ''
    },
    tags: ["React", "NextJS", "Prisma", "SQLite"]
  },
  {
    name: "Gym website",
    description: "A responsive gym website project made with React and Typescript, framer-motion was used for animations.",
    liveLink: "https://gym-typescript-orpin.vercel.app/",
    gitHubLink: "https://github.com/tomwladjackowski/gym-typescript",
    images: {
      desktop: gymTypescript,
      mobile: ""
    },
    tags: ["Typescript", "React", "framer-motion"]
  },
]