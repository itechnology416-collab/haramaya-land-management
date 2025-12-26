import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

export const Card = ({ children, className, hover = true, ...props }) => {
    return (
        <motion.div
            whileHover={hover ? { y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" } : {}}
            className={cn(
                "bg-white rounded-xl shadow-card p-6 border border-gray-100 transition-colors",
                className
            )}
            {...props}
        >
            {children}
        </motion.div>
    );
};
