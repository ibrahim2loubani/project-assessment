export interface Campaign {
  id: string
  name: string
  date: string
  type: string
  contacts: {
    id: string
    name: string
  }
}

export interface BarChart {
  country: string
  hotDog: number
  hotDogColor: string
  burger: number
  burgerColor: string
  sandwich: number
  sandwichColor: string
  kebab: number
  kebabColor: string
  fries: number
  friesColor: string
  donut: number
  donutColor: string
}
