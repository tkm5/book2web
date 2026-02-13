import { getCollection } from 'astro:content'
import type { CollectionEntry } from 'astro:content'
import type { BookId } from './constants'

export type BookEntry = CollectionEntry<'books'>

export interface BookGroup {
  bookId: BookId
  bookTitle: string
  chapters: BookEntry[]
}

/** ベースパスを取得する（末尾スラッシュなし） */
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '')

/**
 * パスにベースパスを付与する
 */
export function withBase(path: string): string {
  return `${BASE}${path}`
}

/**
 * 章番号を2桁のゼロパディング文字列に変換する
 */
export function padChapter(num: number): string {
  return String(num).padStart(2, '0')
}

/**
 * 全書籍のデータをグループ化して取得する
 */
export async function getBookGroups(): Promise<BookGroup[]> {
  const allEntries = await getCollection('books')

  const groupMap = new Map<string, BookGroup>()

  for (const entry of allEntries) {
    const { bookId, bookTitle } = entry.data

    if (!groupMap.has(bookId)) {
      groupMap.set(bookId, {
        bookId: bookId as BookId,
        bookTitle,
        chapters: [],
      })
    }

    groupMap.get(bookId)!.chapters.push(entry)
  }

  // 章番号順でソート
  for (const group of groupMap.values()) {
    group.chapters.sort((a, b) => a.data.chapterNumber - b.data.chapterNumber)
  }

  const bookOrder: BookId[] = [
    'rich-dad-poor-dad',
    'investing-beginner',
    'investing-advanced',
  ]

  return bookOrder
    .map((id) => groupMap.get(id))
    .filter((g): g is BookGroup => g !== undefined)
}

/**
 * 特定書籍のエントリを取得する
 */
export async function getBookEntries(bookId: string): Promise<BookEntry[]> {
  const allEntries = await getCollection('books')
  return allEntries
    .filter((e) => e.data.bookId === bookId)
    .sort((a, b) => a.data.chapterNumber - b.data.chapterNumber)
}

/**
 * 書籍のURLパスを生成する
 */
export function getBookPath(bookId: string): string {
  return withBase(`/books/${bookId}`)
}

/**
 * チャプターのURLパスを生成する
 */
export function getChapterPath(bookId: string, chapterNumber: number): string {
  return withBase(`/books/${bookId}/${padChapter(chapterNumber)}`)
}
