import { Component } from '@angular/core'
import { Http, Response } from '@angular/http'
import { Message } from 'app/classes'
import { messages } from 'app/mocks/messages'
import { MessageService } from 'app/services'

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.sass']
})
export class AppComponent {

  message = new Message
  messages: Message[] = this.$message.get()

  constructor(
    public $message: MessageService
  ) { }

  sendMessage() {
    this.$message.send(this.message)
    this.messages.push(this.message)
  }

  test() {}

}
