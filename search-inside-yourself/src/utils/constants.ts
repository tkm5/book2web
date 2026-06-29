export const SITE_TITLE = 'Search Inside Yourself'
export const SITE_DESCRIPTION =
  'チャディー・メン・タン著「サーチ・インサイド・ユアセルフ」の要点を章ごとに解説．Google発のマインドフルネス×EQ（情動的知能）実践法を，クイズで理解度をチェックしながら学べます．'

export const CHAPTER_TITLES: Record<number, string> = {
  1: '第1章 エンジニアでさえEQで成功できる',
  2: '第2章 命がかかっているかのように呼吸をする',
  3: '第3章 座らないでやるマインドフルネス・エクササイズ',
  4: '第4章 100パーセント自然でオーガニックな自信',
  5: '第5章 情動を馬のように乗りこなす',
  6: '第6章 利益をあげ，海を漕ぎ渡り，世界を変える',
  7: '第7章 共感と，脳のタンゴ',
  8: '第8章 有能であってしかも人に愛される',
  9: '第9章 世界平和への三つの簡単なステップ',
}

export type Category =
  | 'overview'
  | 'mindfulness'
  | 'self-awareness'
  | 'self-regulation'
  | 'motivation'
  | 'empathy'
  | 'social-skill'

export const CATEGORY_LABELS: Record<Category, string> = {
  overview: '概要',
  mindfulness: 'マインドフルネス',
  'self-awareness': '自己認識',
  'self-regulation': '自己統制',
  motivation: 'モチベーション',
  empathy: '共感',
  'social-skill': '社会的技能',
}

export const CATEGORY_COLORS: Record<Category, string> = {
  overview: 'bg-purple-500/10 text-purple-500',
  mindfulness: 'bg-blue-500/10 text-blue-500',
  'self-awareness': 'bg-green-500/10 text-green-500',
  'self-regulation': 'bg-orange-500/10 text-orange-500',
  motivation: 'bg-yellow-500/10 text-yellow-500',
  empathy: 'bg-pink-500/10 text-pink-500',
  'social-skill': 'bg-cyan-500/10 text-cyan-500',
}

export const CHAPTER_CATEGORIES: Record<number, Category> = {
  1: 'overview',
  2: 'mindfulness',
  3: 'mindfulness',
  4: 'self-awareness',
  5: 'self-regulation',
  6: 'motivation',
  7: 'empathy',
  8: 'social-skill',
  9: 'social-skill',
}
