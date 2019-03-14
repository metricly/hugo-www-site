---
author: Mike Mackrory
date: ADD DATE
description: Understand the advantages that AWS Nitro offers users of EC2, and what
  you need to know before you deploy your AMI on an instance with Nitro Hypervisor.
title: What Are AWS Nitro Instances, and Why Use Them?
category: DevOps
url: "/what-is-aws-nitro/"
layout: single
featured-image: ''
thumbnail-image: true
featured: false
draft: true

---
At Re:Invent 2017, Anthony Liguori, a senior principal engineer within the EC2 space, introduced the Nitro Hypervisor. In his [presentation](https://www.youtube.com/watch?v=LabltEXk0VQ), he walked the audience through the Nitro Hypervisor's development and the advantages it offered AWS and AWS customers, both in terms of performance and cost.

In this article, we're going to discuss the advantages that Nitro offers users of EC2, and we'll cover what you need to know before you deploy your AMI on an instance with Nitro Hypervisor. Before we get to the Nitro Hypervisor, let's talk about hypervisors and virtual machines in general. We'll start from the basics, and then jump right into the technical implementation for Nitro.

### EC2 is a Service of Virtual Machines

When you start a new EC2 instance in AWS, you're not accessing a stand-alone server within an AWS data center. [EC2 instances](/ec2-instances/) are virtual machines created on physical servers, and that share resources with other virtual machines, running simultaneously on the same server.

![](https://lh5.googleusercontent.com/Ul4u_ni52rg8NyA-UB7Buk9-hGNh-fC3ICcw_lZq-JRjZlxPKcoxyA3wew19ialIwXb_BtW_O5deDd44s2EUXMy4ox9UjPesJQmMDbVnpoaNUzpRGpQVEeULMr9TNr8nlW0HbA19)

Fig. 1 Simplified Visualization of Virtual Machines on a Xen-based Server

The concept behind virtualization has been around since 1974, but it wasn't until the mid-2000s that hardware had evolved to a point where implementation of this technology became feasible. When AWS first launched its EC2 service, it used Xen Paravirtualization to enable and support its virtual machines.

When you're dealing with the most basic computer functions on a server, there are different levels of instructions which can be executed. The operating system can execute instructions with a privileged access level. When an operating system running within a virtual machine attempts to issue these same instructions, it is not able to execute them as a privileged process, and the system rejects them.

The responsibility of the Virtual Machine Manager (VMM) is to trap these rejections and handle them appropriately. Some examples of the types of instructions which the VMM traps and handles are network calls and reading and writing from storage devices.

The VMM runs within the Management Partition and passes many of these trapped instructions on to device models. A device model (DM) is a piece of software which can handle specific types of instruction, such as communication across the network to a different server. The DM handles the instruction, and the application can continue with the next instruction.

### The Advantages of Running Software on a Virtual Machine

Running your applications and services on a virtual machine (VM)  may appear to add unnecessary overhead and complexity, but there are many benefits which make this overhead worth it.  The first is that you can host multiple machines on a single server. This consolidation reduces the physical footprint of the hardware and allows you to invest in more powerful hardware and distribute the cost.

A virtual machine also provides an abstraction layer between your application and the underlying hardware. When you run your application in a virtual machine, you don't need to understand the complexities of the underlying system. Services hosted on a virtual machine have reduced maintenance costs and increased the portability. The result is a situation which enables you to deploy your services on different instance types and sizes as your needs change.

### The Challenges with Traditional Virtual Machine Technology

The Xen Hypervisor requires you to set up a management partition on each server. This partition and the VMM and DMs it hosts require system resources to perform their tasks. These management requirements take resources away from the VMs. Balancing resource usage between the management partition and the VMs is a balancing act which can take time and experimentation to perfect.

Another challenge is that the DMs are software solutions to problems which are handled by hardware in a traditional server. Software DMs are slow by comparison and reduce the overall performance of the virtual machine.

### How the Nitro Hypervisor Addresses Most VM Concerns

When the team on Project Nitro started to work on improvements to the EC2 virtualization strategy, they began by focusing on the DMs and looking for ways to reduce the latency of the tasks they needed to handle. Hardware companies like Intel had already begun to include virtualization handling on their chipsets, which had already begun to solve some of these challenges.

The EC2 team worked with hardware teams to develop a collection of application-specific interface cards, or ASICs. These ASICs allowed the team to replace different DMs with a hardware solution. These ASICs or "Nitro Cards" can now be used to handle storage, networking, management, monitoring, and security as hardware invocations directly from the VMM.

This progress allowed the team to reduce the dependence on DMs, and ultimately, remove the need for a management partition as well. The result is a system where resources are accessible entirely by the virtual machine it hosts. Hardware solutions are also significantly faster than software solutions, which has further increased speed.

![](https://lh3.googleusercontent.com/c776WRvZwKFvw9flBk1FfsvMcGUeS2byd6W9K6JOocgsF3dZyOM7Ck3OGFUlczwAm9qe7CaeqrvPPyszqBeCvv87BYbqtGbNroyaCgoZI8gf_NOf1830zakKF6n4HDKnIWTs1rbr)

Fig. 2 Nitro Increases the Resources Available to the VMs

### Deploying Your AMI on an Instance with Nitro Hypervisor

If you've been using instances from the C3, C4 or I3 family, then you've already benefited from the Nitro team's work. Different aspects of the Nitro Hypervisor were included in those instance types to increase performance to users.

The new C5 instance type and many of the new instance types announced by AWS include the Nitro Hypervisor, and as such, have a few requirements.

The first risk arises from the usage of undocumented features of the system. Occasionally an application checks to see if it's running on EC2 by looking for features of the Xen virtualization service, which is no longer present on Nitro-based systems. Contact your AWS rep for the approved method to execute a check of this type.

The second risk is related to the use of ASICs to handle networking and storage I/O functionality. Nitro-based machines use a Non-Volatile Memory Host Controller (or NVMe device) to handle the connection to EBS storage. You need to ensure that your AMI supports the use of this NVMe device for its storage activities. Nitro machine also uses an Enhanced Network Adapter (ENA) for network communications, so you're AMI needs to support ENA connections.