export const SITE_TITLE = '考える技術・書く技術'
export const SITE_DESCRIPTION =
  'バーバラ・ミント著「考える技術・書く技術」の要点を章ごとに解説．ピラミッド原則に基づく論理的な思考と文章構成の技術を体系的に学べます．'

export const CHAPTER_TITLES: Record<number, string> = {
  1: '第1章 なぜピラミッド構造なのか？',
  2: '第2章 ピラミッドの内部構造はどうなっているのか？',
  3: '第3章 ピラミッド構造はどうやって作るのか？',
  4: '第4章 導入部はどう構成すればいいのか？',
  5: '第5章 演繹法と帰納法はどう違うのか？',
  6: '第6章 ロジックの順序に従う',
  7: '第7章 グループ内の考えを要約する',
  8: '第8章 問題を定義する',
  9: '第9章 問題分析を構造化する',
  10: '第10章 文書構成にピラミッドを反映させる',
  11: '第11章 文章表現にピラミッドを反映させる',
  12: '追補A 構造なき状況下での問題解決',
  13: '追補B 本書で述べた重要ポイントの一覧',
}

export type Category =
  | 'writing'
  | 'thinking'
  | 'problem-solving'
  | 'expression'

export const CATEGORY_LABELS: Record<Category, string> = {
  writing: '書く技術',
  thinking: '考える技術',
  'problem-solving': '問題解決の技術',
  expression: '表現の技術',
}

export const CATEGORY_COLORS: Record<Category, string> = {
  writing: 'bg-blue-500/10 text-blue-500',
  thinking: 'bg-green-500/10 text-green-500',
  'problem-solving': 'bg-orange-500/10 text-orange-500',
  expression: 'bg-purple-500/10 text-purple-500',
}

export const CHAPTER_CATEGORIES: Record<number, Category> = {
  1: 'writing',
  2: 'writing',
  3: 'writing',
  4: 'writing',
  5: 'writing',
  6: 'thinking',
  7: 'thinking',
  8: 'problem-solving',
  9: 'problem-solving',
  10: 'expression',
  11: 'expression',
  12: 'problem-solving',
  13: 'expression',
}
