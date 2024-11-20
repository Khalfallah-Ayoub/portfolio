import { Moon, Sun, Palette, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const themes = [
    { id: 'light', icon: Sun, label: 'Light' },
    { id: 'dark', icon: Moon, label: 'Dark' },
    { id: 'purple', icon: Palette, label: 'Purple' },
    { id: 'emerald', icon: Leaf, label: 'Emerald' }
  ] as const;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-4 right-4 bg-card rounded-lg shadow-lg p-2 flex space-x-2 z-50"
    >
      {themes.map(({ id, icon: Icon, label }) => (
        <motion.button
          key={id}
          onClick={() => setTheme(id as any)}
          className={`p-2 rounded-lg transition-all duration-300 ${
            theme === id 
              ? 'bg-primary text-background scale-110' 
              : 'text-text hover:bg-card-hover'
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          title={label}
        >
          <Icon className="w-5 h-5" />
        </motion.button>
      ))}
    </motion.div>
  );
}