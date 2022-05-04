# Criando o provider
- O Provider vai definir onde o contexto é utilizado
- Vamos criar um espécie de componente com a prop children
- E este Provider deve encapsular os demais componentes em que precisam consultar ou alterar o valor
- Geralmente ele fica em App.js ou em index.js
- Agora poderemos compartilhar o valor do contexto em todos os componentes