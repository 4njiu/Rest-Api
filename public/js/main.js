async function getData(apikey) {
        // const apiKey = 'R0MMvEaOveYNRgbY8ry9IS0ZRoJ4rzoJEqPghguD';
        // const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
    try {
        const result = await fetch(
            `https://api.nasa.gov/planetary/apod?api_key=R0MMvEaOveYNRgbY8ry9IS0ZRoJ4rzoJEqPghguD`
        );
        const data = await result.json();
        //console.log(APOD)
        console.log(data);
        // displayNasaData(data);
      } catch (error) {
        console.error('There was an error!', error);
      }
    }
getData('R0MMvEaOveYNRgbY8ry9IS0ZRoJ4rzoJEqPghguD');