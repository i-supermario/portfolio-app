export interface IQuerystring {
    code: string;
}
  
export interface IHeaders {
    'h-Custom': string;
}
  
export interface IReply {
    200: { success: boolean } | { access_token: string } | { refresh_token: string }
    302: { url: string };
    '4xx': { error: string };
}