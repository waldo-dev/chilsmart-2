export default async function handler(req, res) {
  // Solo permitir métodos POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Validar que el cuerpo de la solicitud tenga los campos requeridos
    const { nombre, email, mensaje } = req.body;
    
    if (!nombre || !email || !mensaje) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Enviar los datos al webhook de n8n
    const webhookUrl = 'https://n8n.chilsmart.com/webhook/contacto-chilsmart';
    
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nombre: req.body.nombre,
        email: req.body.email,
        telefono: req.body.telefono || null,
        empresa: req.body.empresa || null,
        mensaje: req.body.mensaje,
        fecha: req.body.fecha || new Date().toISOString()
      }),
    });

    if (!response.ok) {
      throw new Error(`Webhook responded with status: ${response.status}`);
    }

    // Retornar éxito
    return res.status(200).json({ 
      success: true,
      message: 'Form submitted successfully' 
    });

  } catch (error) {
    console.error('Error in contact API route:', error);
    return res.status(500).json({ 
      error: 'Failed to submit form',
      message: error.message 
    });
  }
}

