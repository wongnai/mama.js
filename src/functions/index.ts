// define your functions in other file

// TODO
// - projectInitializer(projectName)
// - packageInstaller(dependencies)
import cliProgress from 'cli-progress'
import execa from 'execa'

const bar = new cliProgress.Bar({}, cliProgress.Presets.shades_classic)

async function installCommand(items: string[], command: string, path: string) {
  bar.start(items.length, 0)
  let i = 0
  for (const lib of items) {
    await execa.command(`${command} ${lib}`, {
      cwd: path,
    })
    bar.update(++i)
  }
  bar.stop()
}

export async function installDependencies(path: string) {
  const dependencies = ['lodash']
  const devDependencies = [
    'typescript',
    'tslint',
    'typescript-tslint-plugin',
    'rollup',
    'lint-staged',
    'prettier',
    'jest',
    'standard-version',
    'husky',
  ]
  await installCommand(dependencies, 'npm i', path)
  await installCommand(devDependencies, 'npm i -D', path)
}
