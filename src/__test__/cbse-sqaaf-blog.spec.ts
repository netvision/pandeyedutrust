import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'

describe('CBSE SQAAF blog post', () => {
  const pagePath = resolve(process.cwd(), 'src/pages/cbse-sqaaf-school-quality-assessment-and-assurance-framework.vue')
  const blogPath = resolve(process.cwd(), 'src/pages/blog.vue')

  it('adds the SQAAF article page with metadata from the developer document', () => {
    expect(existsSync(pagePath)).toBe(true)

    const page = readFileSync(pagePath, 'utf8')
    expect(page).toContain('CBSE SQAAF Framework Explained')
    expect(page).toContain('School Quality Assessment and Assurance Framework')
    expect(page).toContain('Explore the Central Board of Secondary Education School Quality Assessment and Assurance Framework')
    expect(page).toContain('CBSE School Self-Assessment')
  })

  it('lists the SQAAF article on the blog index using the suggested slug', () => {
    const blog = readFileSync(blogPath, 'utf8')

    expect(blog).toContain("slug: 'cbse-sqaaf-school-quality-assessment-and-assurance-framework'")
    expect(blog).toContain('CBSE SQAAF Framework Explained')
    expect(blog).toContain('School Quality')
  })
})
