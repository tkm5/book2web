export const SITE_TITLE = 'The Almanack of Naval Ravikant'
export const SITE_DESCRIPTION =
  'シリコンバレー最重要思想家ナヴァル・ラヴィカントの富と幸福に関する知恵'

export const CHAPTER_TITLES: Record<number, string> = {
  1: '序文・前書き・イントロダクション',
  2: '富を生む「行動」と「思考」～特殊知識',
  3: '「複利」と「所有」～レバレッジの力',
  4: '時間とスキルの価値～小さな積み重ね',
  5: '仕事と情熱～「遊び」のように働く',
  6: '「運」と「判断力」を磨く',
  7: '思考法と正直さ',
  8: '学びと読書の力',
  9: '幸福の本質～平安を取り戻す',
  10: '欲望と習慣の力',
  11: '心身の健康～食事・運動',
  12: '瞑想と心の変革',
  13: '自由への道～自分を変える',
  14: 'ナヴァルのお薦め本とルール',
}

export type Category =
  | 'introduction'
  | 'wealth'
  | 'happiness'
  | 'bonus'

export const CATEGORY_LABELS: Record<Category, string> = {
  introduction: 'イントロ',
  wealth: '富',
  happiness: '幸福',
  bonus: 'ボーナス',
}

export const CATEGORY_COLORS: Record<Category, string> = {
  introduction: 'bg-purple-500/10 text-purple-500',
  wealth: 'bg-orange-500/10 text-orange-500',
  happiness: 'bg-cyan-500/10 text-cyan-500',
  bonus: 'bg-yellow-500/10 text-yellow-500',
}

export const CHAPTER_CATEGORIES: Record<number, Category> = {
  1: 'introduction',
  2: 'wealth',
  3: 'wealth',
  4: 'wealth',
  5: 'wealth',
  6: 'wealth',
  7: 'wealth',
  8: 'wealth',
  9: 'happiness',
  10: 'happiness',
  11: 'happiness',
  12: 'happiness',
  13: 'happiness',
  14: 'bonus',
}
