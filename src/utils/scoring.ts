import { BiasScores, BiasType, PersonalityResult } from '../types/quiz'
import { questions } from '../data/questions'
import { biasInfoMap } from '../data/biasInfo'

export function calculateResult(answers: Record<number, string>): PersonalityResult {
  // Initialize total scores
  const totalScores: BiasScores = {
    herding: 0,
    riskAversion: 0,
    overreaction: 0,
    overconfident: 0,
    highReturns: 0
  }

  // Calculate raw scores
  Object.entries(answers).forEach(([questionId, optionId]) => {
    const question = questions.find(q => q.id === parseInt(questionId))
    if (!question) return

    const option = question.options.find(opt => opt.id === optionId)
    if (!option) return

    // Add scores from this answer
    Object.keys(totalScores).forEach(bias => {
      const biasKey = bias as BiasType
      totalScores[biasKey] += option.scores[biasKey]
    })
  })

  // Find maximum possible scores for normalization
  const maxPossibleScores: BiasScores = {
    herding: 0,
    riskAversion: 0,
    overreaction: 0,
    overconfident: 0,
    highReturns: 0
  }

  questions.forEach(question => {
    Object.keys(maxPossibleScores).forEach(bias => {
      const biasKey = bias as BiasType
      const maxScoreForQuestion = Math.max(...question.options.map(opt => opt.scores[biasKey]))
      maxPossibleScores[biasKey] += maxScoreForQuestion
    })
  })

  // Calculate percentages
  const percentages: BiasScores = {} as BiasScores
  Object.keys(totalScores).forEach(bias => {
    const biasKey = bias as BiasType
    percentages[biasKey] = maxPossibleScores[biasKey] > 0 
      ? Math.round((totalScores[biasKey] / maxPossibleScores[biasKey]) * 100)
      : 0
  })

  // Find dominant bias
  const dominantBias = Object.keys(percentages).reduce((a, b) => 
    percentages[a as BiasType] > percentages[b as BiasType] ? a : b
  ) as BiasType

  // Get bias info
  const biasInfo = biasInfoMap[dominantBias]

  return {
    dominantBias,
    scores: totalScores,
    percentages,
    description: biasInfo.description,
    characteristics: biasInfo.characteristics,
    tips: biasInfo.tips
  }
}

export function getDominantBiasInfo(result: PersonalityResult) {
  return biasInfoMap[result.dominantBias]
}

export function getSecondaryBiases(result: PersonalityResult, threshold: number = 60): BiasType[] {
  return Object.entries(result.percentages)
    .filter(([bias, percentage]) => 
      bias !== result.dominantBias && percentage >= threshold
    )
    .sort(([, a], [, b]) => b - a)
    .map(([bias]) => bias as BiasType)
}

export function getBiasLevel(percentage: number): 'Nízká' | 'Střední' | 'Vysoká' | 'Velmi vysoká' {
  if (percentage >= 80) return 'Velmi vysoká'
  if (percentage >= 60) return 'Vysoká'
  if (percentage >= 40) return 'Střední'
  return 'Nízká'
}