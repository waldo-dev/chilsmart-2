# Configuración de Facebook Pixel

## 📋 Pasos para configurar Facebook Pixel

### 1. Obtener tu Facebook Pixel ID

1. Ve a [Facebook Events Manager](https://business.facebook.com/events_manager2)
2. Selecciona tu cuenta de negocio o crea una nueva
3. Haz clic en "Conectar fuentes de datos" > "Web"
4. Selecciona "Facebook Pixel"
5. Copia tu **Pixel ID** (formato: números como `123456789012345`)

### 2. Configurar la variable de entorno

Crea un archivo `.env.local` en la carpeta `packages/landing/` con el siguiente contenido:

```env
NEXT_PUBLIC_FB_PIXEL_ID=tu_pixel_id_aqui
NEXT_PUBLIC_FB_TEST_EVENT_CODE=TEST59121
FB_ACCESS_TOKEN=tu_access_token_aqui
```

**Ejemplo con tu Access Token de Conversions API:**
```env
NEXT_PUBLIC_FB_PIXEL_ID=123456789012345
NEXT_PUBLIC_FB_TEST_EVENT_CODE=TEST59121
FB_ACCESS_TOKEN=EACBCxfzNg4EBQk931knOIw0HmWPJgGKLBvhZC9zvJNAg6aDIVzP9qNhyNZAJ5bDv5ZAOPZCQELZCXhEIOvoyFwQLDvNpMa32xmBTUdJXHYpDYsGDuTxXXayIIImajBphR5q8ZBP1aqVZCBUWrOtJbxZCKtkrdfz6Vb2G7ejxsvJJ3SxeLMbGBRVepjnutsS7VerCOwZDZD
```

**Nota:** Este es un Access Token específico para Conversions API. Si se te olvida o expira, puedes generar uno nuevo desde Facebook Events Manager.

**⚠️ IMPORTANTE - Seguridad del Access Token:**
- El `FB_ACCESS_TOKEN` **NUNCA** debe ir en el código del frontend
- Solo debe estar en variables de entorno del servidor (`.env.local` o variables de entorno del hosting)
- **NO** uses `NEXT_PUBLIC_` como prefijo para el access token (eso lo expondría al cliente)
- El access token se usa para Conversions API (server-side tracking) y otras operaciones del backend

**Nota:** El `TEST_EVENT_CODE` es opcional y se usa para testing. Puedes eliminarlo cuando estés listo para producción.

### 3. Verificar la instalación

1. Reinicia el servidor de desarrollo (`yarn dev` o `npm run dev`)
2. Abre tu página en el navegador
3. Instala la extensión [Facebook Pixel Helper](https://chrome.google.com/webstore/detail/facebook-pixel-helper/fdgfkebogiimcoedlicjlajpkdmockpc) en Chrome
4. Visita tu página y verifica que el pixel esté activo (debería aparecer un ícono azul en la barra de extensiones)
5. **Para verificar eventos de test:**
   - Ve a [Facebook Events Manager](https://business.facebook.com/events_manager2)
   - Selecciona tu Pixel
   - Ve a la pestaña "Test Events"
   - Deberías ver los eventos aparecer en tiempo real cuando interactúas con la página

## 🎯 Eventos que se están trackeando

### Eventos automáticos:
- **PageView**: Se trackea automáticamente en cada carga de página y cambio de ruta

### Eventos personalizados implementados:

1. **Contact Form Submission** (`Contact` + `Lead`)
   - Se dispara cuando un usuario envía el formulario de contacto
   - Ubicación: `containers/SaasCreative/Pricing/index.js`

2. **WhatsApp Click** (`Contact`)
   - Se dispara cuando un usuario hace clic en el botón de WhatsApp
   - Ubicaciones:
     - Banner principal (`containers/SaasCreative/Banner/index.js`)
     - Botón flotante de WhatsApp (`pages/index.js`)

## 🔧 Funciones disponibles para tracking

Puedes usar estas funciones en cualquier componente:

```javascript
import { 
  trackEvent, 
  trackContactFormSubmit, 
  trackWhatsAppClick,
  trackViewContent,
  trackLead,
  trackSchedule,
  trackCompleteRegistration,
  trackSubmitApplication,
  trackFindLocation,
  trackServerEvent
} from 'common/hooks/useFacebookPixel';

// Trackear evento personalizado (client-side)
trackEvent('CustomEvent', {
  content_name: 'Nombre del contenido',
  value: 100,
  currency: 'CLP'
});

// Trackear vista de contenido
trackViewContent('Nombre del contenido', 'tipo');

// Trackear lead
trackLead({
  content_name: 'Lead Form',
  value: 0,
  currency: 'CLP'
});

// Trackear evento Schedule (Programar cita)
trackSchedule({
  content_name: 'Appointment Scheduled'
});

// Trackear registro completado
trackCompleteRegistration({
  content_name: 'Registration Completed',
  status: true
});

// Trackear solicitud enviada
trackSubmitApplication({
  content_name: 'Application Submitted'
});

// Trackear búsqueda de ubicación
trackFindLocation({
  content_name: 'Location Search'
});

// Trackear evento server-side (Conversions API)
// Los datos del usuario se hashean automáticamente
trackServerEvent('Lead', {
  content_name: 'Contact Form',
  value: 0,
  currency: 'CLP'
}, {
  email: 'usuario@ejemplo.com',
  phone: '+56912345678',
  first_name: 'Juan',
  last_name: 'Pérez',
  country: 'CL'
}, {
  // Opciones adicionales
  eventId: 'unique_event_id_123', // Para deduplicación (opcional, se genera automáticamente si no se proporciona)
  eventTime: Math.floor(Date.now() / 1000), // Timestamp Unix (opcional, usa tiempo actual si no se proporciona)
  testEventCode: 'TEST59121' // Código de test event (opcional)
});
```

## 📊 Eventos estándar de Facebook implementados

### Eventos básicos:
- `PageView` - Vista de página (automático)
- `ViewContent` - Ver contenido
- `Contact` - Contacto (llamada, chat, SMS, email)
- `Lead` - Cliente potencial generado
- `Schedule` - Programar cita
- `CompleteRegistration` - Registro completado
- `SubmitApplication` - Enviar solicitud
- `FindLocation` - Buscar ubicación

### Otros eventos estándar disponibles:
- `Search` - Búsqueda
- `AddToCart` - Agregar al carrito
- `InitiateCheckout` - Iniciar checkout
- `Purchase` - Compra

## 📋 Parámetros requeridos según documentación oficial

### Parámetros comunes a todos los eventos:
- **event_time**: Fecha y hora del evento (timestamp Unix)
  - Puede ser anterior al momento de envío
  - **No puede ser más de 7 días en el pasado** (se rechazará el evento)
  - Si no se proporciona, se usa el tiempo actual
- **event_name**: Nombre del evento
- **event_id**: Identificador único del evento (para deduplicación)
  - Facebook usa `event_id` + `event_name` para deduplicar eventos del pixel y del servidor
  - Si no se proporciona, se genera automáticamente
  - **Importante**: Usa el mismo `event_id` en el pixel y en la API para evitar duplicados
- **event_source_url**: URL de origen del evento
- **action_source**: Origen de la acción (`website`, `app`, `phone_call`, etc.)

### Parámetros de información del cliente (user_data):
**Campos que DEBEN ir hasheados (SHA256):**
- `em` - Email
- `ph` - Teléfono (solo números)
- `fn` - Nombre (first_name)
- `ln` - Apellidos (last_name)
- `db` - Fecha de nacimiento (YYYYMMDD)
- `ge` - Género (m o f)
- `ct` - Ciudad
- `st` - Estado/Provincia
- `zp` - Código postal
- `country` - País (código ISO de 2 letras)

**Campos que NO deben ir hasheados:**
- `client_ip_address` - Dirección IP del cliente
- `client_user_agent` - Agente de usuario del cliente

### Eventos con parámetros adicionales:

**CompleteRegistration:**
- `event_id` - Identificador único del evento (opcional pero recomendado)
- Todos los campos de user_data disponibles

**ViewContent:**
- `content_name` - Nombre del contenido
- `content_category` - Categoría del contenido
- `content_ids` - IDs del contenido
- `value` - Valor del contenido
- `currency` - Moneda

## 🚀 Próximos pasos recomendados

1. **Configurar eventos personalizados en Facebook Events Manager**
2. **Crear audiencias personalizadas** basadas en los eventos
3. **Configurar conversiones** para medir el ROI de tus campañas
4. **Usar Facebook Analytics** para analizar el comportamiento de los usuarios

## 🔐 Access Token de Facebook (Conversions API)

El Access Token se usa para **Conversions API** (server-side tracking), que complementa el pixel del cliente y mejora la precisión del tracking, especialmente cuando los usuarios bloquean cookies o tienen ad blockers.

### Configuración del Access Token:

1. **Guarda el token de forma segura:**
   - En `.env.local` (para desarrollo): `FB_ACCESS_TOKEN=tu_token`
   - En tu plataforma de hosting (Vercel, Netlify, etc.) como variable de entorno
   - **NUNCA** lo pongas en el código fuente o en archivos que se suban a Git

2. **Uso del Access Token:**
   - El token está configurado y **activamente en uso** para Conversions API
   - Se usa para enviar eventos desde el servidor (`/api/facebook-conversion`)
   - Permite tracking más preciso y confiable

### Implementación de Conversions API:

✅ **Ya implementado y funcionando según la especificación oficial de Facebook**

La Conversions API está completamente configurada siguiendo la documentación oficial de Facebook:
- **Endpoint:** `https://graph.facebook.com/v18.0/{PIXEL_ID}/events?access_token={TOKEN}`
- **Método:** POST
- **Access Token:** Enviado como query parameter (según especificación oficial)
- **Datos hasheados:** Email y teléfono con SHA256 (requerido por Facebook)
- **Deduplicación:** Usa `event_id` para evitar duplicados entre pixel y servidor
- **Validación:** `event_time` validado (no más de 7 días en el pasado)

El sistema envía eventos tanto desde el cliente (Pixel) como desde el servidor (Conversions API) para:
- Mejorar la precisión del tracking
- Evitar bloqueos de ad blockers
- Tracking más confiable en dispositivos móviles
- Mejor matching de usuarios con datos hasheados
- Mayor visibilidad de datos del servidor (CRM, eventos offline)

**Características implementadas:**

1. **Deduplicación de eventos:**
   - Usa `event_id` único para cada evento
   - Facebook deduplica automáticamente eventos idénticos del pixel y del servidor
   - El mismo `event_id` debe usarse en ambos lugares para evitar duplicados

2. **Validación de event_time:**
   - Valida que `event_time` no sea más de 7 días en el pasado
   - Permite eventos históricos (hasta 7 días)
   - Si no se proporciona, usa el tiempo actual

3. **Lotes de eventos:**
   - Se pueden enviar hasta 1000 eventos en un lote
   - **Recomendación:** Enviar eventos inmediatamente cuando ocurren
   - Si un evento del lote es inválido, se rechaza todo el lote

4. **Testing:**
   - Soporte para `test_event_code` (ej: `TEST59121`)
   - Permite probar eventos sin afectar datos de producción
   - Los eventos de test aparecen en Facebook Events Manager

**Archivos relacionados:**
- `/api/facebook-conversion.js` - Endpoint para enviar eventos server-side siguiendo la especificación oficial
- `useFacebookPixel.js` - Hook con función `trackServerEvent()` mejorada
- Formulario de contacto - Envía eventos duales (client + server) con deduplicación

**Referencia oficial:**
- [Documentación de Conversions API](https://developers.facebook.com/docs/marketing-api/conversions-api)
- [Deduplicación de eventos](https://developers.facebook.com/docs/marketing-api/conversions-api/deduplicate-pixel-and-server-events)
- [Lotes de eventos](https://developers.facebook.com/docs/marketing-api/conversions-api/batch-requests)

## 📝 Notas importantes

- El pixel solo se carga si `NEXT_PUBLIC_FB_PIXEL_ID` está configurado
- Los eventos se trackean tanto en desarrollo como en producción
- Para testing, puedes usar el [Facebook Pixel Helper](https://chrome.google.com/webstore/detail/facebook-pixel-helper/fdgfkebogiimcoedlicjlajpkdmockpc)
- En producción, asegúrate de que las variables de entorno estén configuradas en tu plataforma de hosting (Vercel, Netlify, etc.)
- **NUNCA** expongas el `FB_ACCESS_TOKEN` en el código del cliente

