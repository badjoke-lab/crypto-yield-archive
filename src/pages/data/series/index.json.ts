import { getSeriesRecordIndex } from '../../../lib/ledger-series-adapter';
import { jsonResponse } from '../../../lib/machine-readable';

export function GET() {
  return jsonResponse(getSeriesRecordIndex());
}
