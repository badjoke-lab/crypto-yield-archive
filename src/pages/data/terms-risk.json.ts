import { allTermsRisk } from '../../lib/data';
import { getDatasetEnvelope, jsonResponse } from '../../lib/machine-readable';

export function GET() {
  return jsonResponse(getDatasetEnvelope('terms_risk', allTermsRisk));
}
