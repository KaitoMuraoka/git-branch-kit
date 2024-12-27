#!/usr/bin/env node

import inquirer from 'inquirer';
import simpleGit from 'simple-git';
import { Command } from 'commander';

async function selectBranch() {
    const git = simpleGit();
    let branchSummary;

    try {
        branchSummary = await git.branchLocal();
    } catch (error) {
        console.error('Failed to fetch branch: 'error);
        return;
    }

    const { branch } = await inquirer.prompt({
        name: 'branch',
        type: 'list',
        message: 'Please select a branch:',
        choices: branchSummary.all,
    });


    try {
        await git.checkout(branch);
        console.log(`Switch to branch ${branch} bransh!`);
    } catch (error) {
        console.error(`Failed to switch to branch ${branch}`);
    }
}

export const checkoutCommand = new Command()
.command('checkout')
.description('Switch to a different branch: $git checkout <branch>')
.action(selectBranch);
