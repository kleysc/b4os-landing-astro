// Netlify function: suscripción al newsletter
// Guarda el email en Customer.io (identify + evento newsletter_subscribed)

import CustomerIO from 'customerio-node';

const cio = new CustomerIO(
  process.env.CUSTOMERIO_SITE_ID,
  process.env.CUSTOMERIO_TRACK_API_KEY
);

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export const handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const { email } = JSON.parse(event.body || '{}');

    if (!email || !isValidEmail(email)) {
      return {
        statusCode: 400,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify({
          error: 'Email inválido',
          message: 'Por favor proporciona un email válido'
        })
      };
    }

    if (!process.env.CUSTOMERIO_SITE_ID || !process.env.CUSTOMERIO_TRACK_API_KEY) {
      console.error('Customer.io env vars missing');
      return {
        statusCode: 500,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify({
          success: false,
          message: 'Servicio no configurado. Por favor intenta más tarde.'
        })
      };
    }

    // Crear/actualizar persona en Customer.io
    await cio.identify(email, {
      email,
      newsletter_subscriber: true,
      newsletter_signup_date: new Date().toISOString(),
      source: 'b4os-website',
      newsletter_source: 'footer'
    });

    // Evento para segmentación y campañas
    await cio.track(email, {
      name: 'newsletter_subscribed',
      data: {
        source: 'footer',
        signup_date: new Date().toISOString(),
        user_agent: event.headers['user-agent'] || '',
        referer: event.headers['referer'] || event.headers['referrer'] || ''
      }
    });

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        success: true,
        message: 'Gracias por suscribirte'
      })
    };
  } catch (error) {
    console.error('Newsletter signup error:', error);
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        success: false,
        message: 'No pudimos completar la suscripción. Por favor intenta nuevamente.'
      })
    };
  }
};
