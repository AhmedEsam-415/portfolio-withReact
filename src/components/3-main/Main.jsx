import { Box, Paper, Stack } from '@mui/material';
import { useState } from 'react';
import { myProjects } from './myProjects';
import './main.scss';

// eslint-disable-next-line no-unused-vars
import { AnimatePresence, easeInOut, motion } from 'motion/react';

const Main = ({ mode }) => {
  //# useState
  const [active, setActive] = useState(0);
  const [project, setProject] = useState(myProjects);

  // 1. State للتحكم في الصورة المختارة (للبوب أب)
  const [selectedImg, setSelectedImg] = useState(null);

  const Buttons = [
    { label: 'All Projects', value: 'all' },
    { label: 'HTML & CSS', value: 'css' },
    { label: 'JavaScript', value: 'js' },
    { label: 'React & MUI', value: 'react' },
    { label: 'Node & Exprees', value: 'node' },
    { label: 'Bootstrap', value: 'bootstrap' },
  ];

  const handleFilterAndActive = (value, index) => {
    setActive(index);

    if (value === 'all') {
      setProject(myProjects);
    } else {
      const filtered = myProjects.filter((item) => {
        if (Array.isArray(item.Category)) {
          return item.Category.map((c) => c.toLowerCase()).includes(value);
        } else {
          return item.Category.toLowerCase() === value;
        }
      });

      setProject(filtered);
    }
  };

  // دالة لإغلاق البوب أب
  const closePopup = () => {
    setSelectedImg(null);
  };

  return (
    // هام جداً: لازم نفتح قوس Fragment عشان نقدر نحط الـ Stack والـ Popup مع بعض
    <>
      <Stack
        className="Main"
        direction={{ xs: 'column', md: 'row' }}
        alignItems={{ xs: 'center' }}
        mt={3}
        gap={{ xs: 4, md: 0 }}
        // 2. أنيميشن للكونتينت كله وهو بيظهر لأول مرة
        data-aos="fade-up"
        data-aos-delay={500} // تتابع في الظهور (Stagger)
      >
        <Stack
          className="firstDiv"
          height={'100%'}
          width={{ xs: 250, md: 350 }}
          direction={'column'}
          alignSelf={{ xs: 'center', md: 'flex-start' }}
          gap={'10px'}
          // أنيميشن للقائمة الجانبية (تظهر من الشمال مثلاً)
          data-aos="fade-right"
        >
          {Buttons.map((item, i) => (
            <button
              key={i}
              className={active === i ? 'active' : ''}
              onClick={() => handleFilterAndActive(item.value, i)}
            >
              {item.label}
            </button>
          ))}
        </Stack>

        <Stack
          className="secDiv"
          flexWrap={'wrap'}
          direction={'row'}
          gap={4}
          flexGrow={1}
        >
          {project.map((item, i) => {
            if (item.title !== '') {
              return (
                <Paper
                  key={item.id || item.title} // يفضل استخدام ID
                  className="Card"
                  // 3. أنيميشن للكروت وهي بتظهر من تحت لفوق
                  data-aos="fade-up"
                  data-aos-delay={i * 100} // تتابع في الظهور (Stagger)
                >
                  <img
                    className={`imge-${item.id}`}
                    src={item.img}
                    style={{ width: '100%', cursor: 'pointer' }} // إضافة شكل اليد للماوس
                    width={160}
                    height={160}
                    alt={item.title || ''} // استخدام العنوان كـ Alt text
                    // 2. عند الضغط، نرسل بيانات العنصر الحالي للـ State
                    onClick={() => setSelectedImg(item)}
                  />

                  <Box sx={{ pl: 1, my: 2 }}>
                    <h1>{item.title}</h1>
                    <p
                      style={{
                        color:
                          mode === 'dark'
                            ? 'var(--supTitleInDark)'
                            : 'var(--supTitleInLight)',
                      }}
                    >
                      {item.text}
                    </p>

                    <Stack
                      component={'nav'}
                      direction={'row'}
                      justifyContent={'space-between'}
                    >
                      <Box className="navIcons">
                        <button
                          style={{
                            backgroundColor:
                              mode === 'light'
                                ? 'var(--supTitleInDark)'
                                : 'var(--supTitleInLight)',
                          }}
                        >
                          <a
                            className="icon-link"
                            target="_blank"
                            rel="noreferrer" // أمان أفضل
                            href={item.linkProject}
                          ></a>
                        </button>
                        <button
                          style={{
                            backgroundColor:
                              mode === 'light'
                                ? 'var(--supTitleInDark)'
                                : 'var(--supTitleInLight)',
                          }}
                        >
                          <a
                            className="icon-github"
                            target="_blank"
                            rel="noreferrer"
                            href={item.linkGitHub}
                          ></a>
                        </button>
                      </Box>

                      <Box className="naveBtn">
                        <button>More</button>
                        <a href="#" className="icon-arrow-right2" />
                      </Box>
                    </Stack>
                  </Box>
                </Paper>
              );
            }
            return null;
          })}
        </Stack>
      </Stack>

      {/* 3. كود الـ Popup (يظهر فقط عند اختيار صورة) */}
      {selectedImg && (
        <>
          {/* الخلفية المظللة (عند الضغط عليها يغلق البوب أب) */}
          <div className="popup-overlay" onClick={closePopup}></div>

          {/* صندوق البوب أب */}
          <div className="popup-box">
            {/* العنوان (اختياري لو موجود في البيانات) */}
            {selectedImg.title && <h3>{selectedImg.title}</h3>}

            <img src={selectedImg.img} alt={selectedImg.title} />

            {/* زر الإغلاق */}
            <span className="closeButton" onClick={closePopup}>
              X
            </span>
          </div>
        </>
      )}
    </>
  );
};

export default Main;
