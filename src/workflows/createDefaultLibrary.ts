import chalk from 'chalk'
import { installDependencies } from 'functions'
import { writeConfig } from 'functions/configWriter'
import { initGit } from 'functions/gitInitializer'
import { initProject } from 'functions/initProject'

export async function createDefaultLibraryFlow(name: string) {
  console.log(chalk.blueBright(`We are initializing ${name} for you!\n`))

  const projectPath = await initProject(name)

  writeConfig(projectPath)

  await installDependencies(projectPath)

  await initGit(projectPath)

  console.log(chalk.greenBright(`\n${name} is ready!\n`))
  console.log(`cd ${name}`)
  console.log(`code .`)
  process.exit(0)
}
