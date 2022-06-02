## entendendo o this
- no context global, fora de qualquer função, o this referenciara
o objeto global. em navegadores, o objeto window é o 
objeto global
- dentro de uma função, o this, depende de como a função
é chamada

## arrow function
- o this é definido lexicamente, ou seja o seu valor é definido
pela contexto que esta inserido. contexto lexico é a possibiliadade
de um escopo de bloco buscar uma referencia no escopo acima.
- em codigo global, o this em arrow function assume o objeto global window
- o this nas funções traducionais age de forma dinamica, ja em
arrow function ele respeita o local onde está inserido