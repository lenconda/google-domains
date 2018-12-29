const { expect } = require('chai');
const GoogleDomains = require('../../lib/google_domains');

const googleDomains = new GoogleDomains();

describe('GoogleDomains', function () {
  it('should be an object', function () {
    expect(googleDomains).to.be.an('object');
  });
});

describe('.fetch()', function () {
  this.timeout(20000);
  
  it('should return a list of object', async function () {
    const data = await googleDomains.fetch();
    expect(data).to.be.an('array');
  });

  it('item in array should contain url, domain, region and tld', async function () {
    const data = await googleDomains.fetch();
    expect(data[0].url).to.be.a('string');
    expect(data[0].tld).to.be.a('string');
    expect(data[0].domain).to.be.a('string');
    expect(data[0].region).to.be.a('string');
  });
});

describe('.random()', function () {
  this.timeout(20000);

  it('should return an object contains url, domain, region and tld', async function () {
    const data = await googleDomains.random();
    expect(data).to.be.an('object');
    expect(data.url).to.be.a('string');
    expect(data.tld).to.be.a('string');
    expect(data.domain).to.be.a('string');
    expect(data.region).to.be.a('string');
  });
});

describe('.randomUrl()', function () {
  this.timeout(20000);

  it('should return a string of a google url', async function () {
    const data = await googleDomains.randomUrl();
    expect(data).to.be.a('string');
    expect(data).to.match(/google/i);
  });
});