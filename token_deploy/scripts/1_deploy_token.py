from brownie import accounts, config, TokenERC20

initial_supply = 100 * 10 ** 18
token_name = 'Flipper'
token_symbol = 'flip'


def main():
    account = accounts[0]
    erc20 = TokenERC20.deploy()