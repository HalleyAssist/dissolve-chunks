const stream = require('stream')

class ChunkStream extends stream.Transform {
    constructor(dc){
        super()
        this._dc = dc
    }
    _transform(chunk, enc, done){
        for(const result of this._dc.process(chunk)){
            this.emit("parsed", result)
        }
        done()
    }
}
module.exports = ChunkStream