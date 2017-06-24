import { Injectable } from '@angular/core'
import { Message } from 'app/classes'

const storage: Storage = localStorage

@Injectable()
export class MessageService {

  private messages: Message[]

  constructor() {
    try {
      JSON.parse(storage['messages'])
    } catch (e) {
      storage['messages'] = JSON.stringify(new Array)
    } finally {
      this.messages = JSON.parse(storage['messages'])
    }
  }

  send(message: Message) {

    this.messages.push(message)

    storage['messages'] = JSON.stringify(this.messages)

  }

  get(): Message[] {
    return JSON.parse(storage['messages'])
  }

}
