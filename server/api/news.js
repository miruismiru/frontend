let fetchedData = null;
let search = null;
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

  

    return {
    
      data: fetchedData.flat(),
    };
  } catch (error) {
    // Handling errors and returning a server error response
    return createError({
      statusCode: 500,
      statusMessage: 'server error',
    });
  } finally {
    // Clear the done array regardless of success or failure
    done = [];
  }
});
