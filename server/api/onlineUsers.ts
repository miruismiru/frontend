// In-memory guest count variable
let guestCount = 0;

export default defineEventHandler(async (event: any) => {
  try {
    // Increment guest count for each request
    guestCount++;

    // You can perform additional logic here based on your requirements

    return {
      status: 200,
      message: "ok",
      guestCount,
    };
  } catch (error) {
    return createError({
      statusCode: 500,
      statusMessage: "server error",
    });
  }
});
