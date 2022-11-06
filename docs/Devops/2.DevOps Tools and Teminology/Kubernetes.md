---
sidebar_position: 4
---

# Kubernetes

# Introduction
Google created the adaptable, portable, and open-source Kubernetes platform in 2014. The primary usage of it is to automatically deploy, scale, and run container-based applications across a cluster of nodes. Additionally, it is intended for managing containerized app services utilising various techniques that offer scalability, predictability, and high availability. 


# Key Objects of Kubernetes
- **Pod**: It is the smallest and simplest basic unit of the Kubernetes application. This object indicates the processes which are running in the cluster.
- **Node**: A node is nothing but a single host, which is used to run the virtual or physical machines. A node in the Kubernetes cluster is also known as a minion.

- **Service**: A service in a Kubernetes is a logical set of pods, which works together. With the help of services, users can easily manage load balancing configurations.

- **ReplicaSet**: A ReplicaSet in the Kubernetes is used to identify the particular number of pod replicas are running at a given time. It replaces the replication controller because it is more powerful and allows a user to use the "set-based" label selector.

- **Namespace**: Kubernetes supports various virtual clusters, which are known as namespaces. It is a way of dividing the cluster resources between two or more users.

## Features of Kubernetes
- Pod: It is a deployment unit in Kubernetes with a single Internet protocol address.
- **Horizontal Scaling**: It is a crucial component of Kubernetes. According to the observed CPU consumption, this feature employs a HorizontalPodAutoscalar to automatically increase or reduce the number of pods in a deployment, replication controller, replica set, or stateful set.
- Automatic Bin Packing: Kubernetes helps the user to declare the maximum and minimum resources of computers for their containers.
- Service Discovery and load balancing: Kubernetes assigns the IP addresses and a Name of DNS for a set of containers, and also balances the load across them.
- Automated rollouts and rollbacks: Kubernetes sends updates and changes to an application's configuration via rollouts. If a problem arises in the system, this procedure promptly rolls back the modifications for you.
- Persistent Storage: For keeping the data, which cannot be lost if the pod is terminated or rescheduled, Kubernetes offers a crucial feature called "permanent storage." For storing the data, Kubernetes supports a number of storage platforms, including Amazon Elastic Block Storage and Google Compute Engine's Persistent Disks (GCE PD) (EBS). Additionally, it offers NFS or GFS, two distributed file systems.
- Self-Healing: This characteristic is crucial to the Kubernetes idea. Those containers that fail during execution are automatically restarted by Kubernetes. Additionally, it prevents such containers from functioning automatically if they do not respond to the user-defined health check.

## Kubernetes Architecture

The architecture of Kubernetes actually follows the client-server architecture. It consists of the following two main components:

- Master Node (Control Plane)
- Slave/worker node

### Master Node
In a Kubernetes design, a cluster's states are managed by the master node. Actually, it serves as a starting point for all administrative activities. More than one master node is present in the Kubernetes cluster to verify fault tolerance.
Following are the four different components which exist in the Master node or Kubernetes Control plane:

- API Server
- Scheduler
- Controller Manager
- ETCD

**API Server**: The REST instructions given by the user are received by the Kubernetes API server. The REST requests are received, verified, processed, and then executed. The resultant state of a cluster is kept in "etcd" as a distributed key-value store once REST instructions have been executed. 

**Scheduler**: The jobs are assigned to the worker nodes by the scheduler in a master node. Additionally, it is utilised to store the data on resource utilisation for each worker node.  

**Controller Manager**: A controller is another name for the manager of a controller. It operates as a daemon in non-terminating control loops. In a master node, the controllers govern the cluster's state while carrying out a task. The many sorts of controllers for handling nodes, endpoints, etc. are executed by the controller manager in Kubernetes. 

**ETCD**: It is an open-source, simple, distributed key-value storage which is used to store the cluster data. It is a part of a master node which is written in a GO programming language.


### Worker/Slave node
Minions are another name for the Kubernetes worker node. A physical device known as a worker node runs the apps through pods. It includes each and every necessary service that enables a user to allocate resources to the scheduled containers.

**Components of Worker/Slave node**

**Kubelet**: Each worker node in a cluster has an agent service that runs on it. It makes sure that the pods and the containers they are in are operating properly. Each worker node's kubelet connects with the master node. Additionally, it launches, shuts, and maintains the containers that the master node directly groups into pods.  

**Kube-proxy**: It is a Kubernetes proxy service that runs uncomplicatedly on each worker node in the cluster. Request forwarding is this component's primary goal. Through Kube-proxy, each node communicates with the Kubernetes services.  

**Pods**: A pod is a combination of one or more containers which logically execute together on nodes. One worker node can easily execute multiple pods.

## Resources
- [Kubernetes course (techworldwithnana)](https://www.youtube.com/watch?v=X48VuDVv0do&t=0s)
- [Introduction to Kubernetes (edx)](https://www.edx.org/course/introduction-to-kubernetes)
- [Hands on CKA/CKAD/CKS ](https://www.youtube.com/watch?v=jZOs8Oips7Q&t=0s)
- [KCNA](https://www.youtube.com/watch?v=iGkFHB1kFZ0&t=0s)