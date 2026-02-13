import { getCollection } from 'astro:content'
import type { BookEntry } from './books'
import { getBookPath, getChapterPath } from './books'
import type { BookId } from './constants'

export interface NavItem {
  title: string
  path: string
  bookId: string
  chapterNumber: number
}

export interface BookTree {
  bookId: BookId
  bookTitle: string
  path: string
  chapters: NavItem[]
}

/**
 * サイドバー用の書籍ツリーを構築する
 */
export async function buildBookTree(): Promise<BookTree[]> {
  const allEntries = await getCollection('books')

  const treeMap = new Map<string, BookTree>()

  for (const entry of allEntries) {
    const { bookId, bookTitle, chapterNumber, title } = entry.data

    if (!treeMap.has(bookId)) {
      treeMap.set(bookId, {
        bookId: bookId as BookId,
        bookTitle,
        path: getBookPath(bookId),
        chapters: [],
      })
    }

    treeMap.get(bookId)!.chapters.push({
      title,
      path: getChapterPath(bookId, chapterNumber),
      bookId,
      chapterNumber,
    })
  }

  // ソート
  for (const tree of treeMap.values()) {
    tree.chapters.sort((a, b) => a.chapterNumber - b.chapterNumber)
  }

  const bookOrder: BookId[] = [
    'rich-dad-poor-dad',
    'investing-beginner',
    'investing-advanced',
  ]

  return bookOrder
    .map((id) => treeMap.get(id))
    .filter((t): t is BookTree => t !== undefined)
}

/**
 * 同一書籍内の前後の章を取得する
 */
export async function getAdjacentChapters(
  currentBookId: string,
  currentChapter: number
): Promise<{ prev: NavItem | null; next: NavItem | null }> {
  const allEntries = await getCollection('books')

  // 同一書籍内のエントリのみ対象
  const chapters = allEntries
    .filter((e) => e.data.bookId === currentBookId)
    .sort((a, b) => a.data.chapterNumber - b.data.chapterNumber)

  const currentIndex = chapters.findIndex(
    (e) => e.data.chapterNumber === currentChapter
  )

  if (currentIndex === -1) {
    return { prev: null, next: null }
  }

  const toNavItem = (entry: BookEntry): NavItem => ({
    title: entry.data.title,
    path: getChapterPath(entry.data.bookId, entry.data.chapterNumber),
    bookId: entry.data.bookId,
    chapterNumber: entry.data.chapterNumber,
  })

  const prev = currentIndex > 0 ? toNavItem(chapters[currentIndex - 1]) : null
  const next =
    currentIndex < chapters.length - 1
      ? toNavItem(chapters[currentIndex + 1])
      : null

  return { prev, next }
}
