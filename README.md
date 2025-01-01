# git-branch-kit

A CLI tool to simplify Git branch operations

Say goodbye to branch name typos 👋

## Installation

```sh
npm i -g git-branch-kit
```

## Recommended Settings

To customize the behavior of `git-branch-kit`, configure your `.gitconfig` as follows:

```ini
[git-branch-kit]
    checkout = checkout
    delete = delete
```

This configuration allows you to control the commands dynamically. For example:
- If `checkout` is defined, the `checkout` command will be available.
- If `delete` is defined, the `delete` command will be available.

Run the following commands to apply the recommended settings:

```sh
git config --global git-branch-kit.checkout checkout
git config --global git-branch-kit.delete delete
```

You can check the current settings with:

```sh
git config --get git-branch-kit.checkout
git config --get git-branch-kit.delete
```

## Commands

You can also check these commands by running `git-branch-kit -h`.

### Version

Display the current version of `git-branch-kit`:

```sh
git-branch-kit -v
```

or

```sh
git-branch-kit --version
```

### Checkout

Switch to a different branch interactively, similar to:

```sh
git checkout <branch>
```

Usage:

```sh
git-branch-kit checkout
```

### Delete

Delete one or more branches interactively, with an option for force deletion, similar to:

```sh
git branch -D <branch>
```

Usage:

```sh
git-branch-kit delete
```

## Contribute

Contributions are always welcome!

Pull Requests are highly encouraged.

Please follow the template provided when making your submissions.

For major changes, brilliant ideas, or any other questions, feel free to share them in the Issues section.

## LICENSE

Licensed under [MIT](./LICENSE).

