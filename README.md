# Front End Masters Instructors API

## What's This?

This is a Hapi.js API built specifically for my Getting Started with Hapi.js workshop at Front End Masters. There are several branches, each of which corresponds to a module in the worshop. Each module has two branches associated with it: one to act as a starting point (with minimal code toward the solution) and another to show the solution.

## Running the API

To get started, clone the repo.

```bash
git clone https://github.com/chenkie/fem-instructors-api.git
```

Make sure you have Node.js and npm installed, then install the dependencies for whichever branch you're working on.

```bash
npm install
```

Lastly, run the API.

```bash
npm start
```

You can also run the API in development mode to get automatic server restarts with Nodemon.

```bash
npm run dev
```

## Switching Branches

To see all the available branches, view them with Git.

```bash
git branch
```

To switch between branches, checkout whichever one you are interested in.

```bash
git checkout branch-name
```

If you have altered the files on a given branch, you'll need to stash or override your work before you can switch to another branch. If you don't care a about losing your work, you can simply force the checkout.

```bash
git checkout -f branch-name
```

## License

MIT
