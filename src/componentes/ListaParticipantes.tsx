import { useListaDeParticipantes } from "../state/hook/useListaDeParticipantes"

const ListaParticpantes = () => {

  const participantes: string [] = useListaDeParticipantes()
    return (
      <ul>
          {participantes.map(participante => <li key={participante}>{participante}</li>)}
      </ul>
      
    )

}

export default ListaParticpantes