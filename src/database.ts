export class Database {

  public async getProduct() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          name: 'hello',
          value: 'world'
        });
      }, 1000);
    });
  }

  public async getLinks(key: string) {
    console.log(key);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([{
          _id: '123',
          title: 'sean',
          url: 'bbbb',
        }, {
          _id: '345',
          title: 'jack',
          url: 'ddddddd'
        }]);
      }, 1000);
    });
  }

  public async getContainers(id: string) {
    console.log('serviceid', id);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([{
          name: 'container001',
          startAt: new Date(),
        }, {
          name: 'container002',
          startAt: new Date(),
        }]);
      }, 1000);
    });
  }

  public async getServiceByID(id: string) {
    console.log('serviceid', id);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id,
          image: 'alpine:1.0.0'
        });
      }, 1000);
    });
  }

}