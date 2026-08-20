import { allPlatforms } from './data';
import {
  DATA_SAFETY,
  DATA_SCHEMA_VERSION,
  MACHINE_READABLE_SCHEMA_VERSION,
  PROJECT,
  getBuildMetadata,
  getPlatformRecordEnvelope,
  getRecordCounts,
} from './machine-readable';

export const SERIES_SCHEMA_VERSION = '1.0.0';
export const SERIES_REGISTRY_ID = 'crypto-yield-archive';
export const SERIES_NATIVE_RECORD_TYPE = 'yield_platform';

function globalRecordKey(nativeId: string) {
  return `${SERIES_REGISTRY_ID}:${SERIES_NATIVE_RECORD_TYPE}:${nativeId}`;
}

function absolute(route: string) {
  return new URL(route.replace(/^\//, ''), `${PROJECT.canonicalOrigin}/`).toString();
}

function currentState(record: Record<string, any>) {
  return {
    status: record.status ?? null,
    native: {
      record,
    },
  };
}

export function getSeriesRegistryDescriptor() {
  const counts = getRecordCounts();
  return {
    series_schema_version: SERIES_SCHEMA_VERSION,
    object_type: 'registry_descriptor',
    registry: {
      id: SERIES_REGISTRY_ID,
      name: PROJECT.siteName,
      type: PROJECT.registryType,
      origin: PROJECT.canonicalOrigin,
      native_machine_schema_version: MACHINE_READABLE_SCHEMA_VERSION,
      native_data_schema_version: DATA_SCHEMA_VERSION,
    },
    canonical_only: true,
    record_counts: {
      primary_records: counts.primary_records,
      series_records: counts.primary_records,
    },
    routes: {
      descriptor: '/data/series/registry.json',
      index: '/data/series/index.json',
      record_template: '/data/series/records/{slug}.json',
      native_record_template: '/data/platform/{slug}.json',
      search: '/platforms/',
      compare: '/compare/',
      stats: '/stats/',
    },
    capabilities: {
      search: true,
      compare: true,
      stats: true,
      typed_relationships: false,
    },
    data_safety: {
      ...DATA_SAFETY,
      ai_generated_canonical_facts: false,
    },
    verification: {
      build: getBuildMetadata(),
      native_verification_marker: PROJECT.verificationMarker,
    },
  };
}

export function getSeriesRecordIndex() {
  const records = [...allPlatforms]
    .sort((a, b) => String(a.slug).localeCompare(String(b.slug)))
    .map((platform) => ({
      global_record_key: globalRecordKey(platform.id),
      native_record_type: SERIES_NATIVE_RECORD_TYPE,
      native_record_id: platform.id,
      slug: platform.slug,
      name: platform.name,
      current_state: platform.status ?? null,
      human_url: absolute(`/platform/${platform.slug}/`),
      machine_url: absolute(`/data/series/records/${platform.slug}.json`),
      native_machine_url: absolute(`/data/platform/${platform.slug}.json`),
      last_verified_at: platform.last_verified_at ?? null,
    }));

  return {
    series_schema_version: SERIES_SCHEMA_VERSION,
    object_type: 'record_index',
    registry_id: SERIES_REGISTRY_ID,
    canonical_only: true,
    record_count: records.length,
    record_counts: {
      yield_platforms: records.length,
    },
    verification: {
      build: getBuildMetadata(),
    },
    records,
  };
}

export function getSeriesRecordEnvelope(platform: Record<string, any>) {
  const native = getPlatformRecordEnvelope(platform);
  const events = native.supporting_records.events ?? [];
  const evidence = native.supporting_records.evidence ?? [];
  return {
    series_schema_version: SERIES_SCHEMA_VERSION,
    object_type: 'record_envelope',
    registry_id: SERIES_REGISTRY_ID,
    global_record_key: globalRecordKey(platform.id),
    record_key: {
      native_record_type: SERIES_NATIVE_RECORD_TYPE,
      native_record_id: platform.id,
      slug: platform.slug,
    },
    identity: {
      name: platform.name,
      aliases: platform.aliases ?? [],
    },
    urls: {
      human: absolute(native.canonical_page),
      machine: absolute(`/data/series/records/${platform.slug}.json`),
      native_machine: absolute(native.self),
    },
    current_state: {
      ...currentState(platform),
      native: {
        record: native.record,
        supporting_records: native.supporting_records,
        related_record_counts: native.related_record_counts,
      },
    },
    events: {
      records: events,
    },
    evidence: {
      records: evidence,
    },
    relationships: [],
    verification: {
      build: native.build,
      last_verified_at: platform.last_verified_at ?? null,
    },
    provenance: {
      canonical_only: native.canonical_only === true,
      data_safety: DATA_SAFETY,
      native_schema_version: native.schema_version,
      native_data_schema_version: native.data_schema_version,
      native_project_id: native.project_id,
    },
  };
}
