export const SITE_TITLE = '完全無欠の問題解決'
export const SITE_DESCRIPTION =
  '不確実性を乗り越える7ステップアプローチ'

export const CHAPTER_TITLES: Record<number, string> = {
  1: '第1章「完全無欠の問題解決」をマスターする',
  2: '第2章 問題を定義する',
  3: '第3章 問題を分解し，優先順位を付ける',
  4: '第4章 作業計画を立てる',
  5: '第5章「経験則」で問題をざっと分析する',
  6: '第6章「奥の手」で問題を深く分析する',
  7: '第7章 結果をまとめ，ストーリーで伝える',
  8: '第8章 不確実性に対処する',
  9: '第9章「厄介な問題」を解決する',
  10: '第10章 優れた問題解決者になる',
}

export type Category =
  | 'overview'
  | 'structuring'
  | 'analysis'
  | 'communication'
  | 'mastery'

export const CATEGORY_LABELS: Record<Category, string> = {
  overview: '概要',
  structuring: '構造化',
  analysis: '分析',
  communication: '伝達',
  mastery: '応用',
}

export const CATEGORY_COLORS: Record<Category, string> = {
  overview: 'bg-purple-500/10 text-purple-500',
  structuring: 'bg-blue-500/10 text-blue-500',
  analysis: 'bg-green-500/10 text-green-500',
  communication: 'bg-orange-500/10 text-orange-500',
  mastery: 'bg-cyan-500/10 text-cyan-500',
}

export const CHAPTER_CATEGORIES: Record<number, Category> = {
  1: 'overview',
  2: 'structuring',
  3: 'structuring',
  4: 'structuring',
  5: 'analysis',
  6: 'analysis',
  7: 'communication',
  8: 'mastery',
  9: 'mastery',
  10: 'mastery',
}
