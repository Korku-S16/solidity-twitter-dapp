# 🐦 solidity-twitter-dapp - Decentralized Twitter on Ethereum

A fully decentralized social media platform built on Ethereum blockchain that replicates Twitter's core functionality with Web3 features. Users can create profiles, post tweets, and engage through likes in a censorship-resistant environment.

![Solidity](https://img.shields.io/badge/Solidity-^0.8.0-363636?style=flat&logo=solidity)
![React](https://img.shields.io/badge/React-18.x-61DAFB?style=flat&logo=react)
![Web3](https://img.shields.io/badge/Web3.js-1.8.x-F16822?style=flat&logo=web3.js)
![Ethereum](https://img.shields.io/badge/Ethereum-Sepolia-627EEA?style=flat&logo=ethereum)
![MetaMask](https://img.shields.io/badge/MetaMask-Required-F6851B?style=flat&logo=metamask)

## ✨ Key Features

### 🔐 **Wallet Integration**
- **MetaMask Connection**: Seamless wallet connectivity with one-click setup
- **Network Detection**: Automatic Sepolia testnet switching and configuration
- **Account Management**: Secure account handling with persistent sessions

### 👤 **User Profiles**
- **Profile Creation**: Set custom display names and biographical information
- **On-Chain Storage**: All profile data stored permanently on blockchain
- **Profile Verification**: Automatic profile existence checking before app usage
- **Address Shortening**: Clean UI with shortened wallet addresses or display names

### 📝 **Tweet Management**
- **Create Tweets**: Post messages with smart contract-enforced character limits
- **Chronological Feed**: Tweets automatically sorted by timestamp (newest first)
- **Persistent Storage**: All tweets permanently stored on Ethereum blockchain
- **Gas-Optimized**: Efficient smart contract interactions to minimize transaction costs

### ❤️ **Social Interactions**
- **Like System**: Like and unlike tweets with transparent vote counting
- **Real-time Updates**: Instant like count updates after transactions
- **User Engagement**: Track social interactions with on-chain transparency
- **Duplicate Prevention**: Smart contract prevents duplicate likes from same user

### ⚡ **User Experience**
- **Loading States**: Visual feedback during blockchain transactions
- **Error Handling**: Comprehensive error management for failed operations
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Gas Estimation**: Transaction cost preview before execution

## 🏗️ Architecture

### Smart Contract Layer
📦 Smart Contracts
├── 🐦 Twitter Contract (main.json)
│ ├── createTweet() # Post new tweets
│ ├── getAllTweets() # Retrieve user tweets
│ ├── likeTweet() # Like specific tweets
│ ├── unlikeTweet() # Remove likes
│ └── changeTweetLength() # Admin function
└── 👤 Profile Contract (user.json)
├── setProfile() # Create/update profiles
└── getProfile() # Retrieve profile data


### Frontend Architecture
🎨 React Components
├── App.js # Main application state
├── Connect.js # Wallet connection logic
├── ProfileCreation.js # User onboarding
├── AddTweet.js # Tweet composition
└── Tweets.js # Tweet feed display

### Installation & Setup

1. **Clone and Install**
2. **npm Install**
3. **npm start**
