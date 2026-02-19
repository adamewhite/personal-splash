import Image from 'next/image';
import Cytwombley from '../images/cytwombley.jpeg';

export default function AboutMe() {
  return (
    <main className='min-h-screen p-4 flex flex-row gap-4'>

      {/* Left sidebar — full width on desktop, thin sliver on mobile/tablet */}
      <aside className='relative shrink-0 w-[5vw] md:w-[12vw] lg:w-1/3'>
        <Image
          src={Cytwombley}
          alt='Cy Twombley'
          fill
          className='object-cover object-left lg:object-center'
        />
      </aside>

      {/* Content — fills remaining space */}
      <section className='flex-1 flex flex-col justify-center leading-loose px-4 lg:px-8'>
        <p className='pb-5'>
          I&apos;m a UX designer and data strategist focused on building clear,
          effective experiences at the intersection of user needs and business
          goals.
        </p>
        <p className='pb-5'>
          With a background in brand and marketing, I approach every problem
          through research first — using data to inform decisions, reduce
          friction, and create interfaces that feel inevitable rather than
          designed.
        </p>
        <p className='pb-5'>
          Years of experience across design and strategy have given me a clear
          picture of where creative work succeeds or stalls. I believe the best
          outcomes come from rigorous thinking applied early, so that the work
          that ships is both useful and considered.
        </p>
        <p>
          If you&apos;d like to know more or have a project you&apos;d like to discuss,
          don&apos;t hesitate to reach out:{' '}
          <a
            href='mailto:adam@adamewhite.com'
            className='underline underline-offset-4 hover:opacity-50 transition-opacity duration-200'
          >
            adam@adamewhite.com
          </a>
          .
        </p>
      </section>

      {/* Right sidebar — visible on mobile/tablet only, mirrors left */}
      <aside className='relative shrink-0 w-[5vw] md:w-[12vw] lg:hidden'>
        <Image
          src={Cytwombley}
          alt='Cy Twombley'
          fill
          className='object-cover object-right'
        />
      </aside>

    </main>
  );
}
