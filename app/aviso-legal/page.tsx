export default function AvisoLegal() {
  return (
    <main className="min-h-screen bg-void text-white">
      <div className="max-w-3xl mx-auto px-6 py-32">
        <h1 className="font-display text-4xl font-bold mb-4">Aviso Legal</h1>
        <p className="text-snow-muted text-sm mb-12">Última actualización: junio 2026</p>
        <div className="space-y-10 text-snow-muted leading-relaxed">
          <div>
            <h2 className="text-white font-bold text-xl mb-3">1. Titular del sitio web</h2>
            <p>Titular: <strong className="text-white">TeknoBai</strong>, gestionado por Oier Navarro y Liher Alfonso, País Vasco, España.</p>
            <p className="mt-3">Contacto: <strong className="text-white">teknobai.online@gmail.com</strong></p>
          </div>
          <div>
            <h2 className="text-white font-bold text-xl mb-3">2. Objeto</h2>
            <p>El presente aviso legal regula el acceso y uso de <strong className="text-white">teknobai.com</strong>. El acceso implica la aceptación de estas condiciones.</p>
          </div>
          <div>
            <h2 className="text-white font-bold text-xl mb-3">3. Propiedad intelectual</h2>
            <p>Todos los contenidos son propiedad de TeknoBai y están protegidos por la legislación española e internacional.</p>
          </div>
          <div>
            <h2 className="text-white font-bold text-xl mb-3">4. Responsabilidad</h2>
            <p>TeknoBai no se hace responsable de daños derivados del uso de este sitio web.</p>
          </div>
          <div>
            <h2 className="text-white font-bold text-xl mb-3">5. Protección de datos</h2>
            <p>Consulta nuestra <a href="/privacidad" className="text-electric-bright underline">Política de Privacidad</a>.</p>
          </div>
          <div>
            <h2 className="text-white font-bold text-xl mb-3">6. Legislación aplicable</h2>
            <p>Legislación española. Jurisdicción: tribunales del País Vasco.</p>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/8">
          <a href="/" className="text-electric-bright hover:underline text-sm">← Volver al inicio</a>
        </div>
      </div>
    </main>
  );
}