import { appendFileSync } from 'fs'
import ora from 'ora'

export function writeFile(path: string, fileName: string, data: string) {
    const spinner = ora(`Creating ${fileName}`).start()
    const filePath = `${path}/${fileName}`
    appendFileSync(filePath, data)
    spinner.stopAndPersist({
        symbol: '🥢',
        text: `${fileName} is created!`,
    })
}
