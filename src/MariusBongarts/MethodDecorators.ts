// https://javascript.plainenglish.io/advanced-typescript-with-code-challenges-method-decorators-dd87b0897d5e

function isEmailValid(email: string) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function validateEmail() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: [string]) {
      const email = args[0];

      if (!isEmailValid(email)) {
        console.error(
          `Given email (${email}) does not match pattern 'anystring@anystring.anystring'.`,
        );
        return;
      }
      return originalMethod.apply(this, args);
    };
  };
}

function validatePassword(minLength: number) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: [string]) {
      const password = args[0];

      const passwordIsValid = password.length >= minLength;

      if (!passwordIsValid) {
        console.error(`Given password (${password}) is not strong enought'.`);
        return;
      }
      return originalMethod.apply(this, args);
    };
  };
}

function logMessage(message: string) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    console.log(message);
  };
}

class User {
  email!: string;
  password!: string;

  @validatePassword(10)
  @logMessage(`Updating Password`)
  updatePassword(password: string) {
    this.password = password;
    console.log(`Successfully updated password to: ${this.password}`);
  }

  @validateEmail()
  @logMessage(`Updating email`)
  updateEmail(newEmail: string) {
    this.email = newEmail;
    console.log(`Successfully updated email to: ${this.email}`);
  }
}

const user = new User();
user.updateEmail('jon@invalid');
user.updateEmail('jon@test.com');

user.updatePassword('password');
user.updatePassword('passwordStrongEnough123');
