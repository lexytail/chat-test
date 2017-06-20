import { Message } from '../classes/message'

export const messages: Message[] = [{
    date: new Date(2017, 6, 18, 22, 35, 44),
    text: 'Hello',
    sender: {
      name: 'Dmitry',
      surname: 'Gutoryan'
    },
    recipient: {
      name: 'Jack',
      surname: 'Cold'
    }
  },
  {
    date: new Date(2017, 18, 6, 22, 36, 12),
    text: 'Hello, Dmitry. How are you?',
    sender: {
      name: 'Jack',
      surname: 'Cold'
    },
    recipient: {
      name: 'Dmitry',
      surname: 'Gutoryan'
    }
  },
 {
    date: new Date(2017, 6, 18, 22, 36, 55),
    text: 'Oh, great. And you?',
    sender: {
      name: 'Dmitry',
      surname: 'Gutoryan'
    },
    recipient: {
      name: 'Jack',
      surname: 'Cold'
    }
  },
   {
    date: new Date(2017, 6, 18, 22, 37, 28),
    text: 'Me too. Buy',
    sender: {
      name: 'Jack',
      surname: 'Cold'
    },
    recipient: {
      name: 'Dmitry',
      surname: 'Gutoryan'
    }
  },
   {
    date: new Date(2017, 6, 18, 22, 39, 25),
    text: 'Buy',
    sender: {
      name: 'Dmitry',
      surname: 'Gutoryan'
    },
    recipient: {
      name: 'Jack',
      surname: 'Cold'
    }
  }]
