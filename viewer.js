import React, { useState } from 'react';
import { PlugWallet } from 'plug-wallet-sdk-react';

const App = () => {
  const [nfts, setNfts] = useState([]);

  const connectWallet = async () => {
    const wallet = new PlugWallet();
    await wallet.connect();
    setNfts(await wallet.getNfts());
  };

  return (
    <div>
      <button onClick={connectWallet}>Connect Wallet</button>
      <ul>
        {nfts.map((nft, i) => (
          <li key={i}>{nft.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
