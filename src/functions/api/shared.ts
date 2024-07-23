export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.relictify.com/';
export const API_KEY = process.env.NEXT_PUBLIC_API_KEY || '';

export enum Endpoints {
    GET_CHARS = "getChars",
    GET_CHAR = "getChar"
}