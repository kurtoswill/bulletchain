'use client'

import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { Button } from '@/components/ui/button'

export function ConnectButton() {
    const { address, isConnected } = useAccount()
    const { connect, connectors } = useConnect()
    const { disconnect } = useDisconnect()

    if (isConnected)
        return (
            <div className="flex gap-2 items-center">
                <span>{address}</span>
                <Button variant="destructive" onClick={() => disconnect()}>
                    Disconnect
                </Button>
            </div>
        )

    return (
        <div className="flex gap-2">
            {connectors.map((connector) => (
                <Button key={connector.id} onClick={() => connect({ connector })}>
                    Connect {connector.name}
                </Button>
            ))}
        </div>
    )
}
