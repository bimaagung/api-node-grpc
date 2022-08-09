const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

const packageDefinition = protoLoader.loadSync('./laptopStore.proto', {});
const laptopStorePackage =
  grpc.loadPackageDefinition(packageDefinition).laptopStorePackage;

const client = new laptopStorePackage.Laptop(
  'localhost:50051',
  grpc.credentials.createInsecure(),
);

client.getLaptops(null, (err, response) => {
  if (err) {
    console.log(err);
  } else {
    console.log(JSON.stringify(response));
  }
});
