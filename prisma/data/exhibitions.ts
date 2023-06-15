type Exhibition = {
  title: string;
  slug: string;
  date: Date;
  description?: string;
};

export const dataExhibitions: Exhibition[] = [
  {
    title: "Journey",
    slug: "journey",
    date: new Date("2023-06-13"),
    description: `One of the things that is always interesting is the daily things that
    go through. In life, there are always many problems and events.
    Everything has its own impression, whether it's a good or bad
    impression, everything has its own story. This work presents
    figures as images of every incident in life that always has its own
    experience. The choice of black and white as the color of balance
    in life. Life is always shrouded in two things that are present in
    every good and bad journey. This work wants to try to invite
    everyone to look back and give meaning to every event or
    experience in life. To be used as a form of self-reflection and
    learning in living life in the future.`,
  },
  {
    title: "Divine Foolishness",
    slug: "divine-foolishness",
    date: new Date("2023-06-13"),
    description: `The Siblings pick a card in turn belonging to a thousand and more permutations to approach the inscrutable divine. There is comfort in speculation and in the knowledge of secrets behind every mute figure. To the prosaic, a rebellion against arbitrary rigidity. To the initiates, randomness is in the natural order, a ritual of naked vulnerability necessary to emerge a new person. But for them, the task is to transform as much as to be transformed: the arcana rendered by them in forms that are current, swathed in neon, dripping with virility, irrepressibly sensual, deliciously ambiguous, engaged in rediscovered freedoms beyond binaries. In spanning the contemporary and the sublime, the spirituality that has been withheld from the queer is reclaimed by the renewed idiom of faith independent, present, and irrational: ours is the kingdom, the power, the glory.
    They celebrate in a cathedral with vaulted ceilings from the bones of their old selves.`,
  },
];
