export async function getFoodData(order) {
  const query = `?order=${order}`;
  const response = await fetch('https://learn.codeit.kr/6269/foods' + query);
  const body = await response.json();
  return body;
}
