import { checkError, client } from './client';

export async function getDogs() {
  const resp = await client
    .from('dogs')
    .select();

  return checkError(resp);
}