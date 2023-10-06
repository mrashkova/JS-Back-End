const eventBus = require('./eventBus');

eventBus.subscribe('kitten-added', () => {
    console.log('Kitten has been added.');
});

const unsubsribed = eventBus.subscribe('kitten-added', (kittenName, age) => {
    console.log(`Kitten has been added. Second time. It's name is ${kittenName}and is ${age}`);
});

eventBus.subscribe('kitten-removed', () => {
    console.log('Kitten has been removed.');
});

eventBus.publish('kitten-added', 'Puffy', 8);
eventBus.publish('kitten-removed');
unsubsribed();
console.log('------------------');
eventBus.publish('kitten-added', 'Puffy', 8);
eventBus.publish('kitten-removed');