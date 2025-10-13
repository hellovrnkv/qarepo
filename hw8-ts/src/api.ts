import type { UserDTO } from "./types";
function ensureOk(res: Response) {
  if (!res.ok) {
    throw new Error(`HTTP ${res.status} ${res.statusText}`);
  }
  return res;
}

export async function fetchUsers(): Promise<UserDTO[]> {
  const url = "https://jsonplaceholder.typicode.com/users";
  const res = await fetch(url);
  ensureOk(res);
  const data = (await res.json()) as unknown;
  return data as UserDTO[];
}
