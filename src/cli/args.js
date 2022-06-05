export const parseArgs = () => {
  const argv = process.argv;
  const finalArray = [];

  argv.forEach((arg, index) => {
    if (arg.startsWith('--')) {
      finalArray.push(`${arg.slice(2)} is ${argv[index + 1]}`);
    }
  });

  const string = finalArray.join(', ');
  console.log(string);
};
parseArgs();

// node args --propName value --prop2Name value2

// node src/cli/args.js --propName value --prop2Name value2
