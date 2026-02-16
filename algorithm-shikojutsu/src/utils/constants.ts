export const SITE_TITLE = '『アルゴリズム思考術』'
export const SITE_DESCRIPTION =
  'コンピュータサイエンスのアルゴリズムを日常の意思決定に応用する実践ガイド'

export const CHAPTER_TITLES: Record<number, string> = {
  1: 'はじめに ― 人の暮らしのアルゴリズム',
  2: '最適停止 ― 「見送る」のをやめるタイミング',
  3: '探索と活用 ― 最も新しいものと最もすばらしいもの',
  4: 'ソート ― 秩序を生み出す',
  5: 'キャッシュ ― さっさと忘れよう',
  6: 'スケジューリング ― 最初のものを最初に',
  7: 'ベイズの法則 ― 未来を予想する',
  8: 'オーバーフィッティング ― 過ぎたるは及ばざるがごとし',
  9: '緩和法 ― 大目に見よう',
  10: 'ランダム性 ― 偶然に任せるべきとき',
  11: 'ネットワーキング ― どうつながるか',
  12: 'ゲーム理論 ― 他者の心',
  13: '結論 ― 計算の負担を軽くする',
}

export type Category =
  | 'exploration'
  | 'organization'
  | 'prediction'
  | 'complexity'

export const CATEGORY_LABELS: Record<Category, string> = {
  exploration: '探索と意思決定',
  organization: '整理と管理',
  prediction: '予測とモデリング',
  complexity: '複雑性と社会',
}

export const CATEGORY_COLORS: Record<Category, string> = {
  exploration: 'bg-blue-500/10 text-blue-500',
  organization: 'bg-green-500/10 text-green-500',
  prediction: 'bg-purple-500/10 text-purple-500',
  complexity: 'bg-orange-500/10 text-orange-500',
}

export const CHAPTER_CATEGORIES: Record<number, Category> = {
  1: 'exploration',
  2: 'exploration',
  3: 'exploration',
  4: 'organization',
  5: 'organization',
  6: 'organization',
  7: 'prediction',
  8: 'prediction',
  9: 'prediction',
  10: 'complexity',
  11: 'complexity',
  12: 'complexity',
  13: 'complexity',
}
