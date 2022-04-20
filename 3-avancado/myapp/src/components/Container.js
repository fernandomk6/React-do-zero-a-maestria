const Container = ({ msg, children }) => {
  return (
    <div>
      <h2>Esté é o título do container</h2>
      <p>{msg}</p>
      { children[1] }
      { children[0] }
      
    </div>
  );
};

export default Container;