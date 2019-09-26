import chalk from 'chalk'
import figlet from 'figlet'

export function sayWelcome() {
  console.log(chalk.redBright(figlet.textSync('MAMA.js')))
  console.log(
    chalk.redBright(
      '\nInitialize Cool Library as fast as cook instant noodle!\n\n',
    ),
  )
}
