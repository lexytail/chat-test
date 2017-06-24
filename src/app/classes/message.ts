import { User } from './user'

export class Message {
    date = new Date() // Дата отправки сообщения
    recipient = new User() // Получатель
    sender = new User() // Отправитель
    text: string = '' // Содержание сообщения

    constructor() {}

}
