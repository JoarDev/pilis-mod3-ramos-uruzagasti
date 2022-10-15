import { ClimateCard } from '/src/components/location/ClimateCard';
import { motion } from 'framer-motion';

export const Home = () => {
    return (
        <div>
            <motion.h1
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                    duration: 1,
                    ease: 'linear',
                    type: 'spring'
                }}>
                Location List
                </motion.h1>
            <ClimateCard></ClimateCard>
        </div>
    )
}
