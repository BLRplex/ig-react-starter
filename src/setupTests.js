import { configureToMatchImageSnapshot } from 'jest-image-snapshot'

jest.setTimeout(30000)

expect.extend({
  toMatchImageSnapshot: configureToMatchImageSnapshot({
    customSnapshotsDir: 'snapshots/origin',
    customDiffDir: 'snapshots/diff',
    failureThreshold: 0.5,
    failureThresholdType: 'percent',
    noColors: true,
  }),
})
