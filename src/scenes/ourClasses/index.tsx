import { SelectedPage, ClassType } from '../../shared/types'
import image1 from "../../assets/image1.png"
import image2 from "../../assets/image2.png"
// import image3 from "../../assets/image3.png"
import image4 from "../../assets/image4.png"
import image5 from "../../assets/image5.png"
import image6 from "../../assets/image6.png"
import { motion } from 'framer-motion'
import HText from '../../shared/HText'
import Class from "./Class"

const classes: Array<ClassType> = [
    {
        name: "Weight training classes",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis earum odio sed ullam libero praesentium et veritatis fugit inventore obcaecati?",
        image: image1
    },
    {
        name: "Yoga classes",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis earum odio sed ullam libero praesentium et veritatis fugit inventore obcaecati?",
        image: image2
    },
    // {
    //     name: "Ab core classes",
    //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis earum odio sed ullam libero praesentium et veritatis fugit inventore obcaecati?",
    //     image: image3
    // },
    {
        name: "Adventure classes",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis earum odio sed ullam libero praesentium et veritatis fugit inventore obcaecati?",
        image: image4
    },
    {
        name: "Fitness training classes",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis earum odio sed ullam libero praesentium et veritatis fugit inventore obcaecati?",
        image: image5
    },
    {
        name: "Training classes",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis earum odio sed ullam libero praesentium et veritatis fugit inventore obcaecati?",
        image: image6
    },
]


type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const OurClasses = ({setSelectedPage}: Props) => {
  return (
    <section id='ourclasses' className='w-full bg-red-200 py-40'>
        <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
        >
            <motion.div
            className='mx-auto w-5/6'
            initial="hidden" 
                 whileInView="visible" 
                 viewport={{once: true, amount: 0.5}} 
                 transition={{duration: 0.5}}
                 variants={{
                    hidden: {opacity: 0, x:-50}, 
                    visible: {opacity: 1, x:0}
                 }}
            >
                <div className='md:w-3/5'>
                    <HText>OUR CLASSES</HText>
                    <p className='py-5'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut laboriosam expedita molestias excepturi, impedit aliquid et fugit quaerat, sunt vel voluptatem reprehenderit dolorum nulla iusto, odio omnis provident doloremque necessitatibus.
                    </p>
                </div>
            </motion.div>
            <div className='mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden'>
                <ul className='w-[2400px] whitespace-nowrap'>
                    {classes.map((item: ClassType, index) => (
                        <Class 
                        key={`${item.name}-${index}`}
                        name={item.name}
                        description={item.description}
                        image={item.image}
                        />
                    ))}
                </ul>
            </div>
        </motion.div>
    </section>
  )
}

export default OurClasses