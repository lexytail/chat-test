import { Injectable } from '@angular/core'
import { Message } from 'app/classes'

@Injectable()

export class MessageService {

  messages: Message[] = []

  send(message: Message) {
    this.messages.push(message)
  }

}
