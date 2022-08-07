const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

const packageDefinition = protoLoader.loadSync('./laptopStore.proto', {});
const laptopStorePackage =
  grpc.loadPackageDefinition(packageDefinition).laptopStorePackage;

const server = new grpc.Server();

server.addService(laptopStorePackage.Laptop.service, {
  addLaptop: addLaptop,
  getLaptop: getLaptop,
  getLaptops: getLaptops,
});

server.bindAsync(
  'localhost:50051',
  grpc.ServerCredentials.createInsecure(),
  () => {
    console.log('server running at http://localhost:50051');
    server.start();
  },
);

const laptops = [];

function addLaptop(req, callback) {
  const merk = req.request.merk;
  const type = req.request.type;
  const price = req.request.price;
  const laptopObject = {
    id: laptops.length + 1,
    merk: merk,
    type: type,
    price: price,
  };
  laptops.push(laptopObject);
  callback(null, laptopObject);
}

function getLaptop(req, callback) {
  const id = req.request.id;
  const laptop = laptops.find((laptop) => laptop.id === id);
  callback(null, laptop);
}

function getLaptops(req, callback) {
  callback(null, { laptops: laptops });
}
