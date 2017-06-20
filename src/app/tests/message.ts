import { messages } from '../mocks/messages'
import { Message } from '../classes/message'
import { User } from '../classes/user'

const user = new User('Жорж', 'Нунга')

messages.push(new Message(user, 'Привет'))
