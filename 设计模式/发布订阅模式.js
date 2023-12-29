let id = 1000
class Pubsub {
  constructor() {
    this.eventList = {}
  }
  subscribe(eventName, callback) {
    if (!this.eventList[eventName]) {
      this.eventList[eventName] = []
    }
    this.eventList[eventName].push({ id: ++id, callback })
    return id
  }
  publish(eventName, ...args) {
    if (this.eventList[eventName]) {
      this.eventList[eventName].forEach((funcObj) => {
        funcObj.callback(...args)
      })
    }
  }
  unsubscribe(eventName, id) {
    if (this.eventList[eventName]) {
      this.eventList[eventName].forEach((callbackObj, idx) => {
        if (callbackObj.id === id) {
          this.eventList[eventName].splice(idx, 1)
        }
      })
    }
  }
}
const pubsub = new Pubsub()
const tag = pubsub.subscribe('test', (msg) => {
  console.log(msg)
})

pubsub.publish('test', 'helloworld-1')
pubsub.publish('test', 'helloworld-2')
pubsub.unsubscribe('test', tag)
pubsub.publish('test', 'helloworld-3')
