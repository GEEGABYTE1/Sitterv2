# Flipper

A decentralized Tweeting Platform powered by Web3.js. 

A Twitter platform concept where tweets are now sent to the Ethereum network. This is a beginner js project.

The supplier address is the first address on the blockchain, and has no significance to the user. Since the program is on a testnet or local blockchain, gas prices have not been taken into consideration. Though, if ever deployed on the mainnet, it should be noted that each user must have some eth in order to account for gas fees.



# Signing up/Creating an account

Currently, the program runs on a testnet or a local blockchain (development processes were done on Ganache). If a user does not an account hash registered on the network, they must type `/create`, where it will prompt them to type a password. The password will then be combined into an account hash for the network, which is recommended to be saved. 


If the user already has a user hash, they can automatically just type their user hash to log in.

# Tweeting 🦜

Evert user message will be sent to a local data structure of an object. There are currently no paramters or filters developed. The method the program sends messages to the chain is through the signing proccess and recovering the signed transactions. 

*Note*: There are times where the program will not sign the message. This is due to the activity of the local chain. At times, the local network may be busy along with the maximum capabilities of the Web3.js library. Therefore, if there is an error, the user *must* type their desired message again. 


