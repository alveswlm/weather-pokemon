# weather-pokemon
Aplicação em Node.js para consulta de pokémon através da temperatura da cidade. Baseada em respostas no console.

Documentação

Passo a passo:

1.	Para executar a aplicação, no seu terminal vá ao diretório em que a aplicação está e execute o comando “node index.js”.
2.	Será solicitado que digite o nome da cidade desejada: “Digite o nome da cidade: ”
3.	Após digitar e teclar “Enter”, serão retornadas no console as informações abaixo:

“Temperatura: x ºC
Clima: y
Pokémon: z”

Tecnologias:

readline-sync - Para capturar o que foi digitado pelo usuário no console.
axios – Para fazer as requisições nas API’s.
express – Utilizado para definir as rotas da aplicação (não utilizado)

Funções:

buscar() – Nesta função é capturado o nome da cidade digitada pelo usuário e feita a consulta na API Open Weather;

getNomeCidade() – Função utilizada para capturar o nome da cidade digitada pelo usuário;

recuperaDadosCidade(cidade, appId) – Faz a requisição na API Open Weather e chama a função tipoPokemon(temperatura, clima).

tipoPokemon(temperatura, clima) – Recebe a temperatura e o clima retornados na requisição acima e classifica o tipo de Pokémon através das faixas de temperatura solicitadas.

pokemonPorTemperatura(tipoPokemon, temperatura, clima) – Consulta a API PokeAPI passando o tipo de Pokémon como parâmetro na URL. Segue exemplo de retorno:

“Temperatura: 17 ºC
Clima: Clear
Pokémon: sandslash”

