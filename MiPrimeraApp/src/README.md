# Arquitectura de la aplicación móvil

La carpeta `src` contiene el código propio de la aplicación. Los archivos de configuración de Expo, npm y TypeScript permanecen en la raíz.

## Carpetas

- `app`: composición principal de la aplicación y, más adelante, sus proveedores globales.
- `features`: funcionalidades organizadas por dominio. Cada funcionalidad mantiene juntas sus pantallas, componentes, lógica y estilos.
- `navigation`: rutas y tipos de navegación compartidos.
- `shared`: componentes, utilidades, hooks, tipos y tema reutilizables por varias funcionalidades; se agregan únicamente cuando hagan falta.

## Reglas sencillas

1. Una pantalla pertenece a la funcionalidad que representa.
2. Un componente usado solamente por una funcionalidad se queda dentro de ella.
3. Un componente se mueve a `shared` únicamente cuando varias funcionalidades lo reutilizan.
4. Las llamadas al backend vivirán dentro de la funcionalidad correspondiente o en servicios compartidos cuando sean realmente globales.
5. `App.tsx` debe permanecer pequeño y conectar las piezas principales.
