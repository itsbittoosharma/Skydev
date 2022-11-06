---
sidebar_position: 1
---

# Blockchain

## Introduction
A blockchain is a shared, distributed, and permanent database shared among multiple nodes on a computer network. They record data in a way that makes it probabilistically impossible to modify or hack the system.

Specifically, as its namesake, blockchains record data as a chain of blocks. Each block contains a group of transactions, which could be transferring assets around the network, or updating the information stored on the blockchain.

Blockchains were popularized by the anonymous person (or group) Satoshi Nakamoto, when they released the Bitcoin Network in 2009. Bitcoin is a cryptocurrency network, and it handles primarily the transfer of the BTC asset across the network, without a trusted middleman or authority, while ensuring the network itself is secure and cannot be hacked. (P.S. The bitcoin network is also likely the biggest bug bounty in the world - if you can hack it, you're an instant trillionaire).

## State Management
Blockchains start off with a Genesis State when they launch. Bitcoin's genesis state happened in 2009 when the public network launched. Ethereum's Genesis State happened in 2015, when it launched.

Every transaction on a blockchain modifies the global state that is replicated across all nodes.

## Nodes
A blockchain network is managed autonomously through a peer-to-peer distributed network of computer nodes. Without going into too much detail, you can simply think of each node in the network as keeping a copy of the global transaction ledger. Therefore, each node can individually verify and audit transactions happening on the network and ensure there was no illicit behaviour.

Another type of node, called a mining node, is responsible for grouping together new transactions being made on a network into a block, verifying them, and proposing the block to be included onto the global ledger by everyone else. Mining is computationally hard, and very important to do securely, so miners whose blocks get accepted are given a token reward for their hard work.