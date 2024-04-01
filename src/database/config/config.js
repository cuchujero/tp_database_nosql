const mongoose = require('mongoose');

const {
  MONGO_USERNAME,
  MONGO_PASSWORD,
  MONGO_DATABASE,
  MONGO_HOST,
} = require('../../processValues');

const uri = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOST}/${MONGO_DATABASE}?retryWrites=true&w=majority&appName=RolaGoogleCluster0`;

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true ,  useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false} };

//mongoose.set('debug', true); // Enable Mongoose debugging

async function run() {
  try {
    await mongoose.connect(uri, clientOptions);
    const adminDb = mongoose.connection.db.admin();
    await adminDb.command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  } finally {
    //await mongoose.disconnect();
  }
}

run().catch(console.error);
