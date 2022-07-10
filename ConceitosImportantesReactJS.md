# O que é um componente React.js?

Isto é um componente:

1. Uma função
2. Primeira letra maiúscula
3. A função devolve/retorna (return) um HTML
4. Um componente por arquivo.

Esta é a estrutura básica de um componente!

# Propriedades do React.js

Funcionam de forma semelhante a atributos do HTML. Informações variáveis que determinam o comportamento de um elemento.

# Imutabilidade

Uma variável nunca poderá ter seu valor alterado. Ela sempre irá receber um novo valor.

## SEM imutabilidade

```js
let users = ['Diego', 'Maikão', 'DaniLeão']
users.push('PedroNogueira')
```

Aqui estou alterando diretamente o valor da variável "users"

## COM imutabilidade

```js
let pessoas = ['Sarah', 'George', 'Ayrton']
let novoPessoas = [...pessoas, 'Pedro']
```

Estamos criando um novo espaço de memória contendo a nove informação
