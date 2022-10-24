import { ConnectButton } from "web3uikit"

export default function Header() {
    return (
        <div>
            Decentralize Lottery
            <ConnectButton moralisAuth={false} />
        </div>
    )
}
