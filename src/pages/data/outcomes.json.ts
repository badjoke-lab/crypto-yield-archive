import { getDatasetEnvelope, getPublicOutcomes, jsonResponse } from '../../lib/machine-readable';

export function GET() {
  const records = getPublicOutcomes();
  return jsonResponse(getDatasetEnvelope('customer_outcomes', records));
}
