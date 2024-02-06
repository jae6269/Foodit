export async function getFoodData() {
  const response = await fetch('https://learn.codeit.kr/6269/foods');
  const body = await response.json();
  return body;
}
