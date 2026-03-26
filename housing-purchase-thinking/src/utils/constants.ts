export const SITE_TITLE = '住宅購入の思考法 学習サイト'
export const SITE_DESCRIPTION =
  '江口亮介著「住宅購入の思考法」の要点を章ごとに解説．住宅購入で失敗しないための思考法を体系的に学べます．'

export const CHAPTER_TITLES: Record<number, string> = {
  1: 'はじめに',
  2: '第1章 家を買うのは意外とスムーズに進む？',
  3: '第2章 伝説の不動産エージェントとの出会い',
  4: '第3章 住宅購入のバランスシートで見えてくる現実',
  5: '第4章 家族だからこそ，家のことでは意見が割れる',
  6: '第5章 究極の問いは，どうして家がほしいのか',
  7: '第6章 理想の家を見つける4つのステップ',
  8: '第7章 家を買うのはゴールじゃない',
  9: 'おわりに',
}

export type Category =
  | 'overview'
  | 'mindset'
  | 'finance'
  | 'family'
  | 'search'
  | 'lifecycle'

export const CATEGORY_LABELS: Record<Category, string> = {
  overview: '概要',
  mindset: 'マインドセット',
  finance: '資金計画',
  family: '家族',
  search: '物件探し',
  lifecycle: 'ライフサイクル',
}

export const CATEGORY_COLORS: Record<Category, string> = {
  overview: 'bg-purple-500/10 text-purple-500',
  mindset: 'bg-blue-500/10 text-blue-500',
  finance: 'bg-green-500/10 text-green-500',
  family: 'bg-orange-500/10 text-orange-500',
  search: 'bg-cyan-500/10 text-cyan-500',
  lifecycle: 'bg-pink-500/10 text-pink-500',
}

export const CHAPTER_CATEGORIES: Record<number, Category> = {
  1: 'overview',
  2: 'mindset',
  3: 'mindset',
  4: 'finance',
  5: 'family',
  6: 'family',
  7: 'search',
  8: 'lifecycle',
  9: 'overview',
}
