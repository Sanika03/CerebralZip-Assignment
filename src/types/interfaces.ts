export interface SalesData {
    id: string
    date: string 
    web_sales: number
    offline_sales: number
}

export interface FeedbackData { 
    negative: number,
    positive: number,
    neutral: number
}

export interface MetricsData {
    id: string;
    purchases: number;
    refunds: number;
    revenue: number;
}

export interface ScoreCardData {
    score: number,
    title: string,
    message: string
}

export interface CustomersByDeviceData {
    date2: string;
    unique_count: string; 
    cummulative_tweets: string;
}
  
export interface SalesData {
    id: string;
    date: string;
    web_sales: number;
    offline_sales: number;
}