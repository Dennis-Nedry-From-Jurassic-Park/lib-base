import secrets from '../utility-methods/env';

import { Telegraf } from 'telegraf';
const token = secrets.telegramToken;
const bot:any = new Telegraf(token!);

export default bot;