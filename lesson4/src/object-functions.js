const user = {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    profile: {
        age: 30,
        location: {
            city: 'New York',
            country: 'USA',
            coordinates: {
                latitude: 40.7128,
                longitude: -74.006
            }
        },
        preferences: {
            theme: 'dark',
            notifications: {
                email: true,
                sms: false,
                push: true
            }
        }
    },
    social: {
        linkedin: 'https://linkedin.com/in/johndoe',
        github: 'https://github.com/johndoe'
    },
    settings: {
        privacy: {
            profileVisibility: 'public',
            showEmail: false,
            allowMessages: true
        },
        security: {
            twoFactorEnabled: true,
            lastPasswordChange: '2024-01-15'
        }
    },
    // optionalParam:{
    //     param: 'value'
    // },

    summary() {
        return `${this.name} is a ${this.profile.age}-year-old from ${this.profile.location.city}, ${this.profile.location.country}.`;
    },

    keysCount() {
        return Object.keys(this).length;
    },

    multiply(a) {
        console.log(this.profile.age * a);
    }
};

//console.log(user);
console.log(user.summary());
console.log(user.keysCount());
user.multiply(5);

console.log(user.optionalParam?.param);

// Optional chaining allows you to safely access nested properties of an object without having
// to check if each level of the object exists. If any part of the chain is null or undefined,
// the expression will short-circuit and return undefined instead of throwing an error. In the
// example above, if we try to access user.optionalParam.param without optional chaining, it would
// throw an error because optionalParam is not defined. However, with optional chaining
// (user.optionalParam?.param), it will simply return undefined instead of throwing an error.
console.log(user.optionalParam.param);

