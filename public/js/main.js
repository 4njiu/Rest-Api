async function getData(apikey) {
        // const apiKey = 'R0MMvEaOveYNRgbY8ry9IS0ZRoJ4rzoJEqPghguD';
        // const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
    try {
      //APOD
        const result = await fetch(
            `https://api.nasa.gov/planetary/apod?api_key=R0MMvEaOveYNRgbY8ry9IS0ZRoJ4rzoJEqPghguD`
        );
        const data = await result.json();
        //console.log(APOD)
        console.log(data);
        // displayNasaData(data);
        
        // HTML elements
        const title = document.querySelector("#APODTitle");
        const date = document.querySelector("#APODDate");
        const content = document.querySelector("#APODContent");

        title.innerHTML = data.title;
        date.innerHTML = data.date;
        
        // Content
        if (data.media_type === 'image') {
            content.innerHTML = `<img src="${data.url}" alt="${data.title}" style="max-width: 100%; height: auto;">`;
        } else if (data.media_type === 'video') {
            content.innerHTML = `<iframe src="${data.url}" frameborder="0" allowfullscreen style="max-width: 100%; height: auto;"></iframe>`;
        }
        // Explanation
        content.innerHTML += `
        <p>${data.explanation}</p>
        `;

        // Footer
        // const footer = document.querySelector("footer");


      } catch (error) {
        console.error('Error!', error);
      }
    }
getData('R0MMvEaOveYNRgbY8ry9IS0ZRoJ4rzoJEqPghguD');