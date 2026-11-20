const { readFileSync, writeFileSync } = require('node:fs');

const bundlePath =
  '/app/packages/twenty-server/dist/front/assets/SettingsAI-DSElAaA9.js';
const source = readFileSync(bundlePath, 'utf8');
const usageGate =
  'l=B(ri),n=o||s?.hasValidEnterpriseValidityToken===!0,{analytics:d,isInitialLoading:c}=$i({operationTypes:K,skip:!n||!l})';
const localUsageGate =
  'l=B(ri),n=l||o||s?.hasValidEnterpriseValidityToken===!0,{analytics:d,isInitialLoading:c}=$i({operationTypes:K,skip:!l})';

if (source.split(usageGate).length !== 2) {
  throw new Error('Expected exactly one AI Usage gate in the pinned bundle');
}

writeFileSync(bundlePath, source.replace(usageGate, localUsageGate));
