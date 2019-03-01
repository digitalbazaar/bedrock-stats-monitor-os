/*!
 * Copyright (c) 2019 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

const bedrock = require('bedrock');
const {config} = bedrock;
const pProps = require('p-props');
const si = require('systeminformation');
require('bedrock-stats');

require('./config');
const cfg = config['stats-monitor-os'];

bedrock.events.on('bedrock-stats.report', async ({monitors}) => {
  const os = {};
  for(const metric in cfg.metrics) {
    os[metric] = si[metric]();
  }
  // pProps assigns the resolved promises to the properties defined in `os`
  monitors.os = await pProps(os);
});
