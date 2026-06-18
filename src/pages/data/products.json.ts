import { allProducts } from '../../lib/data';
import { getDatasetEnvelope, jsonResponse } from '../../lib/machine-readable';

export function GET() {
  return jsonResponse(getDatasetEnvelope('product_profiles', allProducts));
}
