# UBC Volleyball Club Dashboard 

# IMPORTANT!
you NEED a file called env.local in the root directory to run this project. This file stores all our API keys which are sensitive so do not push it to github!
To get it, check the google drive link linked in Jira (or just msg adi) 

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

## Supabase Handlers
```
To access Supabase for anything, you can use one of these 3 clients:

(utils/client_client.ts) Client Component client - To access Supabase from Client Components, which run in the browser.
(utils/server_client.ts) Server Component client - To access Supabase from Server Components, which run only on the server.
(utils/server_action_client.ts) Server Action client - To access Supabase from Server Actions and Route Handlers.

Please make sure you use the right client for the right component to prevent something from breaking. As a rule of thumb, if you are rending UI, use the client_client one, if you are handling db code, use the server_action_client one.

For examples, check out the action.ts in /login and /signup for reference :)
```

## File Structure
```
├── app
│   ├── page.tsx          Homepage (www.website/)
│   ├── layout.tsx        Root layout for each page 
│   ├── not-found.tsx     404 page
│   ├── error.tsx         Error page
│   ├── Roster            routes to www.website/roster  
│   │   ├── page.tsx          roster page component
│   │   ├── user_action.ts    server action that is used for securing database calls, api calls, sensitive data!

│   ├── api               routes to www.website/api (Backend API)  
│   │   ├── getUsers.tsx      api Route (www.website/api/getUsers)
│   ├── ...               ...The Rest of the Pages
├── src
│   ├── components        All of our Frontend components go here
│   │   ├── pages           All of our page related components will go here
│   │   ├── ui              Put all ShadCN Components Here
│   ├── utils             all of our utlities like supabase clients will go here
│   ├── styles            Put css files here
│   ├── config
│   ├── handlers          Large handler files for stuff like mailing can be put here           
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
