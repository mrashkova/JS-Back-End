const uniqid = require('uniqid')

const cubes = [
    {
      id: '3lhn14ln7drfpv',
      name: '1',
      description: '1',
      imageUrl: '1',
      difficultyLevel: 1
    },
    {
      id: '3lhn14ln7drk16',
      name: '2',
      description: '2',
      imageUrl: '2',
      difficultyLevel: 2
    },
    {
      id: '3lhn14ln7drou3',
      name: '3',
      description: '3',
      imageUrl: '3',
      difficultyLevel: 3
    }
  ];

exports.create = (cubeData) => {
    const newCube = {
        id: uniqid(), 
        ...cubeData,
    }
    cubes.push(newCube);

    return newCube;
}

exports.getAll = (search, from, to) => {
  let filteredCubes = [...cubes]
    if (search) {
      filteredCubes = filteredCubes.filter(
        (cube) => cube.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (from) {
      filteredCubes = filteredCubes.filter(
        (cube) => cube.difficultyLevel >= Number(from)
      )
    }
    if (to) {
      filteredCubes = filteredCubes.filter(
        (cube) => cube.difficultyLevel <= Number(to)
      )
    }
    return filteredCubes;
};

exports.getSingleCube = (id) => {
    return cubes.find((cube) => cube.id === id);
}