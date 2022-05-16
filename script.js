const { listenerCount } = require('process');
const Web3 = require('web3')
var web3 = new Web3(Web3.givenProvider || 'HTTP://127.0.0.1:7545');
var prompt = require('prompt-sync')();

let user_account = undefined // supplier to sign transaction


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
        const user_prompt = prompt('Message: ')
        sign_transaction(user_prompt)

    
    }
    

}




function sign_transaction(user_message) {
    
    
}

program()