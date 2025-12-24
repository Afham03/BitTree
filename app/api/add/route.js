export async function POST(request) {
  try {
    const body = await request.json();

    const client = await clientPromise;
    const db = client.db("bittree");
    const collection = db.collection("links");

    const exists = await collection.findOne({ handle: body.handle });

    if (exists) {
      return Response.json({
        success: false,
        message: "This Bittree already exists!",
      });
    }

    await collection.insertOne(body);

    return Response.json({
      success: true,
      message: "Your Bittree has been generated!",
    });
  } catch (err) {
    console.error("API ERROR:", err);
    return Response.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}
