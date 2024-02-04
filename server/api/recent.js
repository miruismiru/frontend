let fetchedData = null;
let search = null;
let done = [];

export default defineEventHandler(async (event) => {
  try {
    if (!fetchedData) {
      const response = await fetch('https://march-api1.vercel.app/anime/gogoanime/recent-episodes');

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      fetchedData = await response.json();
    }

    for (var i = 0; i < fetchedData.results.length; i++) {
      let tt = fetchedData.results[i++].id.replaceAll('-', '');

      const response = await fetch(`https://api-amvstrm.nyt92.eu.org/api/v2/search/?q=${tt}&limit=1`);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      search = await response.json();
      done.push(search.results);
    }

    return {
      status: 200,
      message: 'ok',
      data: done.flat(),
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
