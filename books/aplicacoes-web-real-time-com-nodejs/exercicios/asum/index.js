
const argv = [1, 2, 3, 4, 5];
const argc = argv.length;

function asum(argv, argc) {
  if (argc == 0) return 0;
  if (argc == 1) return argv[0];

  return argv[0] + asum(argv.slice(1), argc - 1)
}

const result = asum(argv, argc);
console.log(result);