import { getCollection } from 'astro:content'
import type { ChapterEntry } from './books'
import { getChapterPath } from './books'

export interface NavItem {
  title: string
  path: string
  chapterNumber: number
}

/**
 * サイドバー用の章一覧を構築する
 */
export async function buildChapterList(): Promise<NavItem[]> {
  const allEntries = await getCollection('chapters')

  return allEntries
    .sort((a, b) => a.data.chapterNumber - b.data.chapterNumber)
    .map((entry) => ({
      title: entry.data.title,
      path: getChapterPath(entry.data.chapterNumber),
      chapterNumber: entry.data.chapterNumber,
    }))
}

/**
 * 前後の章を取得する
 */
export async function getAdjacentChapters(
  currentChapter: number
): Promise<{ prev: NavItem | null; next: NavItem | null }> {
  const allEntries = await getCollection('chapters')

  const chapters = allEntries.sort(
    (a, b) => a.data.chapterNumber - b.data.chapterNumber
  )

  const currentIndex = chapters.findIndex(
    (e) => e.data.chapterNumber === currentChapter
  )

  if (currentIndex === -1) {
    return { prev: null, next: null }
  }

  const toNavItem = (entry: ChapterEntry): NavItem => ({
    title: entry.data.title,
    path: getChapterPath(entry.data.chapterNumber),
    chapterNumber: entry.data.chapterNumber,
  })

  const prev = currentIndex > 0 ? toNavItem(chapters[currentIndex - 1]) : null
  const next =
    currentIndex < chapters.length - 1
      ? toNavItem(chapters[currentIndex + 1])
      : null

  return { prev, next }
}
