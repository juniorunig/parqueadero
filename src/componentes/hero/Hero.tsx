export const Hero = () => {
  return (
    <section className="w-full min-h-screen flex items-center " id="#home">
      <div className="text-white w-[50%] px-4">
        <p className="text-6xl font-bold text-left uppercase w-[500px]  text-gradient bg-gradient-to-r from-white to-purple-500 text-transparent bg-clip-text">
          sistema de parqueadero por iot
          {/* bg-[#170E2F] */}
        </p>
        <p className="mt-4">
          En un mundo cada vez más conectado, la optimización del espacio y la
          gestión eficiente son esenciales. Nuestro proyecto de Internet de las
          cosas (IoT) ofrece una solución innovadora para el problema de
          estacionamiento urbanos 
        </p>
      </div>
      <div className="w-[50%] px-4">
        <div className="bg-white rounded-l-full w-full h-[400px] grid place-content-center ">
          <img src="https://cdni.iconscout.com/illustration/premium/thumb/parking-garage-6938528-5673122.png?f=webp" alt="" className="" />
        </div>
      </div>
    </section>
  );
};
