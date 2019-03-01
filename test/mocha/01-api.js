/*!
 * Copyright (c) 2019 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

const brStatsStorageRedis = require('bedrock-stats-storage-redis');

describe('stats-monitor-os', () => {
  it('stores two seconds of monitor reports using redis storage', async () => {
    await sleep(2000);
    const result = await brStatsStorageRedis.find({monitorIds: ['os']});
    // spot check for averageLoad
    const [report] = result;
    should.exist(report.createdDate);
    should.exist(report.monitors);
    should.exist(report.monitors.os);
    should.exist(report.monitors.os.currentLoad);
    should.exist(report.monitors.os.currentLoad.avgload);
  });
});

async function sleep(delay) {
  return new Promise(resolve => setTimeout(resolve, delay));
}
