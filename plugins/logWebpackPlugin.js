
class LogWebpackPlugin {
    constructor(doneCallback, emitCallback) {
        this.doneCallback = doneCallback
        this.emitCallback = emitCallback
    }

    apply(compiler) {
        compiler.hooks.emit.tap('LogWebpackPlugin', () => {
            // 在emit事件中回调emitcallback
            this.emitCallback()
        })

        compiler.hooks.done.tap('LogwebpackPlugin', (err) => {
            // 在 done 事件中回调 doneCallback
            this.doneCallback()
        })

        compiler.hooks.compilation.tap('LogwebpackPlugin', () => {
            console.log("The compiler is starting a new compilation...")
        })

        compiler.hooks.compiler.tap('LogwebpackPlugin', () => {
            console.log("The compiler is starting to compile...")
        })
    }
}

module.exports = LogWebpackPlugin