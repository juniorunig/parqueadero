export const About = () => {
  return (
    <section id="acerca" className="p-4 min-h-screen w-full text-white flex item-center flex-col  ">
      <h2 className="mx-auto text-lg mt-4 lg:text-4xl text-center font-bold  uppercase w-full  text-gradient bg-gradient-to-r from-white to-purple-500 text-transparent bg-clip-text">acerca de</h2>
      <div className="max-w-[1020px] mx-auto mt-4 font-mono flex flex-col gap-4">
        <p>
          En el mundo actual, la eficiencia en la gestión del espacio y la
          movilidad urbana es crucial. Nuestro proyecto de sistema de
          parqueadero se basa en la innovadora tecnología del Internet de las
          cosas (IoT) para abordar estos desafíos. Este sistema ofrece una
          solución integral que utiliza sensores inteligentes para recopilar
          datos en tiempo real sobre la disponibilidad de espacios de
          estacionamiento. Más allá de su utilidad para los usuarios, nuestro
          enfoque también ofrece beneficios significativos para los negocios de
          estacionamiento en la gestión y optimización de sus recursos.
        </p>

        <p>
          Caso de uso público: Una de las aplicaciones clave de nuestro sistema
          es su uso público, permitiendo a los usuarios verificar la
          disponibilidad de espacios de estacionamiento antes de llegar a su
          destino. Mediante una aplicación móvil o una plataforma web accesible,
          los conductores pueden visualizar en tiempo real la disponibilidad de
          espacios en un área específica. Esto no solo reduce el estrés y el
          tiempo empleado en la búsqueda de estacionamiento, sino que también
          contribuye a la descongestión del tráfico al dirigir a los conductores
          hacia áreas con disponibilidad de parqueo.
        </p>
        <p>
          Caso de uso privado para negocios de estacionamiento: Por otro lado,
          nuestro sistema ofrece una solución personalizada para negocios de
          estacionamiento. Al implementar sensores IoT en sus instalaciones, los
          negocios pueden monitorear y gestionar eficazmente el uso de sus
          espacios. Estos sensores recopilan datos sobre la ocupación de
          espacios y la duración de los vehículos estacionados, permitiendo a
          los administradores analizar patrones de uso, prever la demanda y
          optimizar la asignación de espacios. Esta herramienta no solo mejora
          la eficiencia operativa, sino que también optimiza la experiencia del
          cliente al agilizar el proceso de estacionamiento y ofrecer una
          gestión más eficaz de la capacidad del parqueadero.
        </p>
      </div>
    </section>
  );
};
