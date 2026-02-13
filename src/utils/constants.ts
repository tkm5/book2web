export const SITE_TITLE = '金持ち父さんシリーズ 学習サイト'
export const SITE_DESCRIPTION =
  'ロバート・キヨサキ著「金持ち父さん」シリーズ3冊の要点を章ごとに解説．クイズで理解度をチェックしながら，お金と投資の知識を体系的に学べます．'

export type BookId = 'rich-dad-poor-dad' | 'investing-beginner' | 'investing-advanced'

export interface BookInfo {
  id: BookId
  title: string
  shortTitle: string
  description: string
  color: string
  colorClass: string
  totalChapters: number
}

export const BOOKS: Record<BookId, BookInfo> = {
  'rich-dad-poor-dad': {
    id: 'rich-dad-poor-dad',
    title: '改訂版 金持ち父さん 貧乏父さん',
    shortTitle: '金持ち父さん貧乏父さん',
    description: 'お金についての教養を身につけるための第一歩．金持ち父さんと貧乏父さんの対比を通じて，資産と負債の違い，お金のために働くのではなくお金を自分のために働かせる方法を学ぶ．',
    color: 'purple',
    colorClass: 'bg-purple-500/10 text-purple-500',
    totalChapters: 9,
  },
  'investing-beginner': {
    id: 'investing-beginner',
    title: '改訂版 金持ち父さんの投資ガイド 入門編',
    shortTitle: '投資ガイド入門編',
    description: '投資の基本を学ぶ入門書．投資家の心構えから始まり，どのような投資が存在するか，自分にふさわしい投資を選ぶための知識を体系的に解説．',
    color: 'orange',
    colorClass: 'bg-orange-500/10 text-orange-500',
    totalChapters: 16,
  },
  'investing-advanced': {
    id: 'investing-advanced',
    title: '改訂版 金持ち父さんの投資ガイド 上級編',
    shortTitle: '投資ガイド上級編',
    description: '上級投資家になるための実践書．ビジネスの構築，法人の活用，税制の理解など，富を築くための高度な戦略を詳しく解説．',
    color: 'cyan',
    colorClass: 'bg-cyan-500/10 text-cyan-500',
    totalChapters: 24,
  },
}

export const BOOK_ORDER: BookId[] = [
  'rich-dad-poor-dad',
  'investing-beginner',
  'investing-advanced',
]

export const CHAPTER_TITLES: Record<BookId, Record<number, string>> = {
  'rich-dad-poor-dad': {
    1: '金持ち父さん，貧乏父さん',
    2: '金持ち父さんの六つの教え',
    3: '教えの書：第一の教え - 金持ちはお金のためには働かない',
    4: '教えの書：第二の教え - お金の流れの読み方を学ぶ',
    5: '教えの書：第三の教え - 自分のビジネスを持つ',
    6: '教えの書：第四の教え - 会社を作って節税する',
    7: '教えの書：第五の教え - 金持ちはお金を作り出す',
    8: '教えの書：第六の教え - お金のためではなく学ぶために働く',
    9: '実践の書：まず五つの障害を乗り越えよう',
  },
  'investing-beginner': {
    1: '何に投資すべきか？',
    2: '投資の基礎を固める',
    3: '金持ち父さんの十のコントロール - 投資家の第一段階',
    4: '自分自身のコントロール',
    5: '比率のコントロール',
    6: '資産管理のコントロール',
    7: '税金のコントロール',
    8: '自分がいつ売買するかのコントロール',
    9: '取引のコントロール',
    10: 'E-T-Cのコントロール',
    11: '契約条件のコントロール',
    12: '情報へのアクセスのコントロール',
    13: '富を還元することのコントロール',
    14: '投資家の五つのレベル',
    15: '適格投資家',
    16: '洗練された投資家',
  },
  'investing-advanced': {
    1: 'Bクワドラントで考える',
    2: 'ビジネスのタイプ',
    3: 'チームのリーダーになる',
    4: '洗練された投資家の考え方',
    5: '究極の投資家',
    6: 'IPO - 新規株式公開',
    7: '金持ちになるための詳しいステップ',
    8: '起業家精神',
    9: 'お金を生み出す仕組みを作る',
    10: '法人を理解する',
    11: 'B-Iトライアングル',
    12: 'キャッシュフロー管理',
    13: 'コミュニケーション管理',
    14: 'システム管理',
    15: '法律管理',
    16: '製品管理',
    17: 'ビジネスをデザインする',
    18: '偉大な起業家から学ぶ',
    19: '投資をより賢くする方法',
    20: '最終分析',
    21: '金持ちの考え方',
    22: '富の方程式',
    23: '自分の富を測る',
    24: 'ファイナンシャル・リテラシーを高める',
  },
}

export type Category =
  | 'mindset'
  | 'cashflow'
  | 'investing'
  | 'business'
  | 'tax-legal'
  | 'financial-literacy'
  | 'practice'
  | 'advanced-investing'
  | 'entrepreneurship'

export const CATEGORY_LABELS: Record<Category, string> = {
  mindset: 'マインドセット',
  cashflow: 'キャッシュフロー',
  investing: '投資',
  business: 'ビジネス',
  'tax-legal': '税金・法律',
  'financial-literacy': 'ファイナンシャル・リテラシー',
  practice: '実践',
  'advanced-investing': '上級投資',
  entrepreneurship: '起業家精神',
}

export const CATEGORY_COLORS: Record<Category, string> = {
  mindset: 'bg-purple-500/10 text-purple-500',
  cashflow: 'bg-green-500/10 text-green-500',
  investing: 'bg-orange-500/10 text-orange-500',
  business: 'bg-blue-500/10 text-blue-500',
  'tax-legal': 'bg-red-500/10 text-red-500',
  'financial-literacy': 'bg-cyan-500/10 text-cyan-500',
  practice: 'bg-yellow-500/10 text-yellow-500',
  'advanced-investing': 'bg-pink-500/10 text-pink-500',
  entrepreneurship: 'bg-indigo-500/10 text-indigo-500',
}

export const CHAPTER_CATEGORIES: Record<BookId, Record<number, Category>> = {
  'rich-dad-poor-dad': {
    1: 'mindset',
    2: 'mindset',
    3: 'mindset',
    4: 'cashflow',
    5: 'business',
    6: 'tax-legal',
    7: 'financial-literacy',
    8: 'mindset',
    9: 'practice',
  },
  'investing-beginner': {
    1: 'investing',
    2: 'financial-literacy',
    3: 'investing',
    4: 'mindset',
    5: 'cashflow',
    6: 'investing',
    7: 'tax-legal',
    8: 'investing',
    9: 'investing',
    10: 'investing',
    11: 'investing',
    12: 'investing',
    13: 'practice',
    14: 'investing',
    15: 'investing',
    16: 'advanced-investing',
  },
  'investing-advanced': {
    1: 'business',
    2: 'business',
    3: 'business',
    4: 'advanced-investing',
    5: 'advanced-investing',
    6: 'advanced-investing',
    7: 'practice',
    8: 'entrepreneurship',
    9: 'business',
    10: 'tax-legal',
    11: 'business',
    12: 'cashflow',
    13: 'business',
    14: 'business',
    15: 'tax-legal',
    16: 'business',
    17: 'entrepreneurship',
    18: 'entrepreneurship',
    19: 'advanced-investing',
    20: 'financial-literacy',
    21: 'mindset',
    22: 'financial-literacy',
    23: 'financial-literacy',
    24: 'financial-literacy',
  },
}
