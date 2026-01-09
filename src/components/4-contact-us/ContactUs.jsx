import { Box, Stack } from '@mui/material';
import './contactUs.scss';
import { useForm, ValidationError } from '@formspree/react';

// animation Imports
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const ContactUs = ({ mode }) => {
  const [state, handleSubmit] = useForm('mnneapzr');

  return (
    <Box className="concatUs" data-aos="fade-up" data-aos-delay={500}>
      <Box>
        <Stack direction={'row'} alignItems={'center'} gap={2}>
          <span
            style={{
              fontSize: '30px',
              color:
                mode == 'dark'
                  ? ' var(--supTitleInDark) '
                  : 'var(--supTitleInLight) ',
            }}
            className="icon-envelope"
          />
          <h1>Contact Us</h1>
        </Stack>
        <p
          style={{
            color:
              mode == 'dark'
                ? ' var(--supTitleInDark) '
                : 'var(--supTitleInLight) ',
            padding: '10px 0',
          }}
        >
          Contact Us For More Information And Get notified When I Publish
          Something New
        </p>
      </Box>

      <Stack className="secContactUs">
        <form onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              style={{
                color:
                  mode == 'dark'
                    ? 'var(--supTitleInDark)'
                    : 'var(--supTitleInLight)',
              }}
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Email"
              required
              style={{
                backgroundColor: mode == 'dark' ? '#121212' : '#b4b4b4ff',
              }}
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div
            className="Divtextarea"
            style={{ marginTop: 24, display: 'flex' }}
          >
            <label
              htmlFor="msg"
              style={{
                color:
                  mode == 'dark'
                    ? 'var(--supTitleInDark)'
                    : 'var(--supTitleInLight)',
              }}
            >
              Your Message
            </label>
            <textarea
              style={{
                backgroundColor: mode == 'dark' ? '#121212' : '#b4b4b4ff',
              }}
              id="msg"
              name="message"
              placeholder="Enter Your Message"
              required
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button type="submit" disabled={state.submitting}>
            {state.submitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>

        <Box className="contactAnimation">
          <DotLottieReact src="/animation/Email.json" loop autoplay />
        </Box>
      </Stack>

      {state.succeeded && (
        <div
          style={{
            textAlign: 'center',
            marginTop: '15px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <DotLottieReact
            style={{ height: '55px', width: '55px', marginRight: '10px' }}
            src="/animation/success.json"
            loop={false}
            autoplay
          />
          <p>Your Message Has Been Sent Succeesfully</p>
        </div>
      )}
    </Box>
  );
};

export default ContactUs;
