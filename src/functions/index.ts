// define your functions in other file

// TODO
// - projectInitializer(projectName)
// - packageInstaller(dependencies)
import execa from 'execa'
import ora from 'ora'

async function installCommand(items: string[], command: string, path: string) {
  for (const lib of items) {
    const spinner = ora(`Adding seasoning ${lib}`).start()
    await execa.command(`${command} ${lib}`, {
      cwd: path,
    })
    spinner.stopAndPersist({
      symbol: '💬',
      text: `${lib} is added!`,
    })
  }
}

export async function installDependencies(path: string) {
  const dependencies = ['lodash']
  const devDependencies = ['mama-noodle']
  await installCommand(dependencies, 'npm i', path)
  await installCommand(devDependencies, 'npm i -D', path)
}
