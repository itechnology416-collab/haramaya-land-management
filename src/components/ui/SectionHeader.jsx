import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

export const SectionHeader = ({ title, subtitle, align = "center", className }) => {
    return (
        <div className={cn("mb-12", align === "center" ? "text-center" : "text-left", className)}>
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
                {title}
            </motion.h2>
            {subtitle && (
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-lg text-gray-600 max-w-2xl mx-auto"
                >
                    {subtitle}
                </motion.p>
            )}
            <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className={cn(
                    "h-1 bg-brand-gold rounded-full mt-4",
                    align === "center" ? "mx-auto w-24" : "w-16"
                )}
            />
        </div>
    );
};
