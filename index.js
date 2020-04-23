const readline = require('readline-sync');
const axios = require('axios');

function buscar() {
    const cidade = getNomeCidade();
    const appId = "25565aac56429967c31948a67d135a57";
    
    recuperaDadosCidade(cidade, appId);
};

async function recuperaDadosCidade(cidade, appId){
    await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${appId}&units=metric`)
                          .then(function (response) {
                            tipoPokemon(response.data.main.temp, response.data.weather[0].main);
                           });
}

function getNomeCidade() {
    return readline.question('Digite o nome da cidade: ');
}

buscar();

function tipoPokemon(temperatura, clima){
    var tipoPokemon;
    
    if(clima == 'Rain') {
        tipoPokemon = 'eletric';
    }
    else {
        if (temperatura < 5) {
            tipoPokemon = 'ice';
        } else if (temperatura >= 5 && temperatura < 10) {
            tipoPokemon = 'water';
        }
        else if (temperatura >= 12 && temperatura < 15) {
            tipoPokemon = 'grass';
        }
        else if (temperatura >= 15 && temperatura < 21) {
            tipoPokemon = 'ground';
        }
        else if (temperatura >= 23 && temperatura < 27) {
            tipoPokemon = 'bug';
        }
        else if (temperatura >= 27 && temperatura == 33) {
            tipoPokemon = 'pedra';
        }
        else if (temperatura > 33) {
            tipoPokemon = 'fire';
        }
        else {
            tipoPokemon = 'normal';
        }
    }

    pokemonPorTemperatura(tipoPokemon, temperatura, clima);
}

function pokemonPorTemperatura(tipoPokemon, temperatura, clima){
    axios.get(`https://pokeapi.co/api/v2/type/${tipoPokemon}`)
         .then(function(retorno){
            console.log(`Temperatura: ${temperatura} ºC
Clima: ${clima}
Pokemon: ${retorno.data.pokemon[1].pokemon.name}`);
        }).catch(function(error){
            if(error){
                console.log(error);
            }
        });
}