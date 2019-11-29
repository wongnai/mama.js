import execa from 'execa'
import makeDir from 'make-dir'
import ora from 'ora'

export async function initProject(projectName: string) {
  const path = makeDir.sync(projectName)
  const spinner = ora('Cooking project').start()

  await execa.command('npm init -y', {
    cwd: path,
  })

  spinner.stopAndPersist({
    symbol: '♨️',
    text: ` ${projectName} is cooked at ${path}`,
  })

  return path
}
