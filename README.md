# kucoin bot
kucoin trade bot based on node

version 0.1 features

analyze market trends, determine high/low valued buys
***

currently done below
-----
simple buy/sell bot based on a very simple calculation

sells at 24h based highs, buys at 24h based lows

does not buy if some amount of a currency is already owned

to do
-----
add better price determinations based on the kucoin api
e.g. lower interval price fluctuation calculations

add orderbook evaluations on sell/buy walls to beat whales selling off</br>
this helpfully prevents stalling on the ordering
outbid for buys / underbid for sales by .0001 sats on existing orderbooks once an acceptable price is reached, to sell off more quickly

implement the buy/sell api to start experimentally trading small amounts once the above is complete

experimental features to do
-----
add market swaps of coins between btc/eth/neo based on best price
