'use client';

import { motion } from 'framer-motion';
import { Skill } from '@/types';

interface SkillCardProps {
    skill: Skill;
}

export function SkillCard({ skill }: SkillCardProps) {
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white dark:bg-dark-100 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-dark-300"
        >
            <div className="flex items-center justify-between mb-2">
        <span className="font-medium text-gray-900 dark:text-gray-100 text-sm">
          {skill.name}
        </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">
          {skill.level}%
        </span>
            </div>

            <div className="w-full bg-gray-200 dark:bg-dark-300 rounded-full h-2 overflow-hidden">
                {/* Render the final width immediately (SSR-safe), animate via scaleX */}
                <motion.div
                    // DO NOT set an initial different "style.width" than SSR.
                    style={{ width: `${skill.level}%`, transformOrigin: 'left' }}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="h-2 rounded-full bg-gradient-to-r from-primary-500 to-primary-600"
                />
            </div>
        </motion.div>
    );
}
