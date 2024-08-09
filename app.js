document.addEventListener('DOMContentLoaded', () => {
    const tonConnect = new TonConnectUI({
        buttonRootId: 'ton-connect-button',
        manifestUrl: 'https://gist.githubusercontent.com/bilalalibindal/f2ee64abaac175576c26e93977ef307b/raw/5387ba4c0b6115b1f41ccc710abffa60846a420f/gistfile1.txt',
    });

    tonConnect.onStatusChange(async (status) => {
        if (status === 'connected') {
            console.log('Connected to wallet:', tonConnect.wallet);
        } else if (status === 'disconnected') {
            console.log('Wallet disconnected');
        }
    });
});
