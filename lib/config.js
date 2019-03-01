/*!
 * Copyright (c) 2019 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

const {config} = require('bedrock');

const cfg = config['stats-monitor-os'] = {};

// metrics may be any function available in this library
// https://www.npmjs.com/package/systeminformation#reference
// TODO: future - each metric could define an object that could allow filtering
// based on stats level etc.
cfg.metrics = {
  currentLoad: true,
  fsSize: true,
  mem: true,
};
