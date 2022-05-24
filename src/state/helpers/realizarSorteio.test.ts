import { realizarSorteio } from "./realizarSorteio"

describe('dado um sorteio de amigo secreto', () => {

  test('cada participante nõ sorteie o próprio nome', () => {

    const participantes = [
      'Maria',
      'João',
      'José',
      'Cida',
      'Francisca',
      'Chico'
    ]

    const sorteio = realizarSorteio(participantes)
    participantes.forEach(participante => {
      const amigoSecreto = sorteio.get(participante)
      expect(amigoSecreto).not.toEqual(participante)
    })
  })

})