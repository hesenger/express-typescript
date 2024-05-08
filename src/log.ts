export function log(data: string | any[]) {
  if (process.env.ENV === "production") return;
  console.log(new Date(), data);
}
