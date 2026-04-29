/**
 * Seeds the 4 portfolio projects into Sanity.
 *
 * 1. Get a write token: sanity.io/manage → your project → API → Tokens → Add API token (Editor)
 * 2. Add to .env.local:  SANITY_API_WRITE_TOKEN=your_token_here
 * 3. Run: npx tsx scripts/seed-projects.ts
 */

import { createClient } from '@sanity/client'
import * as dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2026-04-29',
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
})

const projects = [
  {
    title: 'Surfers Paradise',
    order: 1,
    tags: ['Social Media', 'Photography'],
    imageUrl: 'https://www.figma.com/api/mcp/asset/a4ad994f-b235-4f8e-a39c-85b679598471',
    link: null,
  },
  {
    title: 'Cyberpunk Caffe',
    order: 2,
    tags: ['Social Media', 'Photography'],
    imageUrl: 'https://www.figma.com/api/mcp/asset/020f97d8-dc55-4f53-a988-d75aa947496a',
    link: null,
  },
  {
    title: 'Agency 976',
    order: 3,
    tags: ['Social Media', 'Photography'],
    imageUrl: 'https://www.figma.com/api/mcp/asset/b2a28d18-a2a5-443f-bd75-100de6d2c45f',
    link: null,
  },
  {
    title: 'Minimal Playground',
    order: 4,
    tags: ['Social Media', 'Photography'],
    imageUrl: 'https://www.figma.com/api/mcp/asset/f618442e-417e-41bc-bd5f-a4d53cda994c',
    link: null,
  },
]

async function uploadImage(url: string, filename: string) {
  console.log(`  Downloading ${filename}...`)
  const res = await fetch(url)
  if (!res.ok) throw new Error(`Failed to fetch image: ${res.status} ${url}`)
  const buffer = Buffer.from(await res.arrayBuffer())
  console.log(`  Uploading ${filename} to Sanity...`)
  return client.assets.upload('image', buffer, { filename, contentType: 'image/jpeg' })
}

async function seed() {
  if (!process.env.SANITY_API_WRITE_TOKEN) {
    console.error('Missing SANITY_API_WRITE_TOKEN in .env.local')
    process.exit(1)
  }

  console.log('Checking for existing projects...')
  const existing = await client.fetch<{ title: string }[]>('*[_type == "project"]{ title }')
  if (existing.length > 0) {
    console.log(`Found ${existing.length} existing project(s): ${existing.map(p => p.title).join(', ')}`)
    console.log('Skipping seed to avoid duplicates. Delete them in the Studio first if you want to re-seed.')
    return
  }

  for (const project of projects) {
    console.log(`\nSeeding: ${project.title}`)
    const slug = project.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
    const asset = await uploadImage(project.imageUrl, `${slug}.jpg`)

    await client.create({
      _type: 'project',
      title: project.title,
      slug: { _type: 'slug', current: slug },
      order: project.order,
      tags: project.tags,
      coverImage: { _type: 'image', asset: { _type: 'reference', _ref: asset._id } },
      ...(project.link ? { link: project.link } : {}),
    })

    console.log(`  ✓ Created "${project.title}"`)
  }

  console.log('\n✓ All projects seeded successfully.')
}

seed().catch((err) => {
  console.error(err)
  process.exit(1)
})
