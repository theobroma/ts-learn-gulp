function Enumerable(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor,
) {
  console.log('-- target --');
  console.log(target);
  console.log('-- proertyKey --');
  console.log(propertyKey);
  console.log('-- descriptor --');
  console.log(descriptor);
  //make the method enumerable
  descriptor.enumerable = true;
}

class Car {
  @Enumerable
  run() {
    console.log('inside run method...');
  }
}
console.log('-- creating instance --');
let car = new Car();
console.log('-- looping --');
for (let key in car) {
  console.log('key: ' + key);
}
