import { apple, bill, google } from '../assets'
import styles, { layout } from '../style'

const Billing = () => {
  return (
    <section id='product' className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="billing" className='w-[100%] h-[100%] z-[5]' />
      </div>

      <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full' />
      <div className='absolute z-[3] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full' />

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Easily control your <br className='sm:block hidden' /> billing &#38; invoicing</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>

        <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
          <img src={apple} alt="apple_store" className='object-contain mr-5 cursor-pointer' />
          <img src={google} alt="play_store" className='object-contain cursor-pointer' />
        </div>
      </div>
    </section>
  )
}

export default Billing