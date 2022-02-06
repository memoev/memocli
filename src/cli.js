import arg from 'arg';
import { execSync } from 'child_process';

function parseArgumentsIntoOptions(rawArgs) {
 const args = arg(
   {
     '--help': Boolean,
     '--version': Boolean,
     '--create': Boolean,
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
 return {
 };
}

export function cli(args) {
 let options = parseArgumentsIntoOptions(args);
}
