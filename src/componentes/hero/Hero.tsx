export const Hero = () => {
  return (
    <section
      className="w-full min-h-screen flex flex-col gap-4 items-center lg:flex-row "
      id="#home"
    >
      <div className="w-full text-white lg:w-[50%] px-4">
        <p className="text-lg w-full rounded-lg lg:text-4xl font-bold text-left uppercase lg:w-[500px]  text-gradient bg-gradient-to-r from-white to-purple-500 text-transparent bg-clip-text">
          Sistema de estacionamiento con implementación IoT.
        </p>
        <p className="mt-4">
          En un mundo cada vez más conectado, la óptimizacion del espacio de
          estacionamiento y la gestión eficiente de este recurso es esencial.
          Descubre cómo nuestra tecnología IoT revoluciona tu experiencia de
          parqueo, haciendo que cada espacio cuente y brindándote el control que
          necesitas en la era de la movilidad
        </p>
      </div>
      <div className="w-full lg:w-[50%] px-4">
        <div className="bg-white lg:rounded-l-full w-full h-[400px] grid place-content-center ">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/parking-garage-6938528-5673122.png?f=webp"
            alt=""
            className=""
          />
        </div>
      </div>
    </section>
  );
};
