const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

const packageDefinition = protoLoader.loadSync('./laptopStore.proto', {});
const laptopStorePackage =
  grpc.loadPackageDefinition(packageDefinition).laptopStorePackage;

const client = new laptopStorePackage.Laptop(
  'localhost:50051',
  grpc.credentials.createInsecure(),
);

let laptop_id = 1;

client.getLaptop({ id: laptop_id }, (err, response) => {
  if (err) {
    console.log(err);
  } else {
    console.log(JSON.stringify(response));
  }
});
