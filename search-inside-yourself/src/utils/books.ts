import { getCollection } from 'astro:content'
import type { CollectionEntry } from 'astro:content'

export type ChapterEntry = CollectionEntry<'chapters'>

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
 * チャプターのURLパスを生成する
 */
export function getChapterPath(chapterNumber: number): string {
  return withBase(`/${padChapter(chapterNumber)}`)
}

/**
 * 全チャプターのデータを取得する（章番号順）
 */
export async function getChapterEntries(): Promise<ChapterEntry[]> {
  const allEntries = await getCollection('chapters')
  return allEntries.sort((a, b) => a.data.chapterNumber - b.data.chapterNumber)
}
