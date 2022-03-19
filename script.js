function API() {
    setInterval(() => {
        let horaAtual = new Date();
        let horas = horaAtual.getHours();
        let minutos = horaAtual.getMinutes();
        let seconds = horaAtual.getSeconds();
        let horaCompleta = `${horas}:${minutos}:${seconds}`;
        document.querySelector(
            '.hora',
        ).innerText = `Hora Atual: ${horaCompleta}`;
    }, 1000);

    fetch('https://www.blockchain.com/ticker')
        .then((btc) => btc.json())
        .then((btc) => {
            let valorAtualizado = btc.BRL.last;
            valorAtualizado = valorAtualizado.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
            });

            document.querySelector(
                '.btcBRL',
            ).innerText += `1BTC: ${valorAtualizado}`;
            let horaAtual = new Date();
            let horas = horaAtual.getHours();
            let minutos = horaAtual.getMinutes();
            let seconds = horaAtual.getSeconds();
            let horaCompleta = `${horas}:${minutos}:${seconds}`;
            document.querySelector(
                '.hora',
            ).innerText = `Hora Atual: ${horaCompleta}`;
        });

    document.querySelector('button').addEventListener('click', () => {
        fetch('https://www.blockchain.com/ticker')
            .then((btc) => btc.json())
            .then((btc) => {
                let valorAtualizado = btc.BRL.last;
                valorAtualizado = valorAtualizado.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                });
                document.querySelector(
                    '.btcBRL',
                ).innerText = `1BTC: ${valorAtualizado}`;
            });
    });

    setInterval(() => {
        fetch('https://www.blockchain.com/ticker')
            .then((btc) => btc.json())
            .then((btc) => {
                let valorAtualizado = btc.BRL.last;
                valorAtualizado = valorAtualizado.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                });

                document.querySelector(
                    '.btcBRL',
                ).innerText = `1BTC: ${valorAtualizado}`;
            });
    }, 30000);
}
API();
