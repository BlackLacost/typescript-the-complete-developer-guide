import { MatchData } from '../MatchData'
import { MatchResult } from '../MatchResult'
import { Analyzer } from '../Summary'

export class WinsAnalysis implements Analyzer {
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    const wins = matches.filter(
      (match) =>
        (match[1] === this.team && match[5] === MatchResult.HomeWin) ||
        (match[2] === this.team && match[5] === MatchResult.AwayWin)
    ).length

    return `Team "${this.team}" won ${wins} games`
  }
}
