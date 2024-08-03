import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section id="home" className="">

        <div className="m-auto w-fit flex gap-8 flex-wrap mt-20 items-center">
          <div className="overflow-hidden w-fit">
            <Image 
              src="/images/giga_chad_me.png"
              alt={""}
              width={300}
              height={300}
            />
          </div>

          <p>
            Hello I'm Giga Chad Jhumer. Nice to meet you
          </p>
        </div>
      </section>
    </main>
  );
}
