import './App.css';
import TabsGroup from './components/TabsGroup';

const tabs = [
	{
		name: 'Btc',
		text: 'Bitcoin (₿) is a decentralized digital currency, without a central bank or single administrator, that can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries.[7] Transactions are verified by network nodes through cryptography and recorded in a public distributed ledger called a blockchain. The cryptocurrency was invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto.[8] The currency began use in 2009[9] when its implementation was released as open-source software.',
		deletable: true,
	},
	{
		name: 'Eth',
		text: 'Ethereum is a decentralized, open-source blockchain with smart contract functionality. Ether (ETH or Ξ) is the native cryptocurrency of the platform; after Bitcoin, it is the largest cryptocurrency by market capitalization.[1][better source needed] Ethereum is the most actively used blockchain.',
		deletable: true,
	},
	{
		name: 'Bnb',
		text: 'Binance is a cryptocurrency exchange that provides a platform for trading various cryptocurrencies. It was founded in 2017 and is domiciled in the Cayman Islands. Binance is currently the largest exchange in the world in terms of daily trading volume.',
		deletable: true,
	},
	{
		name: 'Usdt',
		text: 'Tether (often called by its symbol USDT) is a cryptocurrency with tokens issued by Tether Limited[1], which in turn is controlled by the owners of Bitfinex.[2][3] Tether is called a stablecoin because it was originally designed to always be worth $1.00, maintaining $1.00 in reserves for each tether issued.',
		deletable: false,
	},
];

function App() {
	return (
		<div className='App'>
			<header className='App-header'></header>
			<TabsGroup tabs={tabs} />
			<a href='#Bnb'>BNB link</a>
		</div>
	);
}

export default App;
