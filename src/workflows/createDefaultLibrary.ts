import chalk from 'chalk'

export function createDefaultLibraryFlow(name: string) {
  console.log(chalk.blueBright(`We are initializing ${name} for you!\n`))

  // TODO: Initialize Project Here

  // TODO: Call Install

  console.log(chalk.greenBright(`\n${name} is ready!\n`))
  console.log(`cd ${name}`)
  console.log(`code .`)
}
