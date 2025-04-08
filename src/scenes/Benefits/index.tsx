import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid"
import { BenefitType, SelectedPage } from "../../shared/types"
import { motion } from "framer-motion";
import HText from "../../shared/HText";
import Benefit from "./Benefit";
import ActionButton from "../../shared/ActionButton";
import BenefitsPageGraphic from "../../assets/BenefitsPageGraphic.png"

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "State of the art facilities",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, in." 
    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "100's of diverse classes",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, in." 
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "Expert and pro trainers",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, in." 
    },
]

const container = {
    hidden: {},
    visible: {
        transition: {staggerChildren: 0.2}
    }
}


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
        <motion.div 
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
        >
            {/* HEADER */}
            <motion.div 
            className="md:my-5 md:w-3/5"
            initial="hidden" 
            whileInView="visible" 
            viewport={{once: true, amount: 0.5}} 
            transition={{duration: 0.5}}
            variants={{
            hidden: {opacity: 0, x:-50}, 
            visible: {opacity: 1, x:0}
            }}
            >
                <HText>MORE THAN JUST A GYM.</HText>
                <p className="my-5 text-sm text-red-900">
                    We provide world class fitness equipment, trainers and classes to get you to your ultimate fitness goals with ease. We provide true care into each and every member.
                </p>
            </motion.div>

            {/* BENEFITS */}
            <motion.div 
            className="md:flex items-center justify-between gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            variants={container}
            >
                {benefits.map((benefit : BenefitType) => (
                    <Benefit
                    key={benefit.title}
                    icon={benefit.icon}
                    title={benefit.title}
                    description={benefit.description}
                    setSelectedPage={setSelectedPage}
                     />
                ))}
            </motion.div>

            {/* GRAPHICS AND DESC */}
            <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                {/* GRAPHIC */}
                <img className="mx-auto"
                alt="benefits-page-graphic"
                src={BenefitsPageGraphic}
                 />

                {/* DESC */}
                <div>
                    {/* TITLE */}
                    <div className="relative">
                        <div className="before:absolute before:-top-20 before:-left-20 before:z-[1]before: content-abstractwaves">
                            <motion.div
                            initial="hidden" 
                            whileInView="visible" 
                            viewport={{once: true, amount: 0.5}} 
                            transition={{duration: 0.5}}
                            variants={{
                            hidden: {opacity: 0, x:50}, 
                            visible: {opacity: 1, x:0}
                            }}
                            >
                                <HText>
                                    MILIONS OF HAPPY MEMBERS GETTING{" "}
                                    <span className="text-red-500">FIT</span>
                                </HText>
                            </motion.div>
                        </div>
                    </div>

                    {/* DESC */}
                    <motion.div
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{once: true, amount: 0.5}} 
                    transition={{delay:0.2, duration: 0.5}}
                    variants={{
                    hidden: {opacity: 0, x:50}, 
                    visible: {opacity: 1, x:0}
                    }}
                    >
                        <p className="my-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio voluptatibus commodi facilis laborum sint voluptates quia sapiente adipisci nobis quisquam perferendis, tempora sunt ducimus ab quaerat iusto. Nihil debitis quae qui, est tempore placeat hic! Tempore exercitationem accusamus pariatur in?
                        </p>
                        <p className="mb-5">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam culpa asperiores vitae, optio ducimus eum dolores iusto nostrum ut labore provident veritatis omnis possimus molestias dolorem officia facere! Eligendi, dolore!
                        </p>
                    </motion.div>

                    {/* BUTTON */}
                    <div className="relative mt-16">
                        <div className="before: absolute before:-bottom-20 before:right-40 before:z-[1] before:content-sparkles">
                            <ActionButton setSelectedPage={setSelectedPage}>
                                Join now
                            </ActionButton>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    </section>
  )
}

export default Benefits