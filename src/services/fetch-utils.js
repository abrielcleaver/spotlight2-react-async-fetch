import { checkError, client } from './client';

export async function getDogs() {
  const resp = await client
    .from('dogs')
    .select();

  return checkError(resp);
}

export async function getPlants() {
  const resp = await client
    .from('plants')
    .select();

  return checkError(resp);
}

export async function getBooks() {
  const resp = await client
    .from('books')
    .select();

  return checkError(resp);
}
