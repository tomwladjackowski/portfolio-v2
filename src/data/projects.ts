import { ProjectType } from "../utils/types"

export const projectsData: ProjectType[] = [
  {
    name: "Kanban drag and drop board",
    description: "Kanban task board with drag and drop features. Made with React and Typscript, utilizing motion-framer library for animations.",
    liveLink: "https://drag-and-drop-henna.vercel.app/",
    gitHubLink: "https://github.com/tomwladjackowski/drag-and-drop",
    images: {
      desktop: "",
      mobile: ""
    }
  },
  {
    name: "Delivery fee calculator",
    description: "This app was created as an assignment for an application to a Wolt internship program. It is a robust and well tested form, written with focus best practices, which calculates the delivery fee based on 4 inputs, each with special logic. It was created with Typescript + React and tested with Vitest and react-testing-library.",
    gitHubLink: "https://github.com/tomwladjackowski/feeCalculator",
    images: {
      desktop: "",
      mobile: ""
    }
  },
  {
    name: 'E-commerce Sneaker Store sebsite',
    description: 'Sneaker store e-commerce website made with NextJS, ReactJS, with a simple Stripe payment integration. Prisma was used as an ORM with a SQLite database. Product page design was taken from a frontendmentor.com challenge.',
    liveLink: "",
    gitHubLink:"https://github.com/tomwladjackowski/ecommerce",
    images: {
      desktop: 'ecommerceDesktop.jpeg',
      mobile: 'ecommerceMobile.png'
    }
  },
  {
    name: "Gym website",
    description: "",
    liveLink: "https://gym-typescript-orpin.vercel.app/",
    gitHubLink: "https://github.com/tomwladjackowski/gym-typescript",
    images: {
      desktop: "",
      mobile: ""
    }
  },
]