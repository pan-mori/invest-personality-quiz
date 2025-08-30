export interface Question {
  id: number
  text: string
  options: QuestionOption[]
  image: string
  imageAlt: string
}

export interface QuestionOption {
  id: string
  text: string
  scores: BiasScores
}

export interface BiasScores {
  herding: number
  riskAversion: number
  overreaction: number
  overconfident: number
  highReturns: number
}

export type BiasType = keyof BiasScores

export interface PersonalityResult {
  dominantBias: BiasType
  scores: BiasScores
  percentages: BiasScores
  description: string
  characteristics: string[]
  tips: string[]
}

export interface QuizState {
  currentQuestion: number
  answers: Record<number, string>
  isComplete: boolean
  result?: PersonalityResult
}

export interface BiasInfo {
  name: string
  title: string
  description: string
  characteristics: string[]
  risks: string[]
  tips: string[]
  color: string
  icon: string
}