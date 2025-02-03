import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

interface FilterTabsProps {
  onFilterChange: (filter: string) => void;
}

export function FilterTabs({ onFilterChange }: FilterTabsProps) {
  return (
    <div className="max-w-7xl mx-auto px-6 mb-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="w-full justify-center bg-[#2a1f43] p-1 mt-8">
            {['all', 'formation', 'coaching'].map((tab) => (
              <motion.div
                key={tab}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <TabsTrigger 
                  value={tab}
                  className="data-[state=active]:bg-blue-600"
                  onClick={() => onFilterChange(tab)}
                >
                  <p className="font-bold text-white">
                    {tab === 'all' ? 'Tous les témoignages' : 
                     tab === 'formation' ? 'Formation' : 'Coaching Privé'}
                  </p>
                </TabsTrigger>
              </motion.div>
            ))}
          </TabsList>
        </Tabs>
      </motion.div>
    </div>
  );
}