import arg from 'arg';

function parseArgumentsIntoOptions(rawArgs) {
 const args = arg(
   {
     '--help': Boolean,
     '--version': Boolean,
     '--h': '--help',
     '--v': '--version',
   },
   {
     argv: rawArgs.slice(2),
   }
 );
 if (args['--version']) {
   console.log('v1.0.0')
 }
 if (args['--help']) {
  console.log('help tbd')
}
 return {
   help: args['--help'] || false,
   version: args['--version'] || false,
 };
}

export function cli(args) {
 let options = parseArgumentsIntoOptions(args);
 console.log(options);
}
