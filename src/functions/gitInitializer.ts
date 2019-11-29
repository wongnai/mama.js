import execa from 'execa'
import ora from 'ora'

export async function initGit(path: string) {
  const spinner = ora('Cooking git').start()

  await execa.command('git init', {
    cwd: path,
  })

  await execa.command('git add .', {
    cwd: path,
  })

  await execa('git', ['commit', '-m', '"🍜 いただきます! 🙏🏻"'], {
    cwd: path,
  }).catch(console.error)

  spinner.stopAndPersist({
    symbol: '🍜',
    text: `Git is cooked!`,
  })

  return path
}
