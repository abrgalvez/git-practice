# CV Web – Abraham Gálvez

Sitio web tipo **currículum profesional** desarrollado con **HTML5, Bootstrap 5 y jQuery**, enfocado en presentar experiencia laboral, educación, servicios y un formulario de contacto con validaciones en tiempo real.

---

## Tecnologías utilizadas

- **HTML5**
- **CSS3**
- **Bootstrap 5.3**
- **Bootstrap Icons**
- **jQuery 3.7**
- **Google Fonts (Roboto)**

---

## Características principales

### Modo oscuro
- Switch en el navbar para alternar entre modo claro y oscuro.
- Implementado mediante clases dinámicas y atributos `data-bs-theme`.

### Navbar responsivo
- Navbar sticky con colapso en pantallas pequeñas.
- Botón de contacto visible solo en desktop.

### Secciones del sitio
- **Hero**: presentación personal.
- **Experiencia Profesional**: historial laboral detallado.
- **Educación**: formación académica.
- **Servicios**: cards informativas con iconos.
- **Contacto**: datos personales y redes sociales.
- **Formulario**: contacto directo con validaciones.

---

## Formulario de contacto

El formulario incluye **validaciones en tiempo real usando jQuery**:

- **Nombre**: mínimo 3 caracteres.
- **Correo**: validación de formato email.
- **Edad**:
  - Solo números.
  - Límite de caracteres.
  - Mayor de 18 años.
- **Comentario**:
  - Mínimo 10 caracteres.
  - Contador dinámico (máx. 200).

---