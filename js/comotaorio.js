var arraymedicoes = [];
var arrayUF = [ {codigo: '43', sigla: 'SC'}
//               ,{codigo: '42', sigla: 'RS'}
              ];
var arrayLocal = [ {uf: '43', codigo: '4216305', nome: 'São João Batista'}
//                  ,{uf: '43', codigo: '4202404', nome: 'Blumenau'}
//                  ,{uf: '42', codigo: '4322608', nome: 'Venâncio Aires'}
                 ]
var arrayDataHora = [ {valor: '24h',        descricao: 'Últimas 24 horas'}
//                     ,{valor: '07/10/2023', descricao: '07/10/2023'}
                    ]

var arrayIntervalo = [ {valor: '60',  descricao: '1 hora'}
//                      ,{valor: '15',  descricao: '15 min'}
//                      ,{valor: '30',  descricao: '30 min'}
//                      ,{valor: '120', descricao: '2 horas'}
                     ]


function inverterOdemTabela()
{
   arraymedicoes = arraymedicoes.reverse();
} // inverterOdemTabela

function getOrdemTabela()
{
   return ordemTabela;
} // getOrdemTabela

function limparTabela()
{
   var tabela = document.getElementById('corpoTabela');
   var indexadorLinha = parseInt(0);

   while (tabela.childNodes.length > 1) // corpoTabela tem 1 element-filho. Só não sei qual
   {
      //tabela.removeChild(getElementById('Linha' + indexadorLinha));
      var linhaTabelaRemover = document.getElementById('Linha' + indexadorLinha);
      linhaTabelaRemover.remove();
      var tabela = document.getElementById('corpoTabela');
      indexadorLinha++;
   }
} // limparTabela

function carregarListaUF()
{
   var listaUF = document.getElementById('UF');
   var itemUF = document.createElement('option');

   itemUF.value = '';
   itemUF.text = 'Selecione Estado';
   itemUF.disabled = true;
   listaUF.add(itemUF, listaUF.options[0]);
   
   for (indice = 0; indice < arrayUF.length; indice++)
   {
      var itemUF = document.createElement('option');
      itemUF.value = arrayUF[indice].codigo;
      itemUF.text = arrayUF[indice].sigla;
      listaUF.add(itemUF, listaUF.options[indice + 1]);
   }
   listaUF.selectedIndex = 1;
} // carregarListaUF

function carregarListaLocal(parametroUF)
{
   var listaLocal = document.getElementById('Local');
   while (listaLocal.length > 0)
   {
      listaLocal.remove(0);
   }

   var itemLocal = document.createElement('option');
   itemLocal.value = '';
   itemLocal.text = 'Selecione Local';
   itemLocal.disabled = true;
   listaLocal.add(itemLocal, listaLocal.options[0]);
   
   var indexadorListaLocal = parseInt(1);
   for (indexador = 0; indexador < arrayLocal.length; indexador++)
   {
      if (arrayLocal[indexador].uf == parametroUF)
      {
         var itemLocal = document.createElement('option');
         itemLocal.value = arrayLocal[indexador].codigo;
         itemLocal.text = arrayLocal[indexador].nome;
         listaLocal.add(itemLocal, listaLocal.options[indexadorListaLocal]);
         indexadorListaLocal++
      }
   }
   listaLocal.selectedIndex = 1;
} // carregarListaLocal

function carregarListaDataHora(parametroLocal)
{
   var listaDataHora = document.getElementById('DataHora');
   while (listaDataHora.length > 0)
   {
      listaDataHora.remove(0);
   }

   var indexadorListaDataHora = parseInt(1);
   arrayDataHora.forEach((datahora) =>
   {
      if (true)
      {
         var itemDataHora = document.createElement('option');
         itemDataHora.value = datahora.valor;
         itemDataHora.text = datahora.descricao;
         listaDataHora.add(itemDataHora, listaDataHora.options[indexadorListaDataHora]);
         indexadorListaDataHora++
      }
   });

   listaDataHora.selectedIndex = 0;
} // carregarListaDataHora

function carregarListaIntervalo(parametroLocal)
{
   var listaIntervalo = document.getElementById('Intervalo');
   while (listaIntervalo.length > 0)
   {
      listaIntervalo.remove(0);
   }

   var indexadorListaIntervalo = parseInt(1);
   arrayIntervalo.forEach((intervalo) =>
   {
      if (true)
      {
         var itemIntervalo = document.createElement('option');
         itemIntervalo.value = intervalo.valor;
         itemIntervalo.text = intervalo.descricao;
         listaIntervalo.add(itemIntervalo, listaIntervalo.options[indexadorListaIntervalo]);
         indexadorListaIntervalo++
      }
   });

   listaIntervalo.selectedIndex = 0;
} // carregarListaIntervalo

function carregarTabela(parametroCodigoLocal, parametroDataHora, parametroIntervalo)
{
   if (	document.getElementById('UF').value    == null
      ||	document.getElementById('Local').value == null
      )
   {
      alert('return false');
      return false;
   }

   if (parametroCodigoLocal == 4216305)
   {
      var medicoesJSON = 
      '[{"datahora":"01/01/1900 08:00"' +
      ' ,"nivel":"4.5"'+
      ' ,"variacao": ""'+
      ' ,"variacaoAcumulada": ""'+
      ' },'+
      ' {"datahora":"01/01/1900 09:00"'+
      ' ,"nivel":"4.55"'+
      ' ,"variacao": ""'+
      ' ,"variacaoAcumulada": ""'+
      ' },'+
      ' {"datahora":"01/01/1900 10:00"'+
      ' ,"nivel":"4.72"'+
      ' ,"variacao": ""'+
      ' ,"variacaoAcumulada": ""'+
      ' },'+
      ' {"datahora":"01/01/1900 11:00"'+
      ' ,"nivel":"5.27"'+
      ' ,"variacao": ""'+
      ' ,"variacaoAcumulada": ""'+
      ' },'+
      ' {"datahora":"01/01/1900 12:00"'+
      ' ,"nivel":"6.34"'+
      ' ,"variacao": ""'+
      ' ,"variacaoAcumulada": ""'+
      ' },'+
      ' {"datahora":"01/01/1900 13:00"'+
      ' ,"nivel":"7"'+
      ' ,"variacao": ""'+
      ' ,"variacaoAcumulada": ""'+
      ' },'+
      ' {"datahora":"01/01/1900 14:00"'+
      ' ,"nivel":"7.00"'+
      ' ,"variacao": ""'+
      ' ,"variacaoAcumulada": ""'+
      ' },'+
      ' {"datahora":"01/01/1900 15:00"'+
      ' ,"nivel":"6.99"'+
      ' ,"variacao": ""'+
      ' ,"variacaoAcumulada": ""'+
      ' },'+
      ' {"datahora":"01/01/1900 16:00"'+
      ' ,"nivel":"6.45"'+
      ' ,"variacao": ""'+
      ' ,"variacaoAcumulada": ""'+
      ' },'+
      ' {"datahora":"01/01/1900 17:00"'+
      ' ,"nivel":"5.12"'+
      ' ,"variacao": ""'+
      ' ,"variacaoAcumulada": ""'+
      ' }   ]';
   } else if (parametroCodigoLocal == 4202404)
   {
      var medicoesJSON = 
      '[{"datahora":"01/01/1999 08:00"' +
      ' ,"nivel":"4.5"'+
      ' ,"variacao": ""'+
      ' ,"variacaoAcumulada": ""'+
      ' },'+
      ' {"datahora":"01/01/1999 09:00"'+
      ' ,"nivel":"4.55"'+
      ' ,"variacao": ""'+
      ' ,"variacaoAcumulada": ""'+
      ' },'+
      ' {"datahora":"01/01/1999 10:00"'+
      ' ,"nivel":"4.72"'+
      ' ,"variacao": ""'+
      ' ,"variacaoAcumulada": ""'+
      ' },'+
      ' {"datahora":"01/01/1999 11:00"'+
      ' ,"nivel":"5.27"'+
      ' ,"variacao": ""'+
      ' ,"variacaoAcumulada": ""'+
      ' },'+
      ' {"datahora":"01/01/1999 12:00"'+
      ' ,"nivel":"6.34"'+
      ' ,"variacao": ""'+
      ' ,"variacaoAcumulada": ""'+
      ' },'+
      ' {"datahora":"01/01/1999 13:00"'+
      ' ,"nivel":"7"'+
      ' ,"variacao": ""'+
      ' ,"variacaoAcumulada": ""'+
      ' },'+
      ' {"datahora":"01/01/1999 14:00"'+
      ' ,"nivel":"7.00"'+
      ' ,"variacao": ""'+
      ' ,"variacaoAcumulada": ""'+
      ' },'+
      ' {"datahora":"01/01/1999 15:00"'+
      ' ,"nivel":"6.99"'+
      ' ,"variacao": ""'+
      ' ,"variacaoAcumulada": ""'+
      ' },'+
      ' {"datahora":"01/01/1999 16:00"'+
      ' ,"nivel":"6.45"'+
      ' ,"variacao": ""'+
      ' ,"variacaoAcumulada": ""'+
      ' },'+
      ' {"datahora":"01/01/1999 17:00"'+
      ' ,"nivel":"5.12"'+
      ' ,"variacao": ""'+
      ' ,"variacaoAcumulada": ""'+
      ' }   ]';
   } else
   {
      var medicoesJSON = 
      '[{"datahora":"01/01/2099 08:00"' +
      ' ,"nivel":"4.5"'+
      ' ,"variacao": ""'+
      ' ,"variacaoAcumulada": ""'+
      ' },'+
      ' {"datahora":"01/01/2099 09:00"'+
      ' ,"nivel":"4.55"'+
      ' ,"variacao": ""'+
      ' ,"variacaoAcumulada": ""'+
      ' },'+
      ' {"datahora":"01/01/2099 10:00"'+
      ' ,"nivel":"4.72"'+
      ' ,"variacao": ""'+
      ' ,"variacaoAcumulada": ""'+
      ' },'+
      ' {"datahora":"01/01/2099 11:00"'+
      ' ,"nivel":"5.27"'+
      ' ,"variacao": ""'+
      ' ,"variacaoAcumulada": ""'+
      ' },'+
      ' {"datahora":"01/01/2099 12:00"'+
      ' ,"nivel":"6.34"'+
      ' ,"variacao": ""'+
      ' ,"variacaoAcumulada": ""'+
      ' },'+
      ' {"datahora":"01/01/2099 13:00"'+
      ' ,"nivel":"7"'+
      ' ,"variacao": ""'+
      ' ,"variacaoAcumulada": ""'+
      ' },'+
      ' {"datahora":"01/01/2099 14:00"'+
      ' ,"nivel":"7.00"'+
      ' ,"variacao": ""'+
      ' ,"variacaoAcumulada": ""'+
      ' },'+
      ' {"datahora":"01/01/2099 15:00"'+
      ' ,"nivel":"6.99"'+
      ' ,"variacao": ""'+
      ' ,"variacaoAcumulada": ""'+
      ' },'+
      ' {"datahora":"01/01/2099 16:00"'+
      ' ,"nivel":"6.45"'+
      ' ,"variacao": ""'+
      ' ,"variacaoAcumulada": ""'+
      ' },'+
      ' {"datahora":"01/01/2099 17:00"'+
      ' ,"nivel":"5.12"'+
      ' ,"variacao": ""'+
      ' ,"variacaoAcumulada": ""'+
      ' }   ]';
   }

   arraymedicoes = JSON.parse(medicoesJSON);
   
   carregarListaDataHora(parametroCodigoLocal);
   carregarListaIntervalo(parametroCodigoLocal);

   var nivelAnterior = parseFloat;
   var variacaoAnterior = parseFloat;
   var variacaoCalculadaMetro = parseFloat; 
   var variacaoAcumuladaMetro = parseFloat(0);
   
   arraymedicoes.forEach((medicao, indexadorLinha) =>
   {
      if (indexadorLinha == 0)
      {
         nivelAnterior = medicao.nivel;
      }
      variacaoCalculadaMetro = Math.round(((medicao.nivel - nivelAnterior) * 100).toFixed(2)) / 100;

      if (  ( variacaoCalculadaMetro >= 0 && variacaoAnterior < 0)
         || ( variacaoCalculadaMetro <= 0 && variacaoAnterior > 0)
         )
      {
         variacaoAcumuladaMetro = 0;
      }

      arraymedicoes[indexadorLinha].variacao = variacaoCalculadaMetro;
      
      if (indexadorLinha > 0)
      {
         variacaoAcumuladaMetro = variacaoAcumuladaMetro + (variacaoCalculadaMetro);
         arraymedicoes[indexadorLinha].variacaoAcumulada = variacaoAcumuladaMetro;
      }


      nivelAnterior = parseFloat(medicao.nivel);
      variacaoAnterior = parseFloat(variacaoAcumuladaMetro) ?? 0;
   });

   inverterOdemTabela();
   atualizarTabela();
} // carregarTabela

function atualizarTabela()
{
   limparTabela();
   var tabela = document.getElementById('corpoTabela');

   const duasCasasDecimais = { style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 3};
   const duascasasInteiras = { style: 'decimal', minimumIntegerDigits: 2};

   arraymedicoes.forEach((medicao, indexadorLinha) =>
   {
   var linhaTabela = document.createElement('tr');
   var datahora = document.createElement('td');
   var nivel = document.createElement('td');
   var direcao = document.createElement('td');
   var variacao = document.createElement('td');
   var variacaoAcumulada = document.createElement('td');

   linhaTabela.setAttribute('id', 'Linha' + indexadorLinha);
   if (indexadorLinha % 2 == 0)
   {
      linhaTabela.setAttribute('class', 'tabelaLinhaPar');
   } else
   {
      linhaTabela.setAttribute('class', 'tabelaLinhaImpar');
   }

   datahora.innerHTML = medicao.datahora;
   nivel.innerHTML = new Intl.NumberFormat('pt-br', duasCasasDecimais).format(medicao.nivel);

   if (medicao.variacao > 0)
   {
      direcao.innerHTML = '<img src="img/seta_cima.png"  width="20">';
   } else if (medicao.variacao < 0)
   {
      direcao.innerHTML = '<img src="img/seta_baixo.png"  width="20">';
   } else 
   {
      direcao.innerHTML = '';
   }

   var variacaoCalculadaMetroAbsoluto = Math.abs(medicao.variacao);

   if (variacaoCalculadaMetroAbsoluto == 0)
   {
   variacao.innerHTML = '';
   }
   else if (variacaoCalculadaMetroAbsoluto < 1)
   {
      variacao.innerHTML = (variacaoCalculadaMetroAbsoluto * 100) + ' cm';
   } else
   {
      variacao.innerHTML = new Intl.NumberFormat('pt-br', duasCasasDecimais).format(variacaoCalculadaMetroAbsoluto) + ' m';
   }

   var variacaoAcumuladaMetroAbsoluto = Math.abs(medicao.variacaoAcumulada);

   if (variacaoAcumuladaMetroAbsoluto == 0)
   {
      variacaoAcumulada.innerHTML = '';
      }
   else if (variacaoAcumuladaMetroAbsoluto < 1)
   {
      variacaoAcumulada.innerHTML = (variacaoAcumuladaMetroAbsoluto * 100) + ' cm';
   } else
   {
      variacaoAcumulada.innerHTML = new Intl.NumberFormat('pt-br', duasCasasDecimais).format(variacaoAcumuladaMetroAbsoluto) + ' m';
   }

   linhaTabela.appendChild(datahora);
   linhaTabela.appendChild(nivel);
   linhaTabela.appendChild(direcao);
   linhaTabela.appendChild(variacao);
   linhaTabela.appendChild(variacaoAcumulada);
   tabela.append(linhaTabela);
   });
} // atualizarTabela
