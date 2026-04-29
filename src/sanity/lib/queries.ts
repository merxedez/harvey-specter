import { defineQuery } from 'next-sanity'

export const PROJECTS_QUERY = defineQuery(`
  *[_type == "project"] | order(order asc) [0...4] {
    _id,
    title,
    slug,
    "imageUrl": coverImage.asset->url,
    tags,
    order,
    link
  }
`)

export type SanityProject = {
  _id: string
  title: string
  slug: { current: string } | null
  imageUrl: string | null
  tags: string[] | null
  order: number
  link: string | null
}
