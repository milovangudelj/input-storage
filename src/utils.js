// Description: Utility functions for the application.

// Function to create a URLSearchParams object from the query string and add new parameters to it.
export function addQueryStringParameters(newParams) {
  const params = new URLSearchParams(window.location.search);

  for (const [key, value] of newParams) {
    params.set(key, value);
  }

  return params;
}

// Function to update the URL with the new query string parameters.
export function updateUrl(params) {
  const newUrl = decodeURIComponent(`${window.location.pathname}?${params}`);
  window.history.replaceState({}, "", newUrl);
}
