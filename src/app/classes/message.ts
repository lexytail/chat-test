import { User } from './user'

export class Message {
    date = new Date() // Дата отправки сообщения
    recipient: User // Получатель

    constructor(
      public sender = new User, // Отправитель
      public text: string = '' // Содержание сообщения
    ) { }

}
