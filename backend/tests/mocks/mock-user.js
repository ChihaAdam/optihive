import crypto from "node:crypto";

export function mockUsername() {
  const valid = "user" + crypto.randomUUID().slice(0, 8);
  const short = crypto.randomUUID().slice(0, 2);
  const long = "user" + crypto.randomUUID().slice(0, 48);
  const invalid = "user!" + crypto.randomUUID().slice(0, 8) + "!";
  return { valid, short, long, invalid };
}
export function mockEmail() {
  const valid = "user" + crypto.randomUUID().slice(0, 8) + "@gmail.com";
  const invalid = "user!" + crypto.randomUUID().slice(0, 8) + "gmail.com!";
  return { valid, invalid };
}
export function mockPassword() {
  const valid = "user" + crypto.randomUUID().slice(0, 8);
  const short = crypto.randomUUID().slice(0, 2);
  const long = "user" + crypto.randomUUID().slice(0, 48);
  const invalid = "user!" + crypto.randomUUID().slice(0, 8) + "!";
  return { valid, short, long, invalid };
}
