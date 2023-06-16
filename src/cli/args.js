const parseArgs = () => {
  const args = process.argv.slice(2);
  let i = 0;

  while (i < args.length) {
    const argName = args[i].slice(2); // Remove the leading --
    const argValue = args[i + 1];
    console.log(`${argName} is ${argValue}`);
    i += 2;
  }
};

parseArgs();
