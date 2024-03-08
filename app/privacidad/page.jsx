"use client"
import React, { useEffect } from 'react';
import { usePageContext } from './../PageContext.js';
import styles from '../pages.module.css'
import { Merriweather } from 'next/font/google'
import Link from 'next/link';

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  styles: ["normal", "italic"],
  subsets: ['latin']
})


export default function Privacidad() {
  const { setTitle, setDescription, setKeywords } = usePageContext();

    useEffect(() => {
        setTitle('Política de Privacidad - Ayuntamiento de Gibraleón');
        setDescription('Web oficial del Excmo. Ayuntamiento');
        setKeywords('Gibraleón, ayuntamiento');
    }, []);

    return (
      <main className={`${styles.main} ${styles.paginasFooter}`}>
        <h1 className={`${merriweather.className} ${styles.tituloPagina}`}>Política de Privacidad</h1>
        <h2>Información sobre Protección de datos</h2>

        <h3 style={{ marginTop: '15px' }}>1. Información básica sobre protección de datos</h3>
          <table border="1">
            <tr>
              <td>RESPONSABLE:</td>
              <td>AYUNTAMIENTO DE GIBRALEÓN<br></br>NIF: P2103500A</td>
            </tr>
            <tr>
              <td>CONTACTO:</td>
              <td>959300211<br></br>Plaza de España, 1. Gibraleón. 21500 Huelva<br></br>sac@gibraleon.com</td>
            </tr>
            <tr>
              <td>FINALIDAD</td>
              <td>Prestación de servicios públicos, envío de información</td>
            </tr>
            <tr>
              <td>LEGITIMACIÓN</td>
              <td>El cumplimiento de una tarea en interés público o el ejercicio de poder públicos (artículo 6.1,e del RGPD). Consentimiento de las personas interesadas, cuando sea preciso (artículo 6.1,a del RGPD).</td>
            </tr>
            <tr>
              <td>DESTINATARIOS</td>
              <td>Las Administraciones Públicas en el ejercicio de sus competencias, cuando sea necesario para la gestión de su solicitud.</td>
            </tr>
            <tr>
              <td>DERECHOS</td>
              <td>Las personas interesadas podrán solicitar el acceso, rectificación o supresión de sus datos, así como ejercitar otros derechos o retirar en su caso el consentimiento otorgado a través de la sede electrónica, en la sección “Protección de Datos”.</td>
            </tr>
            <tr>
              <td>INFORMACIÓN ADICIONAL</td>
              <td>Debe leer la información detallada sobre protección de datos más abajo</td>
            </tr>
          </table>

          <h3>2. Información detallada sobre protección de datos</h3>
            <p>Los datos personales vinculados a la página web y la sede electrónica responsabilidad del AYUNTAMIENTO DE GIBRALEÓN respetan las exigencias del Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo de 27 de abril de 2016 relativo a la protección de las personas físicas en el que respeta al tratamiento de datos personales y a la libre circulación de estos datos ( RGPD ) y la Ley Orgánica 3/2018, de 5 de diciembre , de Protección de Datos Personales y garantía de los derechos digitales ( LOPDGDD ).</p>

            <h4>2.1 ¿Quién es el Responsable del tratamiento?</h4>
            <p>Datos del Responsable:</p>
            <ul>
              <li>RESPONSABLE: AYUNTAMIENTO DE GIBRALEÓN</li>
              <li>NIF: P2103500A</li>
              <li>Dirección: Plaza de España, 1. Gibraleón. 21500 Huelva</li>
              <li>Teléfono: 959300211</li>
            </ul>
            <p>Datos del DELEGADO DE PROTECCIÓN DE DATOS:</p>
            <ul>
              <li>APDTIC PROFESIONALES, S.L.</li>
              <li>dpd@gibraleon.com </li>
            </ul>
            <p>El AYUNTAMIENTO DE GIBRALEÓN es responsable de mantener un registro de las actividades de tratamiento bajo su responsabilidad en cumplimiento de los deberes establecidos en el artículo 30 del RGPD.</p>

            <h4>2.2 ¿Con qué finalidad tratamos sus datos personales?</h4>
            <p>El AYUNTAMIENTO DE GIBRALEÓN tratará los datos personales de las personas interesadas, con carácter general, para:</p>
            <ol>
              <li>Gestionar los diferentes procedimientos administrativos e informar sobre su tramitación.</li>
              <li>Verificar o comprobar la exactitud de los datos personales que las personas interesadas declaren que ya obran en poder de las administraciones públicas o que previamente ya se acercaran.</li>
              <li>Realizar notificaciones y tramitar recursos.</li>
              <li>Gestionar peticiones de información, sugerencias, comunicaciones en general y remitir boletines informativos.</li>
            </ol>

            <h4>2.3 ¿Cuál es la legitimación para el tratamiento de sus datos?</h4>
            <p>El AYUNTAMIENTO DE GIBRALEÓN está legitimado para llevar a cabo el tratamiento de datos de carácter personal de acuerdo con el principio de licitud del tratamiento señalado en el artículo 6 del RGPD y, concretamente, para:</p>
            <ul>
              <li>Con carácter general, en el caso de la actividad de procedimiento administrativo la base jurídica de los tratamientos será el cumplimiento de una tarea en interés público o el ejercicio de poder públicos, teniendo en cuenta la Ley 39/2015, de 1 de octubre, del procedimiento administrativo común; la Ley 9/2017, de 8 de noviembre, de contratos del sector público; Ley 39/2015, de 1 de octubre, del procedimiento administrativo común, etc.</li>
              <li>En determinados supuestos el tratamiento vendrá legitimado por el consentimiento de las personas interesadas.</li>
              <li>En todo caso, la base de la legitimación se recogerá en las cláusulas informativas básicas disponibles en los formularios de recogida de datos personales.</li>
            </ul>

            <h4>2.4 ¿A qué destinatarios se comunicarán sus datos?</h4>
            <p>Sus datos podrán ser comunicados, según la legislación vigente y siempre que sea necesario para la gestión del procedimiento o petición, a otras administraciones públicas en el ejercicio de sus competencias, a entidades financieras, a diarios oficiales, páginas web o tableros de anuncios del AYUNTAMIENTO DE GIBRALEÓN para dar la publicidad legalmente exigida en los procedimientos donde sea necesaria.</p><p style={{ marginTop: '15px' }}>Las cláusulas informativas básicas incluirán, en todo caso, los destinatarios concretos de los datos.</p>

            <h4>2.5 ¿Durante cuánto tiempo conservaremos sus datos personales?</h4>
            <p>Los datos personales proporcionados se conservarán mientras no solicite su supresión o cancelación y siempre que resulten adecuados, pertinentes y limitados al necesario para los fines para los que sean tratados.</p>

            <h4>2.6 ¿Se realizarán transferencias de datos a terceros países?</h4>
            <p>Non se van a producir transferencias internacionales de datos.</p>

            <h4>2.7 ¿Cuáles son sus derechos cuándo nos facilita sus datos personales?</h4>
            <ul>
              <li><span className={styles.underline}>Acceso:</span> derecho a obtener confirmación sobre si estamos tratando datos personales suyos o no, a saber cuáles son, para que se usan, cuanto tiempo se van a guardar, el origen de los mismos y si se comunicaron o se van a comunicar la un tercero.</li>
              <li><span className={styles.underline}>Rectificación:</span> derecho a solicitar la rectificación de los datos inexactos y la que se completen los datos personales incompletos.</li>
              <li><span className={styles.underline}>Supresión:</span> derecho a solicitar la supresión de los datos de carácter personal cuando sean inadecuados, excesivos o ya no sean necesarios para los fines para los que fueron recogidos, incluido el derecho al olvido.</li>
              <li><span className={styles.underline}>Oposición:</span> derecho a oponerse, en determinadas circunstancias, la que se realice el tratamiento de sus datos personales o a solicitar que se cese en el tratamiento.</li>
              <li><span className={styles.underline}>Limitación del tratamiento:</span> derecho a solicitar, en las circunstancias establecidas legalmente, que no se traten sus datos más allá de la mera conservación de los mismos.</li>
              <li><span className={styles.underline}>Portabilidad:</span> derecho a recibir los datos de carácter personal en un formato estructurado, de uso común y lectura mecánica, y poder transmitirlos a otro responsable, siempre que sea técnicamente posible.</li>
            </ul>

            <h4>2.8 ¿Tendrá la posibilidad de retirar su consentimiento?</h4>
            <p>Tendrá la posibilidad y el derecho de retirar su consentimiento para cualquier finalidad específica otorgada en su momento, sin que eso afecte a la licitud del tratamiento basado en el consentimiento previo a su retirada.</p>

            <h4>2.9 ¿Dónde podrá ejercitar sus derechos?</h4>
            <p>La persona interesada podrá ejercer sus derechos sin coste alguno, recibiendo una respuesta en los plazos establecidos en el RGPD y la LOPDGDD, por los siguientes medios:</p>
            <ul>
              <li>Por escrito en el registro del AYUNTAMIENTO DE GIBRALEÓN. Esta solicitud deberá ir firmada junto con la copia del DNI o pasaporte del interesado. En caso de que se actúe a través de representante legal deberá acercarse, además, el DNI y el documento acreditativo de la presentación del representante.</li>
              <li>Si el AYUNTAMIENTO DE GIBRALEÓN tuviera dudas razonables en relación con la identidad de la persona física que cursa la solicitud podrá solicitar la información adicional necesaria para confirmar la identidad del interesado.</li>
              <li>El AYUNTAMIENTO DE GIBRALEÓN deberá responder la solicitud en el plazo de un mes desde su recepción. Este plazo podrá prorrogarse otros dos meses en caso de ser necesario, teniendo en cuenta la complejidad y el número de solicitudes recibidas. El interesado, en cualquier caso, será informado en el plazo de un mes a partir de la recepción de la solicitud.</li>
              <li>Cualquier interesado también podrá dirigir su solicitud de ejercicio de derechos el Delegado de Protección de datos en la sección “Protección de Datos” de la sede electrónica.</li>
              <li>Para más información: <a href="https://www.aepd.es/reglamento/derechos/index.html" target='_blank'>https://www.aepd.es/reglamento/derechos/index.html</a></li>
            </ul>

            <h4>2.10 ¿Cómo puede realizar una reclamación ante la Autoridad de Control?</h4>
            <p>En caso de que no se habían respetado sus derechos puede presentar una reclamación dirigiéndose por escrito a la Agencia Española de Protección de Datos (AEPD) sita en la calle Jorge Juan, 6-28001-Madrid o utilizar la sede electrónica: <a href="https://sedeagpd.gob.es/sede-electronica-web/" target='_blank'>https://sedeagpd.gob.es/sede-electronica-web/</a>.</p><p style={{ marginTop: '15px' }}>En ambos casos, deberá acompañar la documentación pertinente.</p>

            <h4>2.11 ¿Cuál es la legitimación para el tratamiento de sus datos?</h4>
            <p>En cumplimiento con el artículo 32 del RGPD y teniendo en cuenta el establecido en la Disposición Adicional Primera de la LOPDGDD 3/2018, el AYUNTAMIENTO DE GIBRALEÓN cuenta con unas medidas de seguridad establecidas por su reglamento interno de seguridad que sigue el Esquema Nacional de Seguridad (ENS) regulado por el Real Decreto 311/2022, de 3 de mayo.</p>

          <h3>3. NORMATIVA DE APLICACIÓN</h3>
            <ul>
              <li>Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD)</li>
              <li>Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo de 27 de abril de 2016 relativo a la protección de las personas físicas en el que respeta al tratamiento de datos personales y a la libre circulación de estos datos y por lo que se deroga la Directiva 95/46/CE (Reglamento General de Protección de Datos)</li>
              <li>Real Decreto 311/2022, de 3 de mayo, por el que se regula el Esquema Nacional de Seguridad</li>
            </ul>

        <h2>Derechos sobre Protección de datos</h2>
        <p>La normativa en materia de protección de datos permite que cualquier persona pueda ejercer sus derechos de acceso, rectificación, supresión y portabilidad de datos, oposición y limitación a su tratamiento, así como a no ser objeto de decisiones basadas únicamente en el tratamiento automatizado de sus datos. </p>

        <h3 style={{ marginTop: '15px' }}>Derecho de acceso</h3>
        <p>La persona afectada tiene derecho a ser informada:</p>
        <ul>
          <li>de los fines del tratamiento, así como de las categorías de datos personales que se traten y de las posibles comunicaciones de datos y sus destinatarios.</li>
          <li>de el plazo de conservación de los datos, de ser posible. De no serlo, los criterios para determinar este plazo.</li>
          <li>de el derecho a solicitar la rectificación o supresión de los datos, la limitación al tratamiento, u oponerse al mismo.</li>
          <li>de el derecho a presentar una reclamación ante la autoridad de control</li>
          <li>a obtener, cuando los datos personales no se hayan obtenido del interesado, cualquier información disponible sobre su origen</li>
          <li>a recibir información de las garantías adecuadas si se produce una transferencia internacional de datos</li>
          <li>a obtener una copia de los datos objeto del tratamiento</li>
          <li>de la existencia de decisiones automatizadas (incluyendo perfiles), la lógica aplicada y las consecuencias de este tratamiento.</li>
        </ul>
        <p>Debe distinguirse del derecho de acceso de los interesados a los expedientes administrativos que regula la Ley 39/2015, de 1 de octubre, del procedimiento administrativo común de las Administraciones Públicas así como el derecho de acceso regulado en la Ley 19/2013, de 9 de diciembre, de transparencia, acceso a la información pública y bueno gobierno.</p>

        <h3>Derecho de rectificación</h3>
        <p>La persona afectada tiene derecho a obtener sin dilación indebida, del responsable del tratamiento, la rectificación de los datos personales inexactos, así como que se completen aquellos datos personales incompletos, incluso mediante una declaración adicional.</p>

        <h3>Derecho de supresión (derecho al olvido)</h3>
        <p>La persona afectada puede solicitar la supresión de los datos personales cuando concurra alguno de los supuestos contemplados en la legislación destacando aquellos casos en que desaparezca la finalidad que motivó el tratamiento, o que los datos personales se hayan tratado de forma ilícita.</p><p style={{ marginTop: '15px' }}>Se exceptúa este derecho, en los casos en que deba prevalecer, para el cumplimiento de una misión realizada en interés público o en el ejercicio de poder públicos conferidos al responsable.</p>

        <h3>Derecho a la limitación del tratamiento</h3>
        <p>Permite a la persona afectada obtener del responsable del tratamiento la limitación del tratamiento de los datos cuando:</p>
        <ul>
          <li>se impugne la exactitud de los datos, mientras se verifica dicha exactitud por el responsable</li>
          <li>el tratamiento resulte ilícito pero el interesado solicite en lugar de la supresión la limitación de su uso</li>
          <li>el responsable ya no necesite los datos para el fin del tratamiento, pero sí la persona interesada para el ejercicio de alguno de sus derechos</li>
          <li>el afectado ejercitó su derecho de oposición al tratamiento, mientras de verifica si los motivos legítimos del responsable prevalecen sobre lo afectado</li>
        </ul>

        <h3>Derecho a la portabilidad</h3>
        <p>La persona interesada tendrá derecho a recibir del responsable del tratamiento sus datos personales, en un formato estructurado, de uso común y lectura mecánica, o solicitar que sean transmitidos a otro responsable del tratamiento cuando sea técnicamente posible.</p>

        <h3>Derecho de oposición</h3>
        <p>La persona afectada puede oponerse al tratamiento:</p>
        <ul>
          <li>Cuando por motivos relacionados con su situación personal, deba cesar el tratamiento de los datos, salvo que se acredite un interés legítimo, que prevalezca sobre los intereses, los derechos y las libertades del interesado, o sea necesario para el ejercicio o defensa de reclamaciones.</li>
          <li>Cuando el tratamiento tenga por objeto la mercadotecnia directa.</li>
        </ul>

        <p style={{ marginTop: '45px' }}>Formularios para el ejercicio de sus derechos: Sección de “Protección de Datos” de la sede electrónica.</p>

        <h2>Registro de actividades de tratamiento</h2>
        <p>El artículo 30 del Reglamento UE 2016/679 General de Protección de Datos (RGPD), establece que cada responsable llevará un registro de las actividades de tratamiento que efectúa y con la información indicada a continuación:</p>

        <ul>
          <li>El nombre y los datos de contacto del responsable y del delegado de protección de datos.</li>
          <li>Los fines del tratamiento.</li>
          <li>Una descripción de las categorías de interesados y de las categorías de datos personales.</li>
          <li>Las categorías de los destinatarios de los datos.</li>
          <li>Las transferencias de datos personales, si las hay.</li>
          <li>Los plazos previstos para la supresión de las diferentes categorías de datos, cuando sea posible.</li>
          <li>Una descripción general de las medidas técnicas y organizativas de seguridad.</li>
        </ul>
        <p>Asimismo, según se regula en el artículo 31.2 de la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD), todas las entidades incluidas en el artículo 77.1 de esta ley orgánica deberán hacer público un inventario de sus tratamientos en el que constará la información establecida en el artículo 30 del RGPD y su base legal legitimadora para el tratamiento de los datos de carácter personal.</p><p style={{ marginTop: '15px' }}>De conformidad con esta normativa, se lleva a cabo un registro de las actividades de tratamiento efectuadas por el AYUNTAMIENTO DE GIBRALEÓN:</p>
        <Link href="/pdfs/Registro actividades.pdf" target="_blank" style={{ display: 'block',marginTop: '25px', color: 'blue' }}>PDF Registro de Actividades de Tratamiento Ayuntamiento Gibraleón</Link>

        <h2>Delegado de Protección de Datos (DPD)</h2>
        <p>El artículo 37.1 del Reglamento UE 2016/679 General de Protección de Datos (RGPD), establece que las autoridades y organismos públicos tienen la obligación de designar a un Delegado de Protección de Datos (DPD).</p><p style={{ marginTop: '15px' }}>El AYUNTAMIENTO DE GIBRALEÓN ha designado a su DPD correctamente, tal y como se puede comprobar en: Consulta DPD</p>

        <ul>
          <li><span className={styles.underline}>Delegado de Protección de Datos:</span> APDTIC PROFESIONALES, S.L. </li>
          <li><span className={styles.underline}>Contacto:</span> dpd@gibraleon.com </li>
        </ul>
        <p>Sus funciones vienen definidas en el artículo 39 del RGPD y consisten principalmente en informar y asesorar a AYUNTAMIENTO DE GIBRALEÓN y a sus trabajadores sobre las obligaciones que les incumben en el tratamiento de datos de carácter personal, y la supervisión de su cumplimiento. Asimismo, debe cooperar con la Agencia Española de Protección de Datos (AEPD) y actuar como punto de contacto entre ésta y AYUNTAMIENTO DE GIBRALEÓN.</p><p style={{ marginTop: '15px' }}>A su vez, cualquier ciudadano podrá dirigirse al Delegado de Protección de Datos si le surgen dudas sobre el tratamiento de sus datos por parte de AYUNTAMIENTO DE GIBRALEÓN o no está conforme con el mismo. Para eso, puede contactar con el Delegado de Protección de Datos de AYUNTAMIENTO DE GIBRALEÓN dirigiéndose por escrito a la dirección de correo dpd@gibraleon.com</p><p style={{ marginTop: '15px' }}>Más información: Agencia Española de Protección de Datos – Delegado de Protección de Datos</p>

      </main>
    )
  }
  