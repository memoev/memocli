import arg from 'arg';
import { execSync } from 'child_process';

function parseArgumentsIntoOptions(rawArgs) {
 const args = arg(
   {
     '--help': Boolean,
     '--version': Boolean,
     '--create': Boolean,
     '--update': Boolean,
     '--h': '--help',
     '--v': '--version',
   },
   {
     argv: rawArgs.slice(2),
   }
 );

 console.log(args);
 
 if (args['--version']) {
   console.log('v1.0.0')
 }
 if (args['--help']) {
  console.log('help tbd')
}
if (args['--create']) {
  if (args._[0] === 'ghrepo') {
    const output = execSync(`gh repo create ${args._[1]} --public`, { encoding: 'utf-8' });
    console.log(output)
  }
}
if (args['--update']) {
  if (args._[0] === 'ghrepo') {
    execSync('git add .', { encoding: 'utf-8' })
    execSync(`git commit -m "${args._[1]}"`, { encoding: 'utf-8' })
    const output = execSync('git push', { encoding: 'utf-8' })
    console.log(output);
  }
}
 return {
 };
}

export function cli(args) {
 let options = parseArgumentsIntoOptions(args);
}
