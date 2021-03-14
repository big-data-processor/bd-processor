# The BD-Processor workbench

This is the production repo of BD-Processor.

The BD-Processor (BDP) is a generic web-based workflow management system with the capability of serving fully-customized web pages.
### Our goal is to provide a lightweight, yet full-featured data workbench.

This workbench allows developers to **write scripts**, **define tasks and workflows**, **construct portable packages**, and **freely design web interfaces** for different data anlaysis workflows.
Users who have set up the BD-Processor can easily install the portable packages with near zero configuration.
Although the BDP workbench already provides built-in web interfaces for users to **manage projects**, **upload files**, **specify parameters**, **execute and monitor tasks/workflows**, and **records all the provenence of each task run**, developers can provides better web pages specifically for their packages.
With these developer-customized web pages, developers can help to guide users to upload files, specify parameters, execute and monitor tasks/workflows, and, the most important, visualize results interactively!

All of the above mentioned developer and user actions can be done via just web browsers!!
The BDP workbench is designed to be both user- and developer-friendly.

## Documentation site

Please see the [bdp-document](https://big-data-processor.github.io/bdp-document/) page.


## Installation
To setup the BD-Processor, please follow the steps. (Or follow [the complete installation guide](https://big-data-processor.github.io/bdp-document/installation.html).)
### 1. Install NodeJS(v14+), Git, and Docker.
Please install the [NodeJS](https://nodejs.org/), [Git](https://git-scm.com/), and [Docker](https://www.docker.com/).

### 2. Use the following commands to install the server.
```
git clone https://github.com/big-data-processor/bd-processor.git
cd bd-processor
npm install
```

### 3. Configure the BD-Processor
Copy the file `./configs/server-config-template.yaml` to `./configs/server-config.yaml` and edit the `./configs/server-config.yaml` file.

It is strongly recommended to configure the file for your own preferences. Please see [here](https://big-data-processor.github.io/bdp-document/installation.html#configure-the-mongo-database-connection) for detailed information.

### 4. Start the server
Go to the folder (the bd-processor folder) which contains the `bd-processor.js` file.
```
npm start # or node bd-processor.js
```

### 5. Register the first account as the system root.
Use a web browser and open the link http://localhost:8080 (depends on your configurations).
On the top-right of the landing page, you can find the Sign In link.


## Components
1. bdp-server: the server-side repo of BDP.
2. bdp-client: the client-side repo of BDP.
3. [bdp-document](https://big-data-processor.github.io/bdp-document/): the document site hosted via github pages.
4. [bdp-page-api](https://big-data-processor.github.io/bdp-page-api/)
5. [@big-data-processor/task-reader](https://www.npmjs.com/package/@big-data-processor/task-reader): The task reader parses the workflow playbook to get task/workflow specifications.
6. [@big-data-processor/task-adapter-base](https://big-data-processor.github.io/task-adapter-base/): This is the base class of the Task Adapter to extend and implement for different runtime environments.
7. [@big-data-processor/default-filters](https://github.com/big-data-processor/default-filters): This is the default filter function set for the task-reader to parse the workflow playbook. Additional filter functions can be developed to extend the capability of the workflow playbook.

## Exemplary Task Adapters
Instead of providing our official built-in adapters for all kinds of runtime environments, we provide the extensible base class of the task adapter for developers.
The following shows our example task adapters.

1. [@big-data-processor/task-adapter-local](https://www.npmjs.com/package/@big-data-processor/task-adapter-local)
2. [@big-data-processor/task-adapter-docker](https://www.npmjs.com/package/@big-data-processor/task-adapter-docker)
3. [@big-data-processor/task-adapter-pbs](https://www.npmjs.com/package/@big-data-processor/task-adapter-pbs)
4. [@big-data-processor/task-adapter-ssh-docker](https://www.npmjs.com/package/@big-data-processor/task-adapter-ssh-docker)
5. ...

# Affiliation
Chi Yang,
Assistant Research Fellow,
Artificial Intelligence Research Center,
Molecular Medicine Research Center, Chang Gung University, Taiwan


## Roadmaps
(comming soon)

## Licenses

### The BDP workbench
Licensed under the Apache-2.0 License (see the [license file](https://github.com/big-data-processor/bd-processor/blob/master/LICENSE)).

### The Page API
Licensed under the MIT License (please see the [license file](https://github.com/big-data-processor/bdp-page-api/blob/master/LICENSE)).

### The Base Class of the Task Adapter
Licensed under the MIT License (please see the [license file](https://github.com/big-data-processor/task-adapter-base/blob/master/LICENSE)).


## Buy me a coffee☕
If you find this workbench useful, you may support me by [Buy me a coffee](https://www.buymeacoffee.com/chiyang)☕. 
