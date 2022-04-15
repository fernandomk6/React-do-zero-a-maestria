const TemplateExpressions = () => {

  const data = {
    name: "fernando",
    age: 23,
    job: "programmer"
  };

  return (
    <div>
      <h2 className="title">Template Expressions</h2>
      <p className="text">
        Seu nome é {data.name}, tem {data.age} anos e
        trabalha como {data.job}.
      </p>
    </div>
  );
};

export default TemplateExpressions;