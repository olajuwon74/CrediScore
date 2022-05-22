import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [connected, setConnected] = useState(false);
  const [provider, setProvider] = useState();
  const [library, setLibrary] = useState();
  const [account, setAccount] = useState();
  const [network, setNetwork] = useState();
  const [signer, setSigner] = useState();
  const [amountReceived, setAmountReceived] = useState();
  const [ipfsCid, setIpfsCid] = useState();

  let sharedState = {
    connected,
    setConnected,
    provider,
    setProvider,
    library,
    setLibrary,
    account,
    setAccount,
    network,
    setNetwork,
    signer,
    setSigner,
    amountReceived,
    setAmountReceived,
    ipfsCid,
    setIpfsCid,
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
