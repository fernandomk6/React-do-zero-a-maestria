const UserDetails = ({ pessoas }) => {
  return (
    <div>
      <h2>Pessoas</h2>
      {pessoas.map((pessoa) => {
        return(
          <ul key={pessoa.id}>
            <li >codigo: {pessoa.id}</li>
            <li >nome: {pessoa.nome}</li>
            <li >idade: {pessoa.idade}</li>
            <li >profissão: {pessoa.proficao}</li>
            {pessoa.idade >= 18 ? 
              <li>Pode tirar a carteira</li>
             : 
              <li>Não pode tirar carteira</li>
            }
            <hr />
          </ul>
        );
      })}
    </div>
  )
}

export default UserDetails