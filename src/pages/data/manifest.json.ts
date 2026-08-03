import {
  DATA_SAFETY,
  DATA_SCHEMA_VERSION,
  MACHINE_READABLE_SCHEMA_VERSION,
  MAIN_ROUTES,
  PROJECT,
  PUBLIC_DATA_ROUTES,
  getBuildMetadata,
  getDerivedCounts,
  getRecordCountBreakdown,
  getRecordCounts,
  getRecordsLastReviewedAt,
  jsonResponse,
} from '../../lib/machine-readable';

export function GET() {
  const build = getBuildMetadata();

  return jsonResponse({
    schema_version: MACHINE_READABLE_SCHEMA_VERSION,
    data_schema_version: DATA_SCHEMA_VERSION,
    project_id: PROJECT.projectId,
    title: PROJECT.siteName,
    description: PROJECT.description,
    canonical_origin: PROJECT.canonicalOrigin,
    registry_family: PROJECT.registryFamily,
    registry_type: PROJECT.registryType,
    design_generation: PROJECT.designGeneration,
    generated_at: build.generated_at,
    records_last_reviewed_at: getRecordsLastReviewedAt(),
    build,
    data_model: {
      primary_record: 'yield_platform',
      supporting_records: [
        'yield_event',
        'yield_evidence',
        'customer_outcome',
        'yield_product',
        'terms_risk',
      ],
      relationship_keys: {
        platform: 'id',
        supporting_records: 'platform_id',
        evidence_to_event: 'event_id',
      },
      outcome_scope: {
        point_in_time_field: 'as_of',
        dimensions: ['platform_id', 'product_names', 'claim_classes', 'jurisdictions'],
        aggregation_rule: 'Do not collapse product-, jurisdiction-, or claim-class-specific outcomes into one universal recovery percentage.',
        missing_scope_rule: 'Empty claim_classes or jurisdictions means the source record does not yet specify that dimension; it does not mean universal coverage.',
      },
    },
    public_files: PUBLIC_DATA_ROUTES,
    main_routes: MAIN_ROUTES,
    record_counts: getRecordCounts(),
    derived_counts: getDerivedCounts(),
    record_count_breakdown: getRecordCountBreakdown(),
    data_safety: DATA_SAFETY,
    correction_links: {
      page: '/corrections/',
      github: 'https://github.com/badjoke-lab/crypto-yield-archive/issues',
    },
    repository: {
      type: 'github',
      url: 'https://github.com/badjoke-lab/crypto-yield-archive',
      canonical_source_path: '/data/',
    },
    language: 'en',
    locales: ['en'],
  });
}
