import Image from 'next/image'
import CanvasMushroom from '../canvas/Canvas-mushroom'
import Link from 'next/link'

export default function Presentation() {
  const imgTeam = '/img/team01.webp'
  const worldFlower = '/img/image4.webp'
  const colorfulFungus = '/img/colorful-fungu.webp'

  const urlKickstarter =
    'https://www.kickstarter.com/projects/hirotechnologies/hiro-experience-plastic-eating-fungi-at-home?lang=fr'

  return (
    <section className='h-full w-full flex flex-col gap-16'>
      <div className='flex justify-between py-8 px-4 border-t-[1px] border-b-[1px] border-[#FA4A14]'>
        <p className='font-extralight'>One Goal</p>
        <div className='flex gap-2'>
          <Image src={imgTeam} width={200} height={200} alt='Team' />
          <div className='flex items-start font-extralight text-[0.8em] gap-1 uppercase'>
            <p>Contact US </p>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='13'
              height='13'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              className='mt-0.5'
            >
              <path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z' />
              <path d='M14.05 2a9 9 0 0 1 8 7.94' />
              <path d='M14.05 6A5 5 0 0 1 18 10' />
            </svg>
          </div>
        </div>
      </div>

      <div>
        <p className='text-[40px] w-full flex flex-col font-baskervville px-4 text-justify tracking-tighter'>
          <span className='text-right'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </span>
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adrou minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>

      <div className='flex'>
        <div className='w-1/2'></div>
        <Image src={worldFlower} width={500} height={500} alt='Image' className='w-1/2 pr-4' />
      </div>

      <div className='flex justify-between px-4'>
        <div className='flex flex-col w-1/2'>
          <h2 className='text-[2.5em] font-baskervville'>
            Info of work <span className='text-[0.3em]'>[01]</span>
          </h2>
          <Image src={colorfulFungus} width={1000} height={1000} alt='Image' className='w-full' />
        </div>
        <p className='font-extralight text-[0.8em]'>
          <span className='font-bold'>[9% </span>
          of our plastics actually are
          <span className='font-bold'> recyled]</span>
        </p>
      </div>

      <div className='w-full px-4 flex justify-around items-start'>
        <p className='font-bold font-baskervville'>Fungi</p>
        <p className='text-center font-light'>
          Welcome to the World of{' '}
          <span className='font-bold text-[#FA4A14] underline'>Mycodigestible</span> Products <br />{' '}
          (Mycodigestible = Digested by Fungi)
        </p>
        <Link className='font-light text-[0.8em]' href={urlKickstarter} target='_blank'>
          [visit SITE]
        </Link>
      </div>

      <div className='flex items-center justify-around px-4 w-full h-[500px]'>
        <p className='w-1/3 text-justify font-light'>
          It have been{' '}
          <span className='text-[#FA4A14] font-bold'>
            evolving for hundreds of millions of years to break down complex carbon materials
          </span>{' '}
          such as rocks and lignin (which makes trees hard and rigid), and plastics are no
          different, being a carbon chain themselves.{' '}
          <span className='text-[#FA4A14] font-bold'>
            It’s literally in mushroom’s DNA to be able to break down our plastics.
          </span>
        </p>

        <div className='w-1/3 h-full'>
          <CanvasMushroom scale={2} />
        </div>

        <div className=' w-1/3'></div>
      </div>

      <div className='bg-[#FA4A14] w-full h-screen'></div>
    </section>
  )
}
