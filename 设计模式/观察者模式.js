class Center {
  obServerList = []
  addObServer = (obServer) => {
    this.obServerList.push(obServer)
  }
  notify = (msg) => {
    this.obServerList.forEach((item) => {
      item.update(msg)
    })
  }
}

class ObServer {
  update = (msg) => {
    console.log('from-Center', msg)
  }
}
const obServer = new ObServer()
const center = new Center()
center.addObServer(obServer)
center.notify('hello')
