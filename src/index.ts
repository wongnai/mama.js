import program from 'commander'

program
  .command('<name>')
  .description('create new library')
  .action((name) => {
    console.log(name)
  })
