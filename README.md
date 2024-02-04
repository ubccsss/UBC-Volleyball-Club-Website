#UBC Volleyball Club Dashboard

## Setup

Once you clone the project, open it up in vscode and use the following commands:

To install all the packages

```
npm install
```

To start the development server.

```
npm run dev
```

Before you commit and create your pull requests use this:

```
npm run lint
```

## File Structure

```
├── app
│   ├── page.tsx          Homepage (www.website/)
│   ├── layout.tsx        Root layout for each page
│   ├── not-found.tsx     404 page
│   ├── error.tsx         Error page
│   ├── Roster            routes to www.website/roster
│   │   ├── page.tsx        roster page
│   ├── api               routes to www.website/api (Backend API)
│   │   ├── getUsers.tsx      api Route (www.website/api/getUsers)
│   ├── ...               ...The Rest of the Pages
├── src
│   ├── components        All of our Frontend components go here
│   │   ├── ui              Put all UI elements like buttons here
│   ├── lib               All of our controllers and handlers go here
│   ├── styles            Put css files here
│   ├── configs
│   ├── types             Put typescript type definitons here
├── public
│   ├── images
│   │   ├── all image files
│   ├── ... all other public files
├── ...
├── node_modules
├── package.json
├── package-lock.json
└── .gitignore
```
