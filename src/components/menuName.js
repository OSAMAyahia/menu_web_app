import { motion } from 'framer-motion';

const Name = () => {
  return (
    <motion.div
      className="mt-4 mb-4"
      initial={{ x: '-100vw', y: '100vh', opacity: 0 }} // يبدأ من خارج الشاشة من اليسار ومن الأسفل مع شفافية 0
      animate={{ x: 0, y: 0, opacity: 1 }}  // يتحرك إلى مكانه الطبيعي ويصبح مرئيًا بالكامل
      transition={{ duration: 0.8, ease: 'easeOut' }} // مدة التأثير 0.8 ثانية
    >
      <h3 className="text-center">resturant menu</h3>
      <hr
        style={{
          width: '205px',
          borderTop: '7px solid #fe8b01',
          borderRadius: '900px',
        }}
        className="mx-auto"
      />
    </motion.div>
  );
};

export default Name;
