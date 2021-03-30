/* eslint-disable no-undef */

var Instance;

function Connect(server) {
  Instance = new Colyseus.Client(server);
}

export { Instance, Connect };
