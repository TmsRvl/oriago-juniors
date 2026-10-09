export const CSI_PORTAL_CHAMPIONSHIP = 'https://live.centrosportivoitaliano.it/26/Calcio-a-11/Veneto/Venezia/C36495/?j=NEU9REdEJjRGPVBOWSY0Rz1HSkhNSSY0SD1GTEtJRk0mNEk9VHY0MTByIE8mNEw9REdEJjQyPWU='
export const CSI_PORTAL_CUP = 'https://live.centrosportivoitaliano.it/26/Calcio-a-11/Veneto/Venezia/C36639/?j=NEU9REdEJjRGPVBOWSY0Rz1HSkpHTSY0SD1GTE1IRkcmNEk9VHY0MTByIE8mNEw9REdEJjQyPWU='

export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#prossima-gara', label: 'Prossima Gara' },
  { href: '#campionato', label: 'Il Campionato' },
  { href: '#rosa', label: 'Rosa' },
  { href: '#sponsor', label: 'Sponsor' },
  { href: '#contatti', label: 'Contatti' },
] as const

export const nextMatch = {
  kickoff: '2026-10-08T21:00:00+02:00',
  dateLabel: 'Giovedì 8 Ottobre',
  timeLabel: '21:00',
  round: '1ª Giornata',
  opponent: 'Borussia Mestre 2002',
  opponentShort: 'BRM',
  venue: 'Campo Parrocchiale di Lughetto',
  address: 'Piazza Conciliazione 1 - 30010 Campagna Lupia (VE)',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Campagna+Lupia+VE+Piazza+Conciliazione+1',
  home: true,
}

export const upcomingFixtures = [
  { round: '1ª Giornata', date: 'Gio 08 Ott', time:'21:00', home: 'Oriago Juniors', away: 'Borussia Mestre 2002', type: 'Coppa'},
  { round: '2ª Giornata', date: 'Lun 12 Ott', time: '20:45', home: 'Amatori Calcio Borbiago', away: 'Oriago Juniors', type: 'Campionato' },
  { round: '3ª Giornata', date: 'Lun 19 Ott', time: '21:00', home: 'Oriago Juniors', away: 'Amatori Calcio Lughetto', type: 'Campionato' },
  { round: '4ª Giornata', date: 'Lun 26 Ott', time: '21:00', home: 'Blues Team - SanBenedetto', away: 'Oriago Juniors', type: 'Campionato' },
  { round: '5ª Giornata', date: 'Ven 06 Nov', time: '21:00', home: 'Oriago Juniors', away: 'Atletico Aleardi', type: 'Coppa' },
  { round: '6ª Giornata', date: 'Lun 09 Nov', time: '21:00', home: 'Oriago Juniors', away: 'Master 3', type: 'Campionato' },
  { round: '7ª Giornata', date: 'Ven 20 Nov', time: '21:00', home: 'Oriago Juniors', away: 'Riva Futura', type: 'Campionato' },
  { round: '8ª Giornata', date: 'Lun 23 Nov', time: '21:00', home: 'Polisportiva Bissuola', away: 'Oriago Juniors', type: 'Coppa' },
  { round: '9ª Giornata', date: 'Lun 30 Nov', time: '21:00', home: 'Polisportiva Bissuola', away: 'Oriago Juniors', type: 'Campionato' },
  { round: '10ª Giornata', date: 'Lun 07 Dic', time: '21:00', home: 'Adc Martellago 2.1', away: 'Oriago Juniors', type: 'Campionato' },
]

export const games = [
  {
    round: '1ª Giornata',
    competition: "Coppa Venezia",
    home: "Oriago Juniors",
    away: "Borussia Mestre 2002",
    opponentShort: 'BRM',
    kickoff: "2026-10-08T21:00:00",
    date: 'Gio 08 Ott',
    time: '21:00',
    venue: 'Campo Parrocchiale di Lughetto',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Campagna+Lupia+VE+Piazza+Conciliazione+1',
    location: "Campo Parrocchiale di Lughetto, Piazza Conciliazione 1 - 30010 Campagna Lupia (VE)"
  },
  {
    round: '2ª Giornata',
    competition: "Campionato",
    home: "Amatori Calcio Borbiago",
    away: "Oriago Juniors",
    opponentShort: 'ACB',
    kickoff: "2026-10-12T20:45:00",
    date: 'Lun 12 Ott',
    time: '20:45',
    venue: 'Campo Parrocchiale di Lughetto',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Campagna+Lupia+VE+Piazza+Conciliazione+1',
    location: "Campo Parrocchiale di Lughetto, Piazza Conciliazione 1 - 30010 Campagna Lupia (VE)"
  },
  {
    round: '3ª Giornata',
    competition: "Campionato",
    home: "Oriago Juniors",
    away: "Amatori Calcio Lughetto",
    opponentShort: 'ACL',
    kickoff: "2026-10-19T21:00:00",
    date: 'Lun 19 Ott',
    time: '21:00',
    venue: 'Campo Parrocchiale di Lughetto',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Campagna+Lupia+VE+Piazza+Conciliazione+1',
    location: "Campo Parrocchiale di Lughetto, Piazza Conciliazione 1 - 30010 Campagna Lupia (VE)"
  },
  {
    round: '4ª Giornata',
    competition: "Campionato",
    home: "Blues Team - SanBenedetto",
    away: "Oriago Juniors",
    opponentShort: 'BTS',
    kickoff: "2026-10-26T21:00:00",
    date: 'Lun 26 Ott',
    time: '21:00',
    venue: 'Campo Comunale Campalto Laguna',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Venezia+VE+Via+Sabbadino+12',
    location: "Campo Comunale Campalto Laguna, Via Sabbadino 12 - 30173 Venezia (VE)"
  },
  {
    round: '5ª Giornata',
    competition: "Coppa Venezia",
    home: "Oriago Juniors",
    away: "Atletico Aleardi",
    opponentShort: 'ALA',
    kickoff: "2026-11-06T21:00:00",
    date: 'Ven 06 Nov',
    time: '21:00',
    venue: 'Campo Parrocchiale di Lughetto',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Campagna+Lupia+VE+Piazza+Conciliazione+1',
    location: "Campo Parrocchiale di Lughetto, Piazza Conciliazione 1 - 30010 Campagna Lupia (VE)"
  },
  {
    round: '6ª Giornata',
    competition: "Campionato",
    home: "Oriago Juniors",
    away: "Master 3",
    opponentShort: 'MAS',
    kickoff: "2026-11-09T21:00:00",
    date: 'Lun 09 Nov',
    time: '21:00',
    venue: 'Campo Parrocchiale di Lughetto',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Campagna+Lupia+VE+Piazza+Conciliazione+1',
    location: "Campo Parrocchiale di Lughetto, Piazza Conciliazione 1 - 30010 Campagna Lupia (VE)"
  },
  {
    round: '7ª Giornata',
    competition: "Campionato",
    home: "Oriago Juniors",
    away: "Riva Futura",
    opponentShort: 'RFU',
    kickoff: "2026-11-20T21:00:00",
    date: 'Ven 20 Nov',
    time: '21:00',
    venue: 'Campo Parrocchiale di Lughetto',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Campagna+Lupia+VE+Piazza+Conciliazione+1',
    location: "Campo Parrocchiale di Lughetto, Piazza Conciliazione 1 - 30010 Campagna Lupia (VE)"
  },
  {
    round: '8ª Giornata',
    competition: "Coppa Venezia",
    home: "Polisportiva Bissuola",
    away: "Oriago Juniors",
    opponentShort: 'PBI',
    kickoff: "2026-11-23T21:00:00",
    date: 'Lun 23 Nov',
    time: '21:00',
    venue: 'C.S. di Favaro Veneto',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Venezia+VE+Via+Monte+Cervino+43',
    location: "C.S. di Favaro Veneto, Via Monte Cervino 43 - 30173 Venezia (VE)"
  },
  {
    round: '9ª Giornata',
    competition: "Campionato",
    home: "Polisportiva Bissuola",
    away: "Oriago Juniors",
    opponentShort: 'PBI',
    kickoff: "2026-11-30T21:00:00",
    date: 'Lun 30 Nov',
    time: '21:00',
    venue: 'C.S. di Favaro Veneto',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Venezia+VE+Via+Monte+Cervino+43',
    location: "C.S. di Favaro Veneto, Via Monte Cervino 43 - 30173 Venezia (VE)"
  },
  {
    round: '10ª Giornata',
    competition: "Campionato",
    home: "Adc Martellago 2.1",
    away: "Oriago Juniors",
    opponentShort: 'MAR',
    kickoff: "2026-12-07T21:00:00",
    date: 'Lun 07 Dic',
    time: '21:00',
    venue: 'Campo Parrocchiale di Salzano',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Salzano+VE+Via+Calabria',
    location: "Campo Parrocchiale di Salzano, Via Calabria - 30030 Salzano (VE)"
  }
] 

export type Role = 'Portiere' | 'Difensore' | 'Centrocampista' | 'Attaccante'

export const roster: Record<Role, string[]> = {
  Portiere: ['Alessio Boscolo', 'Davide Toniato', 'Moritz Mele'],
  Difensore: [
    'Giacomo Zornetta',
    'Sebastiano Conton',
    'Matteo Baldan',
    'Luca Gianni',
    'Thomas Bianco',
    'Alberto Masi',
    'Nicolò Damasio',
    'Giacomo Fracasso',
    'Giacomo Santuri',
  ],
  Centrocampista: [
    'Matteo De Filippo',
    'Riccardo Lanza',
    'Lorenzo Botter',
    'Cristian Marinò',
    'Samuele Pilla',
    'Alessandro Schiavonato',
    'Niccolò Zennaro',
    'Filippo Favaretto',
  ],
  Attaccante: [
    'Thomas Curti',
    'Elia Quartiero',
    'Filippo Ruocco',
    'Matteo Scarpa',
    'Riccardo Tronconi',
    'Pietro Santini',
    'Marco Pellizzaro',
    'Daniel Cerchiaro',
    'Cosimo Di Martino',
  ],
}

export const players: { name: string; role: Role }[] = (Object.keys(roster) as Role[]).flatMap((role) =>
  roster[role].map((name) => ({ name, role })),
)

export const coaches = ['Simone Puccini', 'Luca  Ghezzo']

export const roleFilters = [
  { label: 'Tutti', value: 'all' },
  { label: 'Portieri', value: 'Portiere' },
  { label: 'Difensori', value: 'Difensore' },
  { label: 'Centrocampisti', value: 'Centrocampista' },
  { label: 'Attaccanti', value: 'Attaccante' },
] as const

export const sponsors = {
  top: [
    { name: 'Studio Dentistico Zornetta', tagline: 'Via Padova, 13 – 30035 Mirano (VE)', logo: "/images/sponsor/zornetta.png"},
    { name: 'R.E.L.IN. Impianti Industriali', tagline: 'Mira', logo: "/images/sponsor/belafonte.png"},
    { name: 'Birreria Paninoteca Belafonte', tagline: 'Via Argine Destro Canale Taglio, 17 – Mira (VE)', logo: "/images/sponsor/belafonte.png"},
    { name: 'Bar caffetteria Ca.&Fe. ', tagline: 'Via Rialto, 64 – 30034 Oriago (VE)', logo: "/images/sponsor/belafonte.png"},
    { name: 'Venezia Cinearte Academy', tagline: 'Piazza XXVII Ottobre, 54 – 30173 Venezia Mestre (VE)', logo: "/images/sponsor/belafonte.png"},
  ],

}

export const contacts = {
  email: 'tigrisabbioni@gmail.com',
  phone: '+39 392 588 7206',
  phoneHref: 'tel:+393925887206',
  training: 'Campo Parrocchiale di Lughetto, Piazza Conciliazione 1 - 30010 Campagna Lupia (VE)',
  trainingTimes: 'Mercoledì e Venerdì, 20:30 – 22:00',
}
