const listeners = {}

const publish = (eventName, ...eventArgs) => {
    if(!listeners[eventName]) {
        return;
    }

    listeners[eventName].forEach(listener => listener(...eventArgs));
};

const subscribe = (eventName, eventListener) => {
    if (!listeners[eventName]) {
        listeners[eventName] = [];
    }

    listeners[eventName].push(eventListener);

    return () => {
        console.log(`Unsubscribed from ${eventName}`);
        console.log('Before sub', listeners);

        listeners[eventName] = listeners[eventName].filter(
            (listeners) => listeners !== eventListener
        )

        console.log('After sub', listeners);

    }

};


const eventBus = {
    publish,
    subscribe
};

module.exports = eventBus;