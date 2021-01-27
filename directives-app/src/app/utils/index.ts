enum Cities {
  SP = 'São Paulo',
  RS = 'Porto Alegre',
  RJ = 'Rio de Janeiro',
  PR = 'Curitiba'
}
enum Peoples {
  Ana = 'Ana',
  John = 'John',
  Mark = 'Mark',
  Maria = 'Maria'
}

const cities = [
  { name: Cities.SP, state: 'SP' },
  { name: Cities.RS, state: 'RS' },
  { name: Cities.RJ, state: 'RJ' },
  { name: Cities.PR, state: 'PR'}
]

export {
  cities, Peoples, Cities
}
