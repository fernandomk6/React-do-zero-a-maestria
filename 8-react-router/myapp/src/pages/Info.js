import {useParams} from "react-router-dom";
const Info = () => {
  const {id} = useParams();
  return (
    <div>
      <h4>Mais informações sobre o produto {id}</h4>
    </div>
  )
}

export default Info