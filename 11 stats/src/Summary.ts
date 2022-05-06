import { WinsAnalysis } from './analyzers/WinsAnalysis'
import { MatchData } from './MatchData'
import { ConsoleReport } from './reportTargets/ConsoleReport'
import { HtmlReport } from './reportTargets/HtmlReport'

export interface Analyzer {
  run(matches: MatchData[]): string
}

export interface OutputTarget {
  print(report: string): void
}

export class Summary {
  static winsAnalysisWithConsoleReport(team: string): Summary {
    return new Summary(new WinsAnalysis(team), new ConsoleReport())
  }

  static winsAnalysisWithHtmlReport(team: string): Summary {
    return new Summary(new WinsAnalysis(team), new HtmlReport())
  }

  constructor(private analyzer: Analyzer, private outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const summary = this.analyzer.run(matches)
    this.outputTarget.print(summary)
  }
}
