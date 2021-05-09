const V1_PREFIX = "/v1/";
const KV_V1_PREFIX = "KV_1";

export const ROUTES = {
    V1_PREFIX : V1_PREFIX,
    V1 : {
      STATE: V1_PREFIX + "state",
      STATES_TESTING: V1_PREFIX + "states/testing",
      STATES_TIMESERIES : V1_PREFIX + "states/timeseries",
      DISTRICTS : V1_PREFIX + "district",
      RACECHART: V1_PREFIX + "states/racechart",
      INDIA_TIMESERIES: V1_PREFIX + "india/timeseries"
    }
}

export const KV_CONSTANTS = {
  V1 : {
    STATE: `${KV_V1_PREFIX}_STATE`,
    STATES_TESTING: `${KV_V1_PREFIX}STATES_TESTING`,
    STATES_TIMESERIES : `${KV_V1_PREFIX}_STATES_TIMESERIES`,
    DISTRICTS : `${KV_V1_PREFIX}_DISTRICTS`,
    INDIA_TIMESERIES: `${KV_V1_PREFIX}_INDIA_TIMESERIES`,
    RACECHART: `${KV_V1_PREFIX}_RACECHART`
  }
};

export const URL_CONSTANTS = {
  V1 : {
    STATE: `https://api.livecovid.in/api/state`,
    STATES_TESTING: `https://api.livecovid.in/api/states/testing`,
    STATES_TIMESERIES : `https://api.livecovid.in/api/states/timeseries`,
    DISTRICTS : `https://api.livecovid.in/api/district`,
    INDIA_TIMESERIES: `https://api.livecovid.in/api/india/timeseries`,
    RACECHART: `https://api.livecovid.in/api/states/racechart`
  }
};