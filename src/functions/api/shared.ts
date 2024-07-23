export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.relictify.com/';
export const API_KEY = process.env.NEXT_PUBLIC_API_KEY || '';

export enum ApiEndpoints {
    GET_CHARS = "getChars",
    GET_CHAR = "getChar"
}

export const ASSETS_URL = process.env.NEXT_PUBLIC_ASSETS_URL || 'https://assets.relictify.com/get/'