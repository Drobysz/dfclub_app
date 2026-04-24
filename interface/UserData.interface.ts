import { JWTPayload } from "jose";

export type language = 'ru' | 'en';

export interface UserSession extends JWTPayload {
    name: string;
    email: string;
    img_url?: string;
    pswd: string;
    balance: number;
    language: language;
}