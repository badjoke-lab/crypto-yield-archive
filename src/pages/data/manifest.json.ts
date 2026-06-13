import {
  DATA_SAFETY,
  MACHINE_READABLE_SCHEMA_VERSION,
  MAIN_ROUTES,
  PROJECT,
  getRecordCountBreakdown,
  getRecordCounts,
} from '../../lib/machine-readable';

export function GET() {
  const manifest = {
    schema_version: MACHINE_READABLE_SCHEMA_VERSION,
    project_id: PROJECT.projectId,
    title: PROJECT.siteName,
    description: PROJECT.description,
    canonical_origin: PROJECT.canonicalOrigin,
    registry_family: PROJECT.registryFamily,
    registry_type: PROJECT.registryType,
    design_generation: PROJECT.designGeneration,
    data_model: {
      primary_record: 'yield_platform',
      supporting_records: [
        'yield_event',
        'yield_evidence',
        'customer_outcome',
        'yield_product',
        'terms_risk',
      ],
    },
    public_files: {
      version: '/version.json',
      manifest: '/data/manifest.json',
      llms: '/llms.txt',
      ai: '/ai.txt',
    },
    main_routes: MAIN_ROUTES,
    record_counts: getRecordCounts(),
    record_count_breakdown: getRecordCountBreakdown(),
    data_safety: DATA_SAFETY,
    correction_links: {
      page: '/corrections/',
      github: 'https://github.com/badjoke-lab/crypto-yield-archive/issues',
    },
    repository: {
      type: 'github',
      url: 'https://github.com/badjoke-lab/crypto-yield-archive',
    },
    language: 'en',
    locales: ['en'],
    generated_at: new Date().toISOString(),
  };

  return new Response(JSON.stringify(manifest, null, 2), {
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'public, max-age=3600, must-revalidate',
    },
  });
}
