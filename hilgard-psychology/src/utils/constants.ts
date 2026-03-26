export const SITE_TITLE = 'ヒルガードの心理学'
export const SITE_DESCRIPTION =
  'Atkinson & Hilgard著『ヒルガードの心理学』の要点を章ごとに解説．クイズで理解度をチェックしながら，心理学の基礎から応用まで体系的に学べます．'

export const CHAPTER_TITLES: Record<number, string> = {
  1: '第1章 心理学の特徴',
  2: '第2章 心理学の生物学的基礎',
  3: '第3章 心理発達',
  4: '第4章 感覚過程',
  5: '第5章 知覚',
  6: '第6章 意識',
  7: '第7章 学習と条件づけ',
  8: '第8章 記憶',
  9: '第9章 言語と思考',
  10: '第10章 動機づけ',
  11: '第11章 感情',
  12: '第12章 知能',
  13: '第13章 人格',
  14: '第14章 ストレス，健康，コーピング',
  15: '第15章 心理障害',
  16: '第16章 心の健康問題の治療',
  17: '第17章 社会的影響',
  18: '第18章 社会的認知',
}

export type Category =
  | 'foundation'
  | 'development'
  | 'perception'
  | 'cognition'
  | 'motivation'
  | 'individual'
  | 'health'
  | 'social'

export const CATEGORY_LABELS: Record<Category, string> = {
  foundation: '基礎',
  development: '発達',
  perception: '感覚・知覚',
  cognition: '認知',
  motivation: '動機・感情',
  individual: '個人差',
  health: '健康・臨床',
  social: '社会',
}

export const CATEGORY_COLORS: Record<Category, string> = {
  foundation: 'bg-purple-500/10 text-purple-500',
  development: 'bg-green-500/10 text-green-500',
  perception: 'bg-orange-500/10 text-orange-500',
  cognition: 'bg-blue-500/10 text-blue-500',
  motivation: 'bg-pink-500/10 text-pink-500',
  individual: 'bg-cyan-500/10 text-cyan-500',
  health: 'bg-red-500/10 text-red-500',
  social: 'bg-indigo-500/10 text-indigo-500',
}

export const CHAPTER_CATEGORIES: Record<number, Category> = {
  1: 'foundation',
  2: 'foundation',
  3: 'development',
  4: 'perception',
  5: 'perception',
  6: 'perception',
  7: 'cognition',
  8: 'cognition',
  9: 'cognition',
  10: 'motivation',
  11: 'motivation',
  12: 'individual',
  13: 'individual',
  14: 'health',
  15: 'health',
  16: 'health',
  17: 'social',
  18: 'social',
}
