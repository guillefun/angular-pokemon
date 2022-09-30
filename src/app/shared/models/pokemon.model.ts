export interface Pokemon {
  id: number,
  name: string,
  sprites: Sprites
}

export interface Sprites {
  versions: Versions
}

export interface Versions {
  "generation-v": GenerationV
}

export interface GenerationV {
  "black-white": BlackWhite
}

export interface BlackWhite {
  animated: Animated
}

export interface Animated {
  front_default: string
}
