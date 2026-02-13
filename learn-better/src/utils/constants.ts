export const SITE_TITLE = 'Learn Better 学習サイト'
export const SITE_DESCRIPTION =
  'アーリック・ボーザー著「Learn Better」の要点を章ごとに解説．クイズで理解度をチェックしながら，効果的な学習方法を体系的に学べます．'

export const CHAPTER_TITLES: Record<number, string> = {
  1: 'イントロダクション',
  2: '第1章 価値を見いだす',
  3: '第2章 目標を決める',
  4: '第3章 能力を伸ばす',
  5: '第4章 発展させる',
  6: '第5章 関係づける',
  7: '第6章 再考する',
  8: 'エピローグ',
  9: 'ツールキット',
}

export type Category =
  | 'overview'
  | 'value'
  | 'target'
  | 'develop'
  | 'extend'
  | 'relate'
  | 'rethink'
  | 'toolkit'

export const CATEGORY_LABELS: Record<Category, string> = {
  overview: '概要',
  value: '価値',
  target: '目標',
  develop: '能力開発',
  extend: '発展',
  relate: '関係',
  rethink: '再考',
  toolkit: 'ツールキット',
}

export const CATEGORY_COLORS: Record<Category, string> = {
  overview: 'bg-purple-500/10 text-purple-500',
  value: 'bg-orange-500/10 text-orange-500',
  target: 'bg-blue-500/10 text-blue-500',
  develop: 'bg-green-500/10 text-green-500',
  extend: 'bg-cyan-500/10 text-cyan-500',
  relate: 'bg-pink-500/10 text-pink-500',
  rethink: 'bg-indigo-500/10 text-indigo-500',
  toolkit: 'bg-yellow-500/10 text-yellow-500',
}

export const CHAPTER_CATEGORIES: Record<number, Category> = {
  1: 'overview',
  2: 'value',
  3: 'target',
  4: 'develop',
  5: 'extend',
  6: 'relate',
  7: 'rethink',
  8: 'overview',
  9: 'toolkit',
}
