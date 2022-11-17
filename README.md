# Ether Lottery

A simple Lottery dApp built on Rinkeby testnet, whose winner selection method is based on a provably fair and verifiable random number generator.

## Rules

#### Participation

- Exactly 0.01 ETH must be sent to participate in the lottery
  - Any different amount would revert the transaction
  - The same participant can however click **Participate** again to place more bet than just 0.01 ETH
- The manager cannot participate
- You cannot participate if the manager is the zero-address. This could happen after a lottery ends

#### Getting the results

- Only the manager can get the results
- Lottery must have at least 3 participants
- The manager must not be a zero-address

#### Setting a new manager

- A lottery must have ended and the current manager should be a zero-address

**Please make sure to connect your [MetaMask](https://metamask.io/) wallet and switch to Rinkeby Testnet before clicking any of the three buttons to avoid seeing big red error messages. Support for other wallets have not been implemented yet.**

## Demo 🚀

Try it out [here](https://lottery-dapp-bytecode-velocity.vercel.app/) and view the lottery contract [here](https://goerli.etherscan.io/address/0xba38610d6ceb970de9127ed0b4eb6f0a31fed8c7)

## Tech Stack

The frontend is built using [Next.js](https://nextjs.org/) and [Bulma](https://bulma.io/) library for CSS styling.

On the Web3 side, the contract is written in Solidity and compiled and deployed using Hardhat. The contract uses [Chainlink VRF](https://docs.chain.link/docs/chainlink-vrf/) to generate a random numbers for the selection of a winner. This VRF however, **\*doesn't** return a random number immediately* and takes upto 2 minutes to do so, which is why after clicking the *Get Results\* button, a 120 seconds timer starts, to show the time remaining.

## Limitations

The most prominent limitation of this Lottery system is that it's proper functioning is heavily dependent on how it's going to be interacted with.
The buttons are not _turned off_ (i.e. made un-clickable) at any moment. So, if a participant decides to just go ahead and randomly start clicking the buttons **in between transactions**, the application is mostly likely going to report an error or even worse, it may crash.
Therefore, if you'll try it using your own sincere conscience and patiently wait for the operations to complete and the **updates to appear on screen**, you could have a good time with this little creation of mine.

The contract is manually tested using Remix IDE and it's local accounts but not with any testing framworks or libraries.

## What I learned

I came across many new findings which I may have remained unaware of without creating this decentralized application. Some of them are:

- How to use an oracle like Chainlink VRF
- Knowledge of Solidity and Ethereum alone is not enough to build a fully functional dApp
  - Frontend designing skills probably comes first
- How to host my own Next.js project for free on Vercel
- Interacting with MetaMask wallet using Ether.js
- Importance of using enviroment variables
- Unit conversion using utils library of Ether.js

## Contact me

[Instagram](https://www.instagram.com/sweetjimmy_/) | [Telegram](https://t.me/sweet_jimmy) | [Twitter](https://twitter.com/bytcodevelocity) | [Email](mailto=velocitybytecode@gmail.com)
