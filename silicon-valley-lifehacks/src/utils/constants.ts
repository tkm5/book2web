export const SITE_TITLE = 'GAME CHANGERS'
export const SITE_DESCRIPTION =
  '450人の成功者から学ぶ，もっと賢く・もっと速く・もっと幸せになる42のライフハック'

export const CHAPTER_TITLES: Record<number, string> = {
  1: 'はじめに',
  2: '第1章 自己',
  3: '第2章 脳',
  4: '第3章 恐怖',
  5: '第4章 休息',
  6: '第5章 快楽',
  7: '第6章 睡眠',
  8: '第7章 運動',
  9: '第8章 食事',
  10: '第9章 テクノロジー',
  11: '第10章 幸福',
  12: '第11章 人間関係',
  13: '第12章 瞑想',
  14: '第13章 自然',
  15: '第14章 感謝',
  16: 'おわりに',
}

export type Category =
  | 'intro'
  | 'smarter'
  | 'faster'
  | 'happier'

export const CATEGORY_LABELS: Record<Category, string> = {
  intro: 'イントロ',
  smarter: 'もっと賢く',
  faster: 'もっと速く',
  happier: 'もっと幸せに',
}

export const CATEGORY_COLORS: Record<Category, string> = {
  intro: 'bg-purple-500/10 text-purple-500',
  smarter: 'bg-blue-500/10 text-blue-500',
  faster: 'bg-orange-500/10 text-orange-500',
  happier: 'bg-green-500/10 text-green-500',
}

export const CHAPTER_CATEGORIES: Record<number, Category> = {
  1: 'intro',
  2: 'smarter',
  3: 'smarter',
  4: 'smarter',
  5: 'smarter',
  6: 'faster',
  7: 'faster',
  8: 'faster',
  9: 'faster',
  10: 'faster',
  11: 'happier',
  12: 'happier',
  13: 'happier',
  14: 'happier',
  15: 'happier',
  16: 'intro',
}
