import { allPlatforms } from '../../../lib/data';
import { getPlatformRecordEnvelope, jsonResponse } from '../../../lib/machine-readable';

export function getStaticPaths() {
  return allPlatforms.map((platform) => ({
    params: { slug: platform.slug },
    props: { platform },
  }));
}

export function GET({ props }: { props: { platform: Record<string, any> } }) {
  return jsonResponse(getPlatformRecordEnvelope(props.platform));
}
