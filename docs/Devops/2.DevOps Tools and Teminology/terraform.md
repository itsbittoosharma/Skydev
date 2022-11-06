---
sidebar_position: 6
---

# Terraform

# Introduction
The phrase "Infrastructure as Code" (IaC) is frequently used by DevOps specialists. It involves utilising machine-readable specification files to manage and provision the whole IT infrastructure, which includes both real and virtual computers. It takes an operations-focused software engineering strategy. With the use of computer scripts, the entire data centre may be automated.
Terraform is an open-source infrastructure as Code tool developed by HashiCorp. It is used to define and provision the complete infrastructure using an easy-to-learn declarative language.  

It is an infrastructure provisioning tool where you can store your cloud infrastructure setup as codes. It’s very similar to tools such as CloudFormation, which you would use to automate your AWS infrastructure, but you can only use that on AWS. With Terraform, you can use it on other cloud platforms as well.

## Benefits of using Terraform
In the past, the cloud infrastructure was manually controlled without IaC. This method wasn't very effective and was prone to human mistake. The management of several servers and clusters made consistency a difficulty.  
Although configuration management technologies were available, the infrastructure offered relatively little support for them. Versioning tools, DevOps toolchains, development methods, and delivery strategies have greatly advanced the development and administration of application code. Infrastructure as Code, which by default takes use of these benefits to managing infrastructure, was first offered by Terraform.  

- **Consistency**: Versioning and tracking changes are incredibly simple when infrastructure is handled through code. We can rely on the consistency of cloud resource provision to build a scalable set of infrastructure since it occurs logically.
- **Automation**: The cloud resource lifespan is managed using Terraform process, from creation through destruction or decommissioning. This offers the chance to implement end-to-end automation from the infrastructure layer up. Workflow automation can help deployment tactics be strengthened as well. Learn more about automation with Terraform.
- **Less Risk**: The cloud resource lifespan is managed using Terraform process, from creation through destruction or decommissioning. This offers the chance to implement end-to-end automation from the infrastructure layer up. Workflow automation can help deployment tactics be strengthened as well. Learn more about automation with Terraform.
- **Modular and DRY**: In order to be reused across several projects, infrastructure might be created in a modular approach. The initial work required each time a new project begins is compensated by the ability for businesses to ingrain their security and governance processes around IT resources.  

## Terraform Features

Some of the key features of Terraform are

- **Declarative**: Terraform creates infrastructure as code using the declarative syntax of the Hashicorp Configuration Language. Declaring the intended state of the cloud resources to be supplied is made easier by the HCL configuration language. 
- **Cloud Agnostic**: Terraform creates infrastructure as code using the declarative syntax of the Hashicorp Configuration Language. Declaring the intended state of the cloud resources to be supplied is made easier by the HCL configuration language.
- **Ecosystem**: The ecosystem of Terraform's providers and modules is well-established. Terraform Registry offers ready-to-use certified providers and modules. Customers have the option to both publicly and privately design and publish their own modules.
- **Extendible**: Terraform can be extended to support lesser-known or private data centers.
- **Agentless**: Terraform works with the programmatic access provided by cloud provider APIs. Thus there is no need to install agents.


## Resources
- [Terrafrom in 2 hours (freecodecamp)](https://www.youtube.com/watch?v=SLB_c_ayRMo&t=0s)
- [Hashicorp terraform accociate certification (freecodecamp)](https://www.youtube.com/watch?v=V4waklkBC38&t=0s)
- 