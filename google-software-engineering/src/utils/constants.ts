export const SITE_TITLE = 'Googleのソフトウェアエンジニアリング 学習サイト'
export const SITE_DESCRIPTION =
  'Titus Winters他著『Googleのソフトウェアエンジニアリング』の要点を章ごとに解説．クイズで理解度をチェックしながら，Google流のソフトウェア開発を体系的に学べます．'

export const CHAPTER_TITLES: Record<number, string> = {
  1: 'ソフトウェアエンジニアリングとは何か',
  2: 'チームでうまく仕事をするには',
  3: '知識共有',
  4: '公正のためのエンジニアリング',
  5: 'チームリーダー入門',
  6: 'スケールするリーダー',
  7: 'エンジニアリング生産性の計測',
  8: 'スタイルガイドとルール',
  9: 'コードレビュー',
  10: 'ドキュメンテーション',
  11: 'テスト概観',
  12: 'ユニットテスト',
  13: 'テストダブル',
  14: '大規模テスト',
  15: '廃止',
  16: 'バージョンコントロールとブランチ管理',
  17: 'Code Search',
  18: 'ビルドシステムとビルド哲学',
  19: 'GoogleのコードレビューツールCritique',
  20: '静的解析',
  21: '依存関係管理',
  22: '大規模変更',
  23: '継続的インテグレーション',
  24: '継続的デリバリー',
  25: 'サービスとしてのコンピュート',
  26: 'あとがき',
}

export type Category =
  | 'thesis'
  | 'culture'
  | 'process'
  | 'tools'

export const CATEGORY_LABELS: Record<Category, string> = {
  thesis: '主題',
  culture: '文化',
  process: 'プロセス',
  tools: 'ツール',
}

export const CATEGORY_COLORS: Record<Category, string> = {
  thesis: 'bg-purple-500/10 text-purple-500',
  culture: 'bg-orange-500/10 text-orange-500',
  process: 'bg-blue-500/10 text-blue-500',
  tools: 'bg-green-500/10 text-green-500',
}

export const CHAPTER_CATEGORIES: Record<number, Category> = {
  1: 'thesis',
  2: 'culture',
  3: 'culture',
  4: 'culture',
  5: 'culture',
  6: 'culture',
  7: 'culture',
  8: 'process',
  9: 'process',
  10: 'process',
  11: 'process',
  12: 'process',
  13: 'process',
  14: 'process',
  15: 'process',
  16: 'tools',
  17: 'tools',
  18: 'tools',
  19: 'tools',
  20: 'tools',
  21: 'tools',
  22: 'tools',
  23: 'tools',
  24: 'tools',
  25: 'tools',
  26: 'tools',
}
