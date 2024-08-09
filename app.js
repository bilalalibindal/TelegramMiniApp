document.addEventListener('DOMContentLoaded', async () => {
    const TonWeb = window.TonWeb;
    const tonweb = new TonWeb();
    const myContractAddress = "EQD4eA1SdQOivBbTczzElFmfiKu4SXNL4S29TReQwzzr_70k";

    const tonConnect = new TonConnectUI({
        buttonRootId: 'ton-connect-button',
        manifestUrl: 'https://gist.githubusercontent.com/bilalalibindal/f2ee64abaac175576c26e93977ef307b/raw/5387ba4c0b6115b1f41ccc710abffa60846a420f/gistfile1.txt',
    });

    tonConnect.onStatusChange(async (status) => {
        if (status === 'connected') {
            const wallet = tonConnect.wallet;

            // Akıllı kontratın durumunu okuma
            const myContract = new tonweb.Contract({ address: myContractAddress });
            const contractState = await myContract.getState();
            console.log('Contract State:', contractState);

            // Akıllı kontrata işlem gönderme
            const myMethodCall = await myContract.methods.myMethod({}).send(wallet);
            console.log('Method Call Result:', myMethodCall);
        } else if (status === 'disconnected') {
            console.log('Wallet disconnected');
        }
    });
});
