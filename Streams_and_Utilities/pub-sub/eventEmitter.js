const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('kitten-added', () => {
    console.log('Kitten has been added.');
});

eventEmitter.on('kitten-added', (kittenName, age) => {
    console.log(`Kitten has been added. Second time. It's name is ${kittenName}and is ${age}`);
});

eventEmitter.on('kitten-removed', () => {
    console.log('Kitten has been removed.');
});

eventEmitter.emit('kitten-added', 'Puffy', 8);
eventEmitter.emit('kitten-removed');