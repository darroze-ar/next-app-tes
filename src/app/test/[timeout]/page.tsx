import Image from "next/image";

export default async function Page({
  params,
}: {
  params: { timeout: string };
}) {
  await wait(+params.timeout);
  return (
    <div>
      Generated in {params.timeout}ms:
      <div>
        <Image src="https://images.unsplash.com/photo-1642083139428-9ee5fa423c46"  alt="" width={410} height={615}/>
      </div>
    </div>
  );
}

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
