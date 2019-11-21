import { writeFile } from 'functions/fileWriter'
import { gitignore, husky, lintStaged, prettier, tsconfig, tslint } from 'templates'

export function writeConfig(path: string) {
    writeFile(path, 'tslint.json', tslint)
    writeFile(path, 'tsconfig.json', tsconfig)
    writeFile(path, '.lintstagedrc.json', lintStaged)
    writeFile(path, '.huskyrc.json', husky)
    writeFile(path, '.prettierrc.json', prettier)
    writeFile(path, '.gitignore', gitignore)
}
