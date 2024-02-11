let fetchedData = null;
let done = [];

export default defineEventHandler(async (event) => {
  try {
    if (!fetchedData) {
      const response = await fetch('https://api.amvstr.me/api/v1/recentepisode/1');

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      fetchedData = await response.json();
    }

    const apiUrl = 'https://api.amvstr.me/api/v2/search?q=';
    const titles = fetchedData.results.map(anime => anime.title);

    async function fetchData() {
      for (const title of titles) {
        try {
          const response = await fetch(`${apiUrl}${encodeURIComponent(title)}`);
          const data = await response.json();

          if (data.results && data.results.length > 0) {
            const matchingResult = {
             
                ...data.results[0],  // Copy existing properties
                ep: fetchedData.results.find(anime => anime.title === title)?.episode
              
            };

            done.push(matchingResult);
          }
        } catch (error) {
          console.error(`Error fetching data for ${title}:`, error);
        }
      }
    }

    await fetchData();

    return {
      data: done,
    };
  } catch (error) {
    console.error('Error in event handler:', error);
    throw error;
  } finally {
    done = [];
  }
});
