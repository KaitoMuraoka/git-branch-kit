#!/usr/bin/env node

import { program } from 'commander';
import { checkoutCommand } from './commands/checkout.js';
import { deleteCommand } from './commands/delete.js';
import { execSync } from 'child_process';

async function loadCustomCommand() {
  try {
      const customCheckout = execSync('git config --get git-branch-kit.checkout', { encoding: 'utf8' }).trim();
      if (customCheckout === 'checkout') {
          program.addCommand(checkoutCommand);
      }
  } catch (error) {
      console.warn('Custom checkout command is not set in git config. Using default.');
      program.addCommand(checkoutCommand);
  }

  try {
      const customDelete = execSync('git config --get git-branch-kit.delete', { encoding: 'utf8' }).trim();
      if (customDelete === 'delete') {
          program.addCommand(deleteCommand);
      }
  } catch (error) {
      console.warn('Custom delete command is not set in git config. Using default.');
      program.addCommand(deleteCommand);
  }
}


await loadCustomCommand();
program.parse(process.argv);
