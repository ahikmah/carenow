const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8080";

interface FetchOptions {
  method?: "GET" | "POST" | "PUT" | "DELETE";
  body?: unknown;
  headers?: Record<string, string>;
}

const fetcher = async <T>(
  endpoint: string,
  options: FetchOptions = {}
): Promise<T> => {
  const { method = "GET", body, headers = {} } = options;

  const response = await fetch(`${BASE_URL}/${endpoint}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    const errorMessage = errorData.message || "Unknown error occurred";
    const errorStatus = errorData.statusCode || response.status;
    throw new Error(`${errorStatus}: ${errorMessage}`);
  }

  return await response.json();
};

export { fetcher };
