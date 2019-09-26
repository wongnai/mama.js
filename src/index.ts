import commander from 'commander'
import { sayWelcome } from 'functions/welcome'
import { createDefaultLibraryFlow } from 'workflows/createDefaultLibrary'

commander
  .arguments('<name>')
  .description('Create new library')
  .action((name: string) => {
    sayWelcome()
    createDefaultLibraryFlow(name)
  })

commander.parse(process.argv)
