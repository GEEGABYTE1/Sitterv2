from brownie import accounts, config, TokenERC20

initial_supply = 100 * 10 ** 18
token_name = 'Flipper'
token_symbol = 'FLP'


def main():
    account = accounts[0]
    erc20 = TokenERC20.deploy (initial_supply, token_name, token_symbol, {'from': account})