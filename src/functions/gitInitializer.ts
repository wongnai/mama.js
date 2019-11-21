import execa from 'execa'
import ora from 'ora'

export async function initGit(path: string) {
    const spinner = ora('Initializing git').start()

    await execa.command('git init', {
        cwd: path,
    })

    await execa.command('git add .', {
        cwd: path,
    })

    await execa('git', ['commit', '-m', '"🍜 いただきまつ!"'], {
        cwd: path,
    }).catch(console.error)

    spinner.stopAndPersist({
        symbol: '🍜',
        text: `Git is initialized`,
    })

    return path
}
