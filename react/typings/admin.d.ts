export interface NewsletterResponse {
  email: string;
  preferences: string[];
}

export interface QueryData {
  getNewsletter: NewsletterResponse[];
}

export interface QueryResult {
  data: QueryData;
  loading: boolean;
  error?: Error;
}
export interface NewsletterItem {
  email: string;
  preferences: string;
}
