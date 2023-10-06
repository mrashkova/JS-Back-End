const mongoose = require('mongoose');
const Dog = require('./models/Dog');

const CONNECTION_STR = 'mongodb://127.0.0.1:27017'; // mongodb://localhost:27017
const DATABASE_NAME = 'DogsDB';

async function connectDb() {
    mongoose.connect(`${CONNECTION_STR}/${DATABASE_NAME}`);
    console.log(`You have been connected to database ${DATABASE_NAME} ...`);

    // Static, virtual, methods
        // const dogs = await Dog.find();
        // console.log(dogs);
        // dogs.forEach(dog => dog.bark());
        // dogs.forEach(dog => console.log(dog.description));
        // const d = await Dog.getDogsCollection(4);
        // console.log(d);

    // FIND *******************************************************************************
    const dogs = await Dog.find({}).where('age').gt(5).lt(10);
    console.log(dogs);

    // CREATE *****************************************************************************
    // Variant 1
    // const newDog = new Dog({name: 'Li', age: 5, color: 'orange'})
    // newDog.save();

    // Variant 2
    // const newDog = await Dog.create({ name: 'Sharo', age: 7, color: 'sharen' })
    // console.log(newDog);

    // READ **********************************************************************************
    // const dogs = await Dog.findOne();
    // const dogs = await Dog.findById('651a79e54f5f554fe6d32c67');
    // const dogs = await Dog.find({age: 9});
    // const dogs = await Dog.find({name: 'Spike'})
    // const dogs = await Dog.find();

    // UPDATE *******************************************************************************
    // Variant 1
    // await Dog.updateOne(
    //     { name: 'Roshko' }, 
    //     { $set: { age: 4 } } // dollar-sign syntax native mongodb
    // ); 

    // Variant 2
    // const DOG_ID = '651bace4d119b4e37f9b7753';
    // const updatedDog = await Dog.findById(DOG_ID);
    // updatedDog.age = -3;
    // updatedDog.color = 'transperent';
    // updatedDog.save();

    // Variant 3
    // await Dog.findByIdAndUpdate(DOG_ID, { name: 'Micky' })
    // console.log(dogs);

    // DELETE **********************************************************************************
    // Variant 1
    // await Dog.deleteOne({name: 'Lisko'});

    // Variant 2
    // const DOG_ID = '651bace4d119b4e37f9b7753';
    // await Dog.findByIdAndDelete(DOG_ID);

    // console.log(dogs);
};

connectDb();