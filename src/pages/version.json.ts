import {
  DATA_SAFETY,
  DATA_SCHEMA_VERSION,
  MACHINE_READABLE_SCHEMA_VERSION,
  PROJECT,
  PUBLIC_DATA_ROUTES,
  ROUTES,
  getBuildMetadata,
  getDerivedCounts,
  getRecordCountBreakdown,
  getRecordCounts,
  getRecordsLastReviewedAt,
  jsonResponse,
} from '../lib/machine-readable';

export function GET() {
  const build = getBuildMetadata();

  return jsonResponse({
    schema_version: MACHINE_READABLE_SCHEMA_VERSION,
    project_id: PROJECT.projectId,
    site_name: PROJECT.siteName,
    registry_family: PROJECT.registryFamily,
    registry_type: PROJECT.registryType,
    canonical_origin: PROJECT.canonicalOrigin,
    canonical_only: DATA_SAFETY.canonical_only,
    release_channel: PROJECT.releaseChannel,
    design_generation: PROJECT.designGeneration,
    build,
    data: {
      data_schema_version: DATA_SCHEMA_VERSION,
      generated_at: build.generated_at,
      records_last_reviewed_at: getRecordsLastReviewedAt(),
      record_counts: getRecordCounts(),
      derived_counts: getDerivedCounts(),
      record_count_breakdown: getRecordCountBreakdown(),
      public_files: PUBLIC_DATA_ROUTES,
    },
    routes: ROUTES,
  });
}
