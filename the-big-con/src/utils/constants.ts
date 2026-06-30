export const SITE_TITLE = '詐欺師入門'
export const SITE_DESCRIPTION =
  '騙しの天才たちが磨き上げた「信用詐欺」の手口を章ごとに解説．ビッグ・コンの仕組みから隠語まで，人間の欲望をつく詐欺の全体像を，わかりやすい日本語で学べます．'

export const CHAPTER_TITLES: Record<number, string> = {
  1: 'イントロダクション',
  2: '第1章 「信用詐欺師」の醍醐味',
  3: '第2章 舞台装置をつくる',
  4: '第3章 カモの“欲”につけ込む',
  5: '第4章 カモを分析する',
  6: '第5章 一流になるための条件',
  7: '第6章 日常生活の送り方',
  8: '第7章 いざというときの保険',
  9: '第8章 小銭もマメに稼ぐ',
  10: '第9章 専門用語に精通する',
  11: '信用詐欺用語辞典',
}

export type Category =
  | 'overview'
  | 'essence'
  | 'bigstore'
  | 'bigcon'
  | 'mark'
  | 'operators'
  | 'fix'
  | 'shortcon'
  | 'argot'
  | 'glossary'

export const CATEGORY_LABELS: Record<Category, string> = {
  overview: '概要',
  essence: '詐欺の本質',
  bigstore: '舞台装置',
  bigcon: 'ビッグ・コン',
  mark: 'カモ',
  operators: '詐欺師',
  fix: '保安',
  shortcon: 'ショート・コン',
  argot: '隠語',
  glossary: '用語集',
}

export const CATEGORY_COLORS: Record<Category, string> = {
  overview: 'bg-purple-500/10 text-purple-500',
  essence: 'bg-red-500/10 text-red-500',
  bigstore: 'bg-orange-500/10 text-orange-500',
  bigcon: 'bg-amber-500/10 text-amber-500',
  mark: 'bg-blue-500/10 text-blue-500',
  operators: 'bg-green-500/10 text-green-500',
  fix: 'bg-cyan-500/10 text-cyan-500',
  shortcon: 'bg-teal-500/10 text-teal-500',
  argot: 'bg-pink-500/10 text-pink-500',
  glossary: 'bg-indigo-500/10 text-indigo-500',
}

export const CHAPTER_CATEGORIES: Record<number, Category> = {
  1: 'overview',
  2: 'essence',
  3: 'bigstore',
  4: 'bigcon',
  5: 'mark',
  6: 'operators',
  7: 'operators',
  8: 'fix',
  9: 'shortcon',
  10: 'argot',
  11: 'glossary',
}
