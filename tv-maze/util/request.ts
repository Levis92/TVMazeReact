const baseUrl = 'https://api.tvmaze.com';

export function request<TData>(
  input: RequestInfo,
  init?: RequestInit,
): Promise<TData> {
  input = baseUrl + input;
  return fetch(input, init).then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw response.json();
    }
  });
}
