# [react-threejs-minecraft](https://react-threejs-minecraft.web.app/)

<br />
<img src="https://github.com/sctlcd/react-threejs-minecraft/blob/main/design/react-threejs-minecraft-mockup-presentation.png" alt="react-threejs-minecraft" width="800">
<br />

---

# Table of Contents <a name="tableOfContents"></a>

1. [Introduction](#introduction)

2. [Run the project locally](#runLocally)

3. [Available Scripts](#availableScripts)

4. [Deployment](#deployment)
	- [Deployment – Run locally](#deploymentRunLocallydeploymentRunLocally)
	- [Deployment – Live website](#deploymentLiveWebsite)

5. [Credits](#credits)
	- [Media](#media)
---

## Introduction <a name="introduction"></a>


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Run the project locally <a name="#runLocally"></a>

  - Create React app
    
    ```
      npx create-react-app my-app
      
    ```

  - Runs the app in the development mode.
    Open http://localhost:3000 to view it in the browser.
        
    ```
      cd my-app
      npm start
    ```

Back to [top](#tableOfContents)

---

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

Back to [top](#tableOfContents)

---
## Deployment <a name="#deployment"></a>
### Deployment – Run locally <a name="#deploymentRunLocally"></a>

1. Prerequisite:  
    - Make sure [Node](https://nodejs.org/en/) and [NPM](https://www.npmjs.com/) are installed on your computer. You can download both at nodejs.org (NPM is included in your Node installation).
    - Please see `.nvmrc` file at the root of `react-threejs-minecraft` repo.
    - Using nvm, a Node Version Manager is recommended as it helps you manage and switch between different Node versions with ease. It provides a command-line interface where you can install different versions with a single command, set a default, switch between them, etc.
2. In GitHub click on the repository nammed [react-threejs-minecraft](https://github.com/sctlcd/react-threejs-minecraft)
3. Along the top bar, find the “clone or download” button.
4. Here you have the option to clone by HTTPS or SSH.
5. Once you have chose your desired option, then click the copy icon next to the URL.
6. In the terminal, ensure you are in the correct directory which you want to copy the code into. If not, change the directory.
7. Run 

    ````
      git clone https://github.com/sctlcd/react-threejs-minecraft.git
    ````

8. Press the enter button and your clone will be created.
9. Install all modules listed as dependencies in package.json
    
    ```
      npm i 
    ```

    note: in this template [three](https://www.npmjs.com/package/three) - **a JavaScript 3D library**,

10. 

Back to [top](#tableOfContents)

---

### Deployment - Live Website <a name="#deploymentLiveWebsite"></a>

[react-threejs-minecraft](https://github.com/sctlcd/react-threejs-minecraft) live website is currently deployed on [Firebase](https://firebase.google.com/) using the `main` branch on GitHub. Once you have the project setup locally, you can proceed to deploy it remotely.

1. Install Firebase CLI Tools, [firebase-tools](https://www.npmjs.com/package/firebase-tools)

2. Create firebase.json and .firebaserc at the root of your project with the following content:

    `firebase.json`:

    ```
    json
    {
      "hosting": {
        "public": "dist",
        "ignore": [],
        "rewrites": [
          {
            "source": "**",
            "destination": "/index.html"
          }
        ]
      }
    }
    ```

    `.firebaserc`:

    ```
    js
    {
      "projects": {
        "default": "<YOUR_FIREBASE_ID>"
      }
    }
    ```

3. After running `npm run build`, deploy using the command `firebase deploy`.


=> live link: 

Back to [top](#tableOfContents)

---

## Credits <a name="credits"></a>

### Media <a name="media"></a>

- []() - []() | copyright []()

Back to [top](#tableOfContents)

---