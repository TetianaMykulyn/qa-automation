const myPet = 'crocodile';

switch (myPet) {
    case 'cat':
    case 'dog':
    case 'hamster':
        console.log('You have a domestic pet');
        break;
    default:
        console.log('You have a wild pet');
}

const myFriendPet = 'hamster';

switch (myFriendPet) {
    case 'cat':
        console.log('Your friend has a cat');
        break;
    case 'dog':
        console.log('Your friend has a dog');
        break;
    case 'hamster':
        console.log('Your friend has a hamster');
        break;
    default:
        console.log('Unknown pet');
}
