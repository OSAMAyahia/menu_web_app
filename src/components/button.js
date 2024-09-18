import { motion } from 'framer-motion';

const Button = ({ arr, fil }) => {
  return (
    <div className="container justify-content-center mb-4 mt-4">
      <div className="btn-group d-flex flex-wrap" role="group" aria-label="Basic button group">
        {arr.map((i, index) => {
          return (
            <motion.button
              key={index}
              type="button"
              onClick={() => fil(i)}
              className="btn btn-outline-secondary"
              style={{ borderRadius: "4px" }}
              initial={{ x: 100, opacity: 0 }} // الزر يبدأ خارج الشاشة على اليمين مع شفافية 0
              animate={{ x: 0, opacity: 1 }}  // الزر يتحرك إلى مكانه الطبيعي وتصبح الشفافية كاملة
              transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }} // مدة الحركة 0.6 ثانية وتأخير بين الأزرار
            >
              {i}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

export default Button;
