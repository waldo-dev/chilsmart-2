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
FB_ACCESS_TOKEN=EAARWHhHjFLYBQl3l9XIEum2tnnLbB8ZBcsZCHLoVjdkn0jvKSpDx6q8UMb5XIqUJmv6SSJAQeZBHDQpDzLZCCSiKNwbMmTFZCWylKZCmOnau5Ee32CRZCp5xEYvl6BOb95TnlyP8YZBDYAiueaGs082RkbfwqhLqdEu4Sg8SgxmOKxpZC9XpZB7lgVJcodtmJhMX8M1CMD2t3PpEtevVv2UYgTwGZAY3FrSZAfHYyBYVtQZDZD
```

**Ejemplo:**
```env
NEXT_PUBLIC_FB_PIXEL_ID=123456789012345
NEXT_PUBLIC_FB_TEST_EVENT_CODE=TEST59121
FB_ACCESS_TOKEN=EAARWHhHjFLYBQl3l9XIEum2tnnLbB8ZBcsZCHLoVjdkn0jvKSpDx6q8UMb5XIqUJmv6SSJAQeZBHDQpDzLZCCSiKNwbMmTFZCWylKZCmOnau5Ee32CRZCp5xEYvl6BOb95TnlyP8YZBDYAiueaGs082RkbfwqhLqdEu4Sg8SgxmOKxpZC9XpZB7lgVJcodtmJhMX8M1CMD2t3PpEtevVv2UYgTwGZAY3FrSZAfHYyBYVtQZDZD
```

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
  trackLead 
} from 'common/hooks/useFacebookPixel';

// Trackear evento personalizado
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
```

## 📊 Eventos estándar de Facebook

Los eventos estándar que puedes usar incluyen:
- `PageView` - Vista de página
- `ViewContent` - Ver contenido
- `Search` - Búsqueda
- `AddToCart` - Agregar al carrito
- `InitiateCheckout` - Iniciar checkout
- `Purchase` - Compra
- `Lead` - Lead generado
- `CompleteRegistration` - Registro completado
- `Contact` - Contacto

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
   - Actualmente el token está configurado pero no se usa activamente
   - Se puede usar para implementar Conversions API en el futuro
   - Permite enviar eventos desde el servidor para mayor precisión

### Implementación de Conversions API (Opcional):

Si quieres implementar server-side tracking, puedes crear una API route que envíe eventos a Facebook usando el access token. Esto es útil para:
- Mejorar la precisión del tracking
- Evitar bloqueos de ad blockers
- Tracking más confiable en dispositivos móviles

## 📝 Notas importantes

- El pixel solo se carga si `NEXT_PUBLIC_FB_PIXEL_ID` está configurado
- Los eventos se trackean tanto en desarrollo como en producción
- Para testing, puedes usar el [Facebook Pixel Helper](https://chrome.google.com/webstore/detail/facebook-pixel-helper/fdgfkebogiimcoedlicjlajpkdmockpc)
- En producción, asegúrate de que las variables de entorno estén configuradas en tu plataforma de hosting (Vercel, Netlify, etc.)
- **NUNCA** expongas el `FB_ACCESS_TOKEN` en el código del cliente

