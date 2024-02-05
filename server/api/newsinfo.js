let fetchedData = null;
let done = [];

export default defineEventHandler(async (event) => {
  try {
    if (!fetchedData) {
      const response = await fetch('https://march-api1.vercel.app/news/ann/recent-feeds');

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      fetchedData = await response.json();
    }

    // Check if fetchedData is still null before mapping over it
    if (fetchedData) {
      const fetchPromises = fetchedData.map(async (item) => {
        const response = await fetch(`https://march-api1.vercel.app/news/ann/info?id=${item.id}`);

        if (!response.ok) {
          console.error(`Error fetching data for id=${item.id}. Status: ${response.status}`);
          throw new Error('Network response was not ok');
        }

        return response.json();
      });

      done = await Promise.all(fetchPromises);
    }

    return {
      status: 200,
      message: 'ok',
      data: done.flat(),
    };
  } catch (error) {
    console.error('Error in event handler:', error);

    // Rethrow the error or customize the error response
    throw error;
  } finally {
    done = [];
  }
});
