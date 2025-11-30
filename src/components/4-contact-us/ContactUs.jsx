import { Box, Stack } from '@mui/material';
import './contactUs.scss';
import { useForm, ValidationError } from '@formspree/react';

const ContactUs = ({ mode }) => {
  const [state, handleSubmit] = useForm('mnneapzr');

  return (
    <Box className="concatUs">
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
          <div class="letter-image">
            <div class="animated-mail">
              <div class="back-fold"></div>
              <div class="letter">
                <div class="letter-border"></div>
                <div class="letter-title"></div>
                <div class="letter-context"></div>
                <div class="letter-stamp">
                  <div class="letter-stamp-inner"></div>
                </div>
              </div>
              <div class="top-fold"></div>
              <div class="body"></div>
              <div class="left-fold"></div>
            </div>
            <div class="shadow"></div>
          </div>
        </Box>
      </Stack>

      {state.succeeded && (
        <h1 style={{ textAlign: 'center', marginTop: '15px' }}>
          Your Message Has Been Sent Succeesfully
        </h1>
      )}
    </Box>
  );
};

export default ContactUs;
