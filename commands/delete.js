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
        console.error('Failed to fetch branch: ', error);
        return;
    }

    const { branches } = await inquirer.prompt({
        name: 'branches',
        type: 'checkbox',
        message: 'Please select branches to delete:',
        choices: branchSummary.all,
    });

    if (branches.length === 0) {
        console.log('No branches selected.');
        return;
    }

    for (const branch of branches) {
        try {
            //TODO: Branches to be forcibly deleted should be alerted.
            await git.deleteLocalBranch(branch);
            //await git.raw(['branch', '-D', branch])
            console.log(`Deleted branch: ${branch}`);
        } catch (error) {
            console.error(`Failed to delete branch: ${branch}.`, error.message);
        }
    }
}

export const deleteCommand = new Command()
    .command('delete')
    .description('Delete Branch: $git branch -d <branch>')
    .action(selectBranch);
