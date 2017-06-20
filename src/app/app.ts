import { Component } from '@angular/core'
import { Message } from './classes/message'
import { User } from './classes/user'
import { messages } from './mocks/messages'

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.sass']
})
export class AppComponent {

  messages: Message[] = messages
  message = new Message

  newMessage() {

    const message = new Message(this.message.sender, this.message.text)

    this.messages.push(message)

  }

  test() {

    const user = new User('Жорж', 'Нунга')

    this.messages.push(new Message(user, 'Привет'))

  }

}
