export interface ProjectType {
  name: string,
  description: string,
  liveLink?: string,
  gitHubLink: string,
  images: {
    desktop: string,
    mobile: string
  }
}