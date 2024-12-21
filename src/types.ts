import type {
  APIListOfReasonsValues,
  DBFileNamesValues
} from "@theWallProject/addonCommon"

export enum MessageTypes {
  TestUrl = "TestUrl",
  GetTestResult = "GetTestResult",
  DissmissUrl = "DissmissUrl"
}

export type UrlTestResult =
  | {
      reasons: APIListOfReasonsValues[]
      name: string
      comment?: string
      link?: string
      isDismissed?: boolean
      rule: { selector: string; db: DBFileNamesValues | "isr_url" }
    }
  | undefined

export type Message =
  | {
      action: MessageTypes.TestUrl
      url: string
    }
  | {
      action: MessageTypes.GetTestResult
      result: UrlTestResult
    }
  | {
      action: MessageTypes.DissmissUrl
      fileName: string
      selector: string
    }

export type MessageResponseMap = {
  [MessageTypes.TestUrl]: UrlTestResult
  [MessageTypes.DissmissUrl]: true
}

export type SendResponse<T extends keyof MessageResponseMap> = (
  response: MessageResponseMap[T]
) => void
