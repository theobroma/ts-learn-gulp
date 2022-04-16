class CCC {
  x = 0;
  y = 0;
}

type TC = InstanceType<typeof CCC>;

// ===================================----=======================================
// https://scriptdev.ru/ts/045#instancetype

class Animal {
  move(): void {}
}

type Class = typeof Animal;

function factory(Class: typeof Animal) {
  type Instance = InstanceType<Class>;

  let instance: Instance = new Class(); // Ok -> let instance: Animal
}
