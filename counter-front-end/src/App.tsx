import "./App.css";
import { TonConnectButton } from "@tonconnect/ui-react";
import { useMainContract } from "./hooks/useMainContract";
import { useTonConnect } from "./hooks/useTonConnect";


function App() {
    const { sendIncrement, address, contract_balance, value } = useMainContract(); // destructure the returned values
    const { connected } = useTonConnect();
  
  return (
    <div>
      <div>
        <TonConnectButton />
      </div>
      <div>
        <div className='Card'>
          <b>Our contract Address</b>
          <div className='Hint'>{address?.slice(0, 30) + "..."}</div> {/* Updated variable */}
          <b>Our contract Balance</b>
          <div className='Hint'>{contract_balance}</div> {/* Updated variable */}
        </div>

        <div className='Card'>
          <b>Counter Value</b>
          <div>{value ?? "Loading..."}</div> {/* Updated variable */}

          {connected && (
              <a
                onClick={() => {
                  sendIncrement();
                }}
              >
                Increment
              </a>
            )}
          
        </div>
      </div>
    </div>
  );
}

export default App;
