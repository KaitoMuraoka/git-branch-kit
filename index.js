#!/usr/bin/env node

import { program } from 'commander';
import { checkoutCommand } from './commands/checkout.js';
import { deleteCommand } from './commands/delete.js';

program.addCommand(checkoutCommand);
program.addCommand(deleteCommand);

program.parse(process.argv);
