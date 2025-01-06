#!/usr/bin/env node

import { program } from 'commander';
import { checkoutCommand } from './commands/checkout.js';
import { deleteCommand } from './commands/delete.js';

function showVersion() {
  const versionNumner = "v1.1.0";
  program
  .name('string-util')
  .description('CLI to some JavaScript string utilities')
  .version(versionNumner);
}

showVersion();
program.addCommand(checkoutCommand);
program.addCommand(deleteCommand);

program.parse(process.argv);
