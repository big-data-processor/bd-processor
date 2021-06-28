# The BD-Processor workbench

This is the production repo of BD-Processor.

The BD-Processor (BDP) is a general-purpose web-based data workbench that focuses not only on workflow management but also interactive data analysis.

### Our goal is to provide a full-featured data science workbench.

## Game Changing Features
1. All the following operations can be done via just web browsers! The BDP workbench is designed to be both user- and developer-friendly.
2. Workflow developers can **write scripts**, **define tasks and workflows**, **freely design web interfaces**, **wrap tasks/workflows and customized interfaces into portable packages** for different data anlaysis workflows. That is these portable packages can carry its own friendly web interfaces to guide users to execute tasks or analyze results interactively.
3. End-users who have set up the BD-Processor can easily install the portable packages with zero configuration.
4. BDP also supports web proxy to serve containerized web services so that everyone can define a task to run web services, such as **R/Shiny app**, **Jupyer Notebook**, or even containerized Desktop applications as long as it can be access via web (e.g. using noVNC for VNC remote desktop services in a container).
5. BDP is the first system that allows workflow/package developers to make friendly web pages specifically for their workflows. With our Page API design, developers can freely develop web user interfaces to guide their users to upload files, specify parameters, execute and monitor tasks/workflows, and, the most important, visualize results interactively!  
6. BDP workbench off-course provides its own built-in web interfaces for users to **manage projects**, **upload files**, **specify parameters**, **execute and monitor tasks/workflows**, and **records all the provenence of each task run**. Also, the BDP workbench is designed for multiple users. Administrators can manage users via web pages.
7. BDP can support versatile computing environments by extending and implementing the base class of the Task Adapter (see below). The Task Adapter is an independent component that help BDP to deploy tasks to different computing resources. With different Adapters implemented, BDP can be made compatible with other workflow systems!!

## Demo
1. Web Proxy: With the RStudio task defined, users can run multiple RStudio instances on BDP. The following screen recording was made by Jen-Han Chen (陳正翰)
![rstudio-demo](https://user-images.githubusercontent.com/1439838/122026141-90386600-cdfc-11eb-9ceb-1e5e8bdbe9ad.gif)
I've made a bdp-development-kit package that provides several containerized tools as examples for development, such as Jupyter Notebook or Matlab.
Containerized Linux desktop applications are also included in this bdp-development-kit. You are more than welcome to define your Task/Workflow.

    **Note**: Since the BDP workbench is made for general purposes, the BDP workbench itself does not come with the RStudio. It is the bdp-development-kit package that contains this RStudio Task.

2. More demonstrations are coming.


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
npm start
```

### 5. Register the first account as the system root.
Use a web browser and open the link http://localhost:8080 (depends on your configurations).
On the top-right of the landing page, you can find the Sign In link.


## Components
1. bdp-server: the server-side development repo of BDP. The production server code is the bd-processor.js in this production repo.
2. bdp-client: the client-side development repo of BDP. The production client is in the public folder in this production repo. 
3. [bdp-document](https://big-data-processor.github.io/bdp-document/): the document site hosted via github pages.
4. [bdp-page-api](https://big-data-processor.github.io/bdp-page-api/): the Page API documentation site via github pages.
5. [@big-data-processor/task-reader](https://www.npmjs.com/package/@big-data-processor/task-reader): The task reader parses the workflow playbook to get task/workflow specifications.
6. [@big-data-processor/task-adapter-base](https://big-data-processor.github.io/task-adapter-base/): This is the base class of the Task Adapter to extend and implement for different runtime environments.
7. [@big-data-processor/default-filters](https://github.com/big-data-processor/default-filters): This is the default filter function set for the task-reader to parse the workflow playbook. Additional filter functions can be developed to extend the capability of the workflow playbook.

## Exemplary Task Adapters
Instead of providing our official built-in adapters for all kinds of runtime environments, we provide the extensible base class of the task adapter for developers ([@big-data-processor/task-adapter-base](https://big-data-processor.github.io/task-adapter-base/)).
The following shows our example task adapters.

1. [@big-data-processor/task-adapter-local](https://github.com/big-data-processor/task-adapter-local) and its [npm pacakge](https://www.npmjs.com/package/@big-data-processor/task-adapter-local)
2. [@big-data-processor/task-adapter-docker](https://github.com/big-data-processor/task-adapter-docker) and its [npm package](https://www.npmjs.com/package/@big-data-processor/task-adapter-docker)
3. [@big-data-processor/task-adapter-ssh-docker](https://github.com/big-data-processor/task-adapter-ssh-docker) and its [npm package](https://www.npmjs.com/package/@big-data-processor/task-adapter-ssh-docker)
4. [@big-data-processor/task-adapter-pbs-docker](https://github.com/big-data-processor/task-adapter-pbs-docker) and its [npm package](https://www.npmjs.com/package/@big-data-processor/task-adapter-pbs-docker)

5. Additional Adapters are coming soon (e.g. k8s adapter or cloud adapters like aws-eks or gke adapters). Feel free to create desired Task Adapters for specific runtime environments.

# Affiliation
chiyang[at]mail.cgu.edu.tw

Chi Yang, PhD

Assistant Research Fellow,

Artificial Intelligence Research Center,

Molecular Medicine Research Center, 

Chang Gung University, Taiwan


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
