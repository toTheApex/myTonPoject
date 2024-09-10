// In App.tsx
import "./App.css";
import { TonConnectButton } from "@tonconnect/ui-react";
import { useMainContract } from "./hooks/useMainContract";
import { useTonConnect } from "./hooks/useTonConnect";

function App() {
    const { sendIncrement, address, value } = useMainContract(); // Removed contract_balance
    const { connected } = useTonConnect();

    return (
      <div>
        <div>
          <TonConnectButton />
        </div>
        <div>
          <div className="Card">
            <b>Our contract Address</b>
            <div className="Hint">{address?.slice(0, 30) + "..."}</div>
            {/* Removed the contract balance section */}
          </div>

          <div className="Card">
            <b>Counter Value</b>
            <div>{value ?? "Loading..."}</div>

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
