/*!
 * Copyright (c) 2019 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

const brStatsStorageRedis = require('bedrock-stats-storage-redis');
const {util: {delay}} = require('bedrock');

describe('stats-monitor-os', () => {
  it('stores two seconds of monitor reports using redis storage', async () => {
    await delay(2000);
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
