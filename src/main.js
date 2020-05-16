class App {
    run = async () => {
        const state = {}
        console.log(state?.isActive)
        console.log([[ 1, 2 ], 3].flat())
    }
}

const app = new App()
app.run().then(() => {}).finally(() => console.log('done'))


// download core-js library for adding polyfills for new features, add it in .babelrc
//
