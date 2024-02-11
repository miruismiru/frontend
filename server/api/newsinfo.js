let fetchedData = null;
let done = [];

const maxRetries = 3;

async function fetchWithRetry(url, retries = 0) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      console.error(`Error fetching data for URL=${url}. Status: ${response.status}`);
      throw new Error('Network response was not ok');
    }

    return response.json();
  } catch (error) {
    if (retries < maxRetries) {
      console.error(`Retry ${retries + 1} for URL=${url}:`, error);
      return fetchWithRetry(url, retries + 1);
    } else {
      throw error;
    }
  }
}

export default defineEventHandler(async (event) => {
  try {
    if (!fetchedData) {
      const feedsResponse = await fetchWithRetry('https://march-api1.vercel.app/news/ann/recent-feeds');
      fetchedData = feedsResponse;
    }

    if (fetchedData) {
      const fetchPromises = fetchedData.map(async (item) => {
        try {
          const infoResponse = await fetchWithRetry(`https://march-api1.vercel.app/news/ann/info?id=${item.id}`);
          return infoResponse;
        } catch (error) {
          console.error(`Error fetching data for id=${item.id}:`, error);
          return null; // or handle the error as needed
        }
      });

      done = await Promise.all(fetchPromises.filter(Boolean)); // filter out null responses
    }

    return {
      status: 200,
      message: 'ok',
      data: done.flat(),
    };
  } catch (error) {
    console.error('Error in event handler:', error);
    throw error;
  } finally {
    done = [];
  }
});
