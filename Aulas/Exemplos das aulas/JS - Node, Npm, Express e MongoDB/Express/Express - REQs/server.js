// A propriedade req.params é um objeto que contém propriedades mapeadas para os “parâmetros” da rota nomeada. Por exemplo, se você tiver a rota /student/:id, então a propriedade “id” estará disponível como req.params.id. O padrão deste objeto é {}.

// A propriedade req.query permite acessar os parâmetros de consulta a partir da URL de uma solicitação HTTP recebida. Os parâmetros de consulta são pares de valores-chave incluídos no URL após o “?” símbolo, e eles são separados por símbolos “&”.

// A propriedade req.body contém pares de valores-chave de dados enviados no corpo da solicitação. Por padrão, ele é indefinido e é preenchido quando você usa um middleware chamado body-parsing, como express.urlencoded() ou express.json().

const express = require('express')
const app = express()

app.use(
    express.urlencoded(
        { 
            extended: true
        }
    )
)

app.get('/', (req, res) => {
    res.send(`
            <form action="/" method="POST">
                Nome: <input type="text" name="nome">
                <button>Enviar</button>
            </form>
        `)
})

app.get('/testes/:idUsuarios?/:parametro?', (req, res) => {
    console.log(req.params)
    console.log(req.query)
    res.send(req.query.facebookprofile)
})

app.post('/', (req, res) => {
    console.log(req.body)
    res.send(`O que você me enviou foi: ${req.body.nome}`)
})

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('Servidor iniciado!')
})