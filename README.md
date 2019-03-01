# bedrock-stats-monitor-os

## Configuration
Metrics may be any of the APIs in the
[systeminformation](https://www.npmjs.com/package/systeminformation#reference)
module.
```
bedrock.config['stats-monitor-os'].metrics = {
  currentLoad: true,
  fsSize: true,
  mem: true,
};
```

## Sample Report
See a [sample report](docs/sample-report.md) with the default metrics.
