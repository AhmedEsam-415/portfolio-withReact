import './fotter.scss';

const Fotter = ({ mode }) => {
  const links = ['About Me', 'Projects', 'Contact Us'];
  return (
    <footer>
      <ul>
        {links.map((item, i) => {
          return (
            <li key={i}>
              <a
                style={{
                  color:
                    mode == 'dark'
                      ? 'var(--supTitleInDark)'
                      : 'var(--supTitleInLight)',
                }}
                href="#"
              >
                {item}
              </a>
            </li>
          );
        })}
      </ul>

      <p
        style={{
          color:
            mode == 'dark' ? 'var(--supTitleInDark)' : 'var(--supTitleInLight)',
        }}
      >
        C 2025 Spencer Sharp , All Rights Reseved.
      </p>
    </footer>
  );
};

export default Fotter;
