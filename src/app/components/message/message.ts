import { Component, Input } from '@angular/core'
import { Message } from '../../classes/message'

@Component({
  selector: 'message',
  templateUrl: './message.html',
  styleUrls: ['./message.sass']
})

export class MessageComponent {
  @Input() public message: Message
}
