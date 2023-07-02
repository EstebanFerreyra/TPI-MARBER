import React from 'react';
import "./AboutUs.css"

const AboutUs = () => {
    return (
        <div className="we-are-block">
            <div id="about-us-section">
                <div className="about-us-image">
                    <img src="https://imagenes.lainformacion.com/files/image_606_387/uploads/imagenes/2018/10/17/5bc786dd44234.jpeg" width="808" height="458" alt="Lobby Image" />
                </div>
                <div className="about-us-info">
                    <h2>De donde venimos</h2>
                    <p>
                        "Marber" es el nombre que honra a los nietos del emprendedor, Martina y Bernardo. Representa la importancia de la familia y la inspiración que impulsa a la empresa. Buscan que los clientes se sientan parte de la familia, transmitiendo pasión y compromiso en cada producto y servicio.</p>
                </div>
            </div>
            <div id="history-section">
                <div className="history-image">
                    <img src="https://www.infobae.com/new-resizer/QRVmZXs15_a6tNNis82NjC38luA=/992x441/filters:format(webp):quality(85)/arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/USSTKZKTRZGCPKCDNC2NF7GHH4.jpg" width="951" height="471" alt="Building Pic" />
                </div>
                <div className="history-info">
                    <h2>Nuestra mision</h2>
                    <p> 
Estamos emocionados de brindarles una experiencia excepcional, con productos de calidad y deliciosos sabores. Cuidamos cada detalle para asegurar una sinfonía culinaria única. Su satisfacción es nuestra prioridad, y esperamos que disfruten cada momento con nosotros, saboreando nuestra pasión y amor en cada producto.    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutUs      