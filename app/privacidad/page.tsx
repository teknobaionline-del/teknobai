export default function Privacidad() {
  return (
    <main className="min-h-screen bg-void text-white">
      <div className="max-w-3xl mx-auto px-6 py-32">
        <h1 className="font-display text-4xl font-bold mb-4">
          Política de Privacidad
        </h1>
        <p className="text-snow-muted text-sm mb-12">
          Última actualización: mayo 2026
        </p>

        <div className="space-y-10 text-snow-muted leading-relaxed">

          <div>
            <h2 className="text-white font-bold text-xl mb-3">1. Responsable del tratamiento</h2>
            <p>El responsable del tratamiento de los datos personales recogidos en esta web es <strong className="text-white">TeknoBai</strong>, gestionada por Oier Navarro y Liher Alfonso, con domicilio en la margen izquierda del Nervión, País Vasco, España. Contacto: teknobai.online@gmail.com</p>
          </div>

          <div>
            <h2 className="text-white font-bold text-xl mb-3">2. Datos que recogemos</h2>
            <p>A través de esta web podemos recoger los siguientes datos personales:</p>
            <ul className="list-disc list-inside mt-3 space-y-2">
              <li>Nombre y apellidos</li>
              <li>Dirección de correo electrónico</li>
              <li>Número de teléfono (si lo proporcionas)</li>
              <li>Nombre de tu negocio</li>
              <li>Mensajes y contenido que nos envíes a través del formulario de contacto o reseñas</li>
            </ul>
          </div>

          <div>
            <h2 className="text-white font-bold text-xl mb-3">3. Finalidad del tratamiento</h2>
            <p>Los datos recogidos se utilizan exclusivamente para:</p>
            <ul className="list-disc list-inside mt-3 space-y-2">
              <li>Responder a tus consultas y mensajes de contacto</li>
              <li>Gestionar las reseñas que publiques voluntariamente</li>
              <li>Mejorar nuestros servicios</li>
            </ul>
          </div>

          <div>
            <h2 className="text-white font-bold text-xl mb-3">4. Base legal</h2>
            <p>El tratamiento de tus datos se basa en tu consentimiento expreso al rellenar y enviar el formulario de contacto o publicar una reseña.</p>
          </div>

          <div>
            <h2 className="text-white font-bold text-xl mb-3">5. Conservación de los datos</h2>
            <p>Conservamos tus datos el tiempo necesario para atender tu consulta y, en el caso de las reseñas, mientras estén publicadas en la web. Puedes solicitar su eliminación en cualquier momento.</p>
          </div>

          <div>
            <h2 className="text-white font-bold text-xl mb-3">6. Tus derechos</h2>
            <p>Tienes derecho a:</p>
            <ul className="list-disc list-inside mt-3 space-y-2">
              <li>Acceder a tus datos personales</li>
              <li>Rectificar datos incorrectos</li>
              <li>Solicitar la eliminación de tus datos</li>
              <li>Oponerte al tratamiento de tus datos</li>
              <li>Solicitar la limitación del tratamiento</li>
            </ul>
            <p className="mt-3">Para ejercer cualquiera de estos derechos, escríbenos a <strong className="text-white">teknobai.online@gmail.com</strong></p>
          </div>

          <div>
            <h2 className="text-white font-bold text-xl mb-3">7. Cookies</h2>
            <p>Esta web utiliza cookies propias para mejorar tu experiencia de navegación. Puedes aceptarlas o rechazarlas a través del banner que aparece al entrar en la web. No utilizamos cookies de terceros ni publicitarias.</p>
          </div>

          <div>
            <h2 className="text-white font-bold text-xl mb-3">8. Seguridad</h2>
            <p>Aplicamos medidas técnicas y organizativas para proteger tus datos personales contra accesos no autorizados, pérdida o alteración.</p>
          </div>

          <div>
            <h2 className="text-white font-bold text-xl mb-3">9. Cambios en esta política</h2>
            <p>Podemos actualizar esta política de privacidad ocasionalmente. Te recomendamos revisarla periódicamente. La fecha de última actualización aparece al inicio de esta página.</p>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-white/8">
          <a href="/" className="text-electric-bright hover:underline text-sm">
            ← Volver al inicio
          </a>
        </div>
      </div>
    </main>
  );
}