import { getSeriesRegistryDescriptor } from '../../../lib/ledger-series-adapter';
import { jsonResponse } from '../../../lib/machine-readable';

export function GET() {
  return jsonResponse(getSeriesRegistryDescriptor());
}
