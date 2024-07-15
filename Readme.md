# Thumbnail Checker

Thumbnail Checker is a web application that allows users to upload thumbnails for their YouTube videos and receive votes on which thumbnail performs best. Users are incentivized to vote by earning cryptocurrency.

## Features

- **Upload Thumbnails**: Easily upload multiple thumbnails for your YouTube videos.
- **Voting System**: Engage the community to vote on the best thumbnail.
- **Cryptocurrency Rewards**: Earn crypto for participating in voting.

## Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: Next.js, TypeScript , Solana web3.js
- **Blockchain**: Solana for cryptocurrency transactions
- **Database**: PostgresSQL

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/SwarnenduG07/Thumbnail-checker-web3.git
   cd Thumbnail-checker-web3
   ```

## Replace Secret keys and Wallet Address

Go to _[.env.example]_ and replace ACCESS_SECRET ACCESS_Key. You will get this from AWS S3 Bucket

```bash
cd backend
```

backend folder -> src -> routers -> user.ts and change PARENT_WALLET_ADDRESS with your won Wallet Address 

Replace you private key in privateKey.ts

 ```bash
cd ../user-frontend/utils
```

Replace CloudFront URL with your won URL

 ```bash
cd ../../worker-frontend
```

Replace CloudFront URL with your won URL

## Install dependencies

  ```bash
cd backend
npm install

cd ../user-frontend
npm install

cd ../worker-frontend
npm install
  ```

## Start the development server

### Backend

 ```bash
cd backend
node dist/index.ts
 ```

### user-frontend

 ```bash
cd ../user-frontend
npm run dev
 ```

 Open <http://localhost:3000> with your browser to see the result.

### worker-frontend

 ```bash
cd ../worker-frontend
npm run dev
 ```

Open <http://localhost:3001> with your browser to see the result.
