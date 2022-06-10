import useInsecureRawScript from './useInsecureRawScript';

export function registerDynamicScript({
  scriptChat,
  scriptGoogleAnalytics,
  scriptsHeaderGlobais,
  scriptsBodyGlobais,
}) {
  useInsecureRawScript(scriptChat);
  useInsecureRawScript(scriptGoogleAnalytics);
  useInsecureRawScript(scriptsHeaderGlobais);
  useInsecureRawScript(scriptsBodyGlobais);
}
