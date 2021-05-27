import del from 'rollup-plugin-delete'
import packageJson from './package.json'

const decidePackageName = rawName => {
    try {
        Function(`var ${rawName}`)
        return rawName
    } catch (e) {
        throw new Error(`Your package name '${rawName}' is not a valid JS identifier and cannot be automatically converted. Consider setting the name manually in rollup.config.js`)
    }
}

const name = decidePackageName(packageJson.name)
const file = `dist/${name}.js`

export default {
    input: packageJson.main,
    output: { file, format: 'iife', name },
    plugins: [del({
        targets: 'dist/*',
    })]
}
