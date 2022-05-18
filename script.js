const { listenerCount } = require('process');
const Web3 = require('web3')
var web3 = new Web3(Web3.givenProvider || 'HTTP://0.0.0.0:7545');
var prompt = require('prompt-sync')();

let user_account = undefined // supplier to sign transaction
let messages = {}  // {signature: message}
let genres = []

async function accounts () {
    try {
        const accounts_lst = await web3.eth.getAccounts()
        return accounts_lst
    } catch (err) {
        console.log(err)
    }
}


async function running () {
    let lst_of_accounts = await accounts()
    let supply_account = lst_of_accounts[0]
    return [supply_account, lst_of_accounts]

}

async function new_account () {
    try {
        user_password = prompt('Password: ')
        user_hash = await web3.eth.personal.newAccount(user_password)
        return user_hash

    } catch (err) {
        return undefined
    }
    

}

async function program () {
    let fetch_supplier_account = await running()
    console.log(`Supplier Function ${fetch_supplier_account[0]}`)
    
    let runtime = true
    let signin = false

    

    while (runtime) {
        
        while (signin === false) {
            const user_hash = prompt('User Hash: ')
            if (user_hash === '/create') {
                let new_user_hash = await new_account()
                if (new_user_hash === undefined) {
                    console.log("There was an error creating an account")
            } else {
                console.log('You have succesfully Signed in!')
                console.log(`Your new User Hash (save it, you might need it in the future!): ${new_user_hash}`)
                user_account = new_user_hash
                signin = true
            }
        
            } else {
                let account_found = false

                let string_idx = 0 
                for (string_idx; string_idx <= fetch_supplier_account[1].length; string_idx++) {
                    hash = fetch_supplier_account[1][string_idx]
                    // console.log(hash)
                    if (hash === user_hash) {
                        console.log('You have signed in successfully')
                        user_account = user_hash
                        account_found = true
                        signin = true
                        break;
                    } else {
                        continue;
                    }
                }
                
                if (account_found === false) {
                    console.log('There was an error creating your account ')
                } else {
                    break;
                }
            
                
            }
        
        
    } 

        
        // fetch_all_messages
        await ecRecover()
        const user_prompt = prompt('Message: ')
    
        if ('[' in user_prompt && ']' in user_prompt) {
            await sign_transaction(user_prompt)
        } else if ('[' in user_prompt === false || ']' in user_prompt === false) {
            console.log(`You have typed your message incorrectly. Message: ${user_prompt} did not send`)
        } else {
            await sign_transaction(user_prompt)
        }


        

    
    }
    

}

async function ecRecover () {
    let signatures = Object.keys(messages)
    let messages_lst = Object.values(messages)
    let common_idx = 0
    
    if (signatures.length !== 0) {
        console.log('----------------------------')
        try {
            message = messages_lst[common_idx]
            message_lst = message.split(' [')
            message = message_lst[0]
            let message_genre = undefined
            try {
                message_genre = message_lst[1]
            if (message_lst[1] === undefined || message_lst[1] === '' || messages_lst[1] === ' ' || messages_lst === null) {
                message_lst = undefined
            }
            } catch (err) {
                message_genre = undefined
            }
            
            
            signature = signatures[common_idx]
            resulting_acc = await web3.eth.accounts.recover(message,  signature)
    
            console.log(`User: ${resulting_acc}: `)
            console.log(`${message}`)
            if (message_genre === undefined) {
                message_genre = 'None'
            }
            console.log(`Genre: ${message_genre}`)
            console.log(`Signing Hash: ${signature}`)
            common_idx++
            console.log('\n')
        } catch (err) {
            console.log(err)
        }
    } else {
        console.log('There are no messages currently on the platform')
    }



}


async function sign_transaction(user_message) {  // message ['genre']
    let legit_string = user_message.split(' [')
    legit_string_message = legit_string[0]
    let genre = legit_string[1]
    lowercase_genre = genre.toLowerCase();
    if (lowercase_genre in genres) {
        console.log('Genre is already made, so your message will be placed in an existing genre')
    } else {
        legit_string[1] = lowercase_genre
    }


    try {

        let signed_hash = await web3.eth.sign(
            legit_string_message,
            user_account,
            
        )

        messages[signed_hash] = user_message
        console.log('Message sent successfully')
        console.log(messages)
        console.log('\n')
        
    } catch (err) {
        console.log('There was an error sending the message')
        console.log('Network is busy')

    }
    

    
    
}
 program()